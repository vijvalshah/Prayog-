import fs from 'fs';
import path from 'path';

const HASH_FILE = path.join(process.cwd(), 'verification_hashes.json');

export const saveHashes = async (contractId, hashes) => {
    try {
        let existingHashes = {};
        if (fs.existsSync(HASH_FILE)) {
            const content = fs.readFileSync(HASH_FILE, 'utf8');
            existingHashes = JSON.parse(content);
        }

        existingHashes[contractId] = {
            ...hashes,
            timestamp: new Date().toISOString()
        };

        fs.writeFileSync(HASH_FILE, JSON.stringify(existingHashes, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving hashes:', error);
        return false;
    }
};

export const getHashes = (contractId) => {
    try {
        if (fs.existsSync(HASH_FILE)) {
            const content = fs.readFileSync(HASH_FILE, 'utf8');
            const hashes = JSON.parse(content);
            return hashes[contractId] || null;
        }
        return null;
    } catch (error) {
        console.error('Error reading hashes:', error);
        return null;
    }
}; 