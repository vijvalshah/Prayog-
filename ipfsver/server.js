require('dotenv').config();
const express = require('express');
const path = require('path');
const pinataSDK = require('@pinata/sdk');
const CryptoJS = require('crypto-js');
const fs = require('fs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const port = 3001;

// Initialize Pinata
const pinata = new pinataSDK(
    process.env.PINATA_API_KEY,
    process.env.PINATA_API_SECRET
);

app.use(express.json());
app.use(express.static('public'));

// Function to compute hashes
const computeHashes = (data) => {
    const jsonString = typeof data === 'string' ? data : JSON.stringify(data);
    return {
        sha256: CryptoJS.SHA256(jsonString).toString(),
        md5: CryptoJS.MD5(jsonString).toString()
    };
};

// Function to get stored hashes from verification_hashes.json
const getStoredHashes = () => {
    try {
        const hashFile = path.join(__dirname, '..', 'vyfn', 'verification_hashes.json');
        if (fs.existsSync(hashFile)) {
            const content = fs.readFileSync(hashFile, 'utf8');
            return JSON.parse(content);
        }
        return {};
    } catch (error) {
        console.error('Error reading stored hashes:', error);
        return {};
    }
};

// Function to try downloading from different IPFS gateways
async function downloadFromIPFS(ipfsHash) {
    const gateways = [
        'https://gateway.pinata.cloud/ipfs/',
        'https://ipfs.io/ipfs/',
        'https://dweb.link/ipfs/',
        'https://cloudflare-ipfs.com/ipfs/'
    ];

    let lastError = null;
    for (const gateway of gateways) {
        try {
            const response = await fetch(gateway + ipfsHash);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            lastError = error;
            continue;
        }
    }
    throw lastError || new Error('Failed to download from all IPFS gateways');
}

// Serve the verification page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to list IPFS files
app.get('/ipfs-files', async (req, res) => {
    try {
        const pins = await pinata.pinList();
        const storedHashes = getStoredHashes();
        
        res.json({
            success: true,
            files: pins.rows.map(pin => ({
                hash: pin.ipfs_pin_hash,
                size: pin.size,
                date: pin.date_pinned,
                name: pin.metadata?.name || 'Unnamed',
                stored: storedHashes[pin.ipfs_pin_hash] ? true : false
            }))
        });
    } catch (error) {
        console.error('Error fetching IPFS files:', error);
        res.status(500).json({ error: 'Failed to fetch IPFS files' });
    }
});

// Endpoint to verify file by IPFS hash
app.post('/verify-file', async (req, res) => {
    try {
        const { ipfsHash } = req.body;
        
        // Check if file exists on IPFS
        const ipfsData = await pinata.pinList({
            hashContains: ipfsHash
        });

        if (ipfsData.count === 0) {
            // Try local verification if IPFS fails
            const storedHashes = getStoredHashes();
            if (storedHashes[ipfsHash]) {
                return res.json({
                    success: true,
                    source: 'local',
                    hashes: storedHashes[ipfsHash],
                    data: null
                });
            }
            return res.status(404).json({ error: 'File not found in IPFS or local storage' });
        }

        // Try to download and verify from IPFS
        const verificationData = await downloadFromIPFS(ipfsHash);
        const hashes = computeHashes(verificationData);

        // Compare with stored hashes if available
        const storedHashes = getStoredHashes();
        const storedHash = storedHashes[ipfsHash];
        
        res.json({
            success: true,
            source: 'ipfs',
            data: verificationData,
            hashes,
            stored: storedHash ? {
                matches: {
                    sha256: storedHash.sha256 === hashes.sha256,
                    md5: storedHash.md5 === hashes.md5
                },
                hashes: storedHash
            } : null
        });
    } catch (error) {
        console.error('Verification error:', error);
        res.status(500).json({ error: 'Verification failed: ' + error.message });
    }
});

app.listen(port, () => {
    console.log(`Verification server running at http://localhost:${port}`);
}); 