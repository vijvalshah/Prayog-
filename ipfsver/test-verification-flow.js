const pinataSDK = require('@pinata/sdk');
const CryptoJS = require('crypto-js');
const fs = require('fs');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const https = require('https');
require('dotenv').config();

const pinata = new pinataSDK(
    process.env.PINATA_API_KEY,
    process.env.PINATA_API_SECRET
);

// Function to compute hashes (same as in your server.js)
const computeHashes = (data) => {
    const jsonString = typeof data === 'string' ? data : JSON.stringify(data);
    return {
        sha256: CryptoJS.SHA256(jsonString).toString(),
        md5: CryptoJS.MD5(jsonString).toString()
    };
};

async function testVerificationFlow() {
    try {
        console.log('🔄 Starting verification flow test...\n');

        // 1. Read the Verification.json file
        const verificationPath = path.join(__dirname, '..', 'Verification.json');
        const fileContent = fs.readFileSync(verificationPath, 'utf8');
        const verificationData = JSON.parse(fileContent);
        
        console.log('📄 Read Verification.json successfully');

        // 2. Compute hashes before upload
        const originalHashes = computeHashes(verificationData);
        console.log('\n🔐 Original Hashes:');
        console.log('SHA-256:', originalHashes.sha256);
        console.log('MD5:', originalHashes.md5);

        // 3. Upload to IPFS
        console.log('\n📤 Uploading to IPFS...');
        const uploadResult = await pinata.pinJSONToIPFS(verificationData);
        console.log('✅ Upload successful!');
        console.log('IPFS Hash:', uploadResult.IpfsHash);

        // Print Pinata pin list
        console.log('\n📋 Checking Pinata pins...');
        const pins = await pinata.pinList();
        console.log('Total pins:', pins.count);
        if (pins.rows.length > 0) {
            console.log('Latest pin details:', JSON.stringify(pins.rows[0], null, 2));
        }

        // 4. Simulate verification by downloading from IPFS
        console.log('\n🔄 Simulating verification...');
        // Wait a bit for IPFS to propagate
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${uploadResult.IpfsHash}`;
        const response = await fetch(ipfsUrl, {
            agent: new https.Agent({
                rejectUnauthorized: false
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const downloadedData = await response.json();
        
        // 5. Compute hashes of downloaded data
        const downloadedHashes = computeHashes(downloadedData);
        console.log('\n🔐 Downloaded Data Hashes:');
        console.log('SHA-256:', downloadedHashes.sha256);
        console.log('MD5:', downloadedHashes.md5);

        // 6. Compare hashes
        const hashesMatch = {
            sha256: originalHashes.sha256 === downloadedHashes.sha256,
            md5: originalHashes.md5 === downloadedHashes.md5
        };

        console.log('\n🔍 Verification Results:');
        console.log('SHA-256 Match:', hashesMatch.sha256 ? '✅ Yes' : '❌ No');
        console.log('MD5 Match:', hashesMatch.md5 ? '✅ Yes' : '❌ No');

        // Save the test data for the web interface
        const testData = {
            tokenId: '0',
            ipfsHash: uploadResult.IpfsHash,
            sha256Hash: originalHashes.sha256,
            md5Hash: originalHashes.md5
        };
        
        // Save to verification_hashes.json
        const hashesPath = path.join(__dirname, '..', 'vyfn', 'verification_hashes.json');
        let existingHashes = {};
        if (fs.existsSync(hashesPath)) {
            existingHashes = JSON.parse(fs.readFileSync(hashesPath, 'utf8'));
        }
        existingHashes[testData.tokenId] = {
            ...testData,
            timestamp: new Date().toISOString()
        };
        fs.writeFileSync(hashesPath, JSON.stringify(existingHashes, null, 2));
        console.log('\n💾 Saved test data to verification_hashes.json');

    } catch (error) {
        console.error('\n❌ Error:', error.message);
        if (error.response) {
            console.error('Response:', await error.response.text());
        }
    }
}

testVerificationFlow(); 