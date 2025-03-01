"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPFSService = void 0;
const sdk_1 = __importDefault(require("@pinata/sdk"));
const crypto = __importStar(require("crypto"));
class IPFSService {
    constructor() {
        // Initialize Pinata client using the new constructor
        this.pinata = new sdk_1.default({
            pinataApiKey: process.env.PINATA_API_KEY,
            pinataSecretApiKey: process.env.PINATA_SECRET_KEY,
        });
    }
    // Generate SHA-256 hash of the experiment log
    generateHash(data) {
        return crypto.createHash('sha256')
            .update(JSON.stringify(data))
            .digest('hex');
    }
    // Upload experiment log to IPFS using Pinata
    uploadToIPFS(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Generate hash for data integrity
                const hash = this.generateHash(data);
                // Use pinata.pinJSONToIPFS to upload the JSON data
                const result = yield this.pinata.pinJSONToIPFS(data, {
                    pinataMetadata: {
                        name: `experiment_${data.experimentId}_${data.timestamp}`
                    }
                });
                return { cid: result.IpfsHash, hash: hash };
            }
            catch (error) {
                console.error('Error uploading to IPFS:', error);
                throw error;
            }
        });
    }
    // Retrieve experiment log from IPFS
    retrieveFromIPFS(cid) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
                const response = yield fetch(url);
                const data = yield response.json();
                return data;
            }
            catch (error) {
                console.error('Error retrieving from IPFS:', error);
                throw error;
            }
        });
    }
    // Verify data integrity by comparing stored hash with computed hash
    verifyIntegrity(cid, storedHash) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.retrieveFromIPFS(cid);
                const computedHash = this.generateHash(data);
                return computedHash === storedHash;
            }
            catch (error) {
                console.error('Error verifying integrity:', error);
                throw error;
            }
        });
    }
}
exports.IPFSService = IPFSService;
