import CryptoJS from 'crypto-js';

export const computeHash = (data) => {
    try {
        // Convert the data object to a string
        const dataString = JSON.stringify(data);
        
        // Compute both SHA-256 and MD5 hashes
        const sha256Hash = CryptoJS.SHA256(dataString).toString();
        const md5Hash = CryptoJS.MD5(dataString).toString();
        
        return {
            sha256: sha256Hash,
            md5: md5Hash
        };
    } catch (error) {
        console.error('Error computing hash:', error);
        return {
            sha256: '',
            md5: ''
        };
    }
}; 