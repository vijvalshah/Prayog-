const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function generateVerificationHash() {
    try {
        // Read the Verification.json file
        const verificationPath = path.join(__dirname, '../../Verification.json');
        const fileContent = fs.readFileSync(verificationPath, 'utf8');
        
        // Create hash from file content
        const hash = crypto.createHash('sha256');
        hash.update(fileContent);
        const fileHash = hash.digest('hex');
        
        return fileHash;
    } catch (error) {
        console.error('Error generating hash:', error);
        return null;
    }
}

// Export the function for use in other files
module.exports = {
    generateVerificationHash
};

// If running directly, print the hash
if (require.main === module) {
    const hash = generateVerificationHash();
    if (hash) {
        console.log('Verification.json Hash:', hash);
    }
} 