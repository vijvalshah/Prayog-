const pinataSDK = require('@pinata/sdk');
require('dotenv').config();

const pinata = new pinataSDK(
    process.env.PINATA_API_KEY,
    process.env.PINATA_API_SECRET
);

async function testPinata() {
    try {
        // Test authentication
        await pinata.testAuthentication();
        console.log('✅ Pinata authentication successful!');

        // List existing pins
        const pins = await pinata.pinList();
        console.log('\nExisting pins:', pins.count ? pins.rows : 'No pins found');

        // Try to upload a test JSON
        const testResult = await pinata.pinJSONToIPFS({
            test: 'Hello IPFS',
            timestamp: new Date().toISOString()
        });
        console.log('\n✅ Test upload successful!');
        console.log('IPFS Hash:', testResult.IpfsHash);
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

testPinata(); 