const { ethers } = require("hardhat");
const pinataSDK = require('@pinata/sdk');
require('dotenv').config();

// Initialize Pinata client
const pinata = new pinataSDK(
    process.env.PINATA_API_KEY,
    process.env.PINATA_API_SECRET
);

async function uploadToIPFS(metadata) {
    try {
        const options = {
            pinataMetadata: {
                name: `NFT Metadata ${Date.now()}`
            }
        };

        const result = await pinata.pinJSONToIPFS(metadata, options);
        console.log("Uploaded to IPFS:", result);
        return result.IpfsHash;
    } catch (error) {
        console.error("Error uploading to IPFS:", error);
        throw error;
    }
}

async function main() {
    // Sample metadata for the NFT
    const metadata = {
        name: "Test NFT",
        description: "This is a test NFT with IPFS metadata",
        image: "https://example.com/placeholder.png", // Replace with actual image
        attributes: [
            {
                trait_type: "Test",
                value: "True"
            }
        ]
    };

    try {
        // Upload metadata to IPFS
        console.log("Uploading metadata to IPFS...");
        const ipfsHash = await uploadToIPFS(metadata);
        console.log("IPFS Hash:", ipfsHash);

        // Here you would typically:
        // 1. Get the contract
        // 2. Mint the NFT with the IPFS hash
        // This is a placeholder for the actual contract interaction
        console.log("Success! Use this IPFS hash for minting:", ipfsHash);
        
    } catch (error) {
        console.error("Error in main:", error);
        process.exit(1);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    }); 