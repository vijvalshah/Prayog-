import CryptoJS from 'crypto-js';

export const generateVerificationHash = (jsonData) => {
    try {
        // Convert the JSON data to a string if it's not already
        const dataString = typeof jsonData === 'string' ? jsonData : JSON.stringify(jsonData);
        
        // Generate SHA-256 hash
        const hash = CryptoJS.SHA256(dataString);
        
        // Convert to hex string
        return hash.toString(CryptoJS.enc.Hex);
    } catch (error) {
        console.error('Error generating hash:', error);
        return null;
    }
}; 