import PinataClient from '@pinata/sdk';
import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

interface ExperimentLog {
  studentId: string;
  experimentId: string;
  timestamp: number;
  actions: Array<{
    step: string;
    timestamp: number;
    success: boolean;
    errorMessage?: string;
  }>;
  metrics: {
    totalSteps: number;
    errorCount: number;
    completionTime: number;
  };
}

export class IPFSService {
  private pinata: PinataClient;

  constructor() {
    // Initialize Pinata client using the new constructor
    this.pinata = new PinataClient({
      pinataApiKey: process.env.PINATA_API_KEY as string,
      pinataSecretApiKey: process.env.PINATA_SECRET_KEY as string,
    });
  }

  // Generate SHA-256 hash of the experiment log
  public generateHash(data: any): string {
    return crypto.createHash('sha256')
      .update(JSON.stringify(data))
      .digest('hex');
  }

  // Upload experiment log to IPFS using Pinata
  public async uploadToIPFS(data: ExperimentLog): Promise<{ cid: string; hash: string }> {
    try {
      // Generate hash for data integrity
      const hash = this.generateHash(data);

      // Use pinata.pinJSONToIPFS to upload the JSON data
      const result = await this.pinata.pinJSONToIPFS(data, {
        pinataMetadata: {
          name: `experiment_${data.experimentId}_${data.timestamp}`
        }
      });

      return { cid: result.IpfsHash, hash: hash };
    } catch (error) {
      console.error('Error uploading to IPFS:', error);
      throw error;
    }
  }

  // Retrieve experiment log from IPFS
  public async retrieveFromIPFS(cid: string): Promise<ExperimentLog> {
    try {
      const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
      const response = await fetch(url);
      const data = await response.json();
      return data as ExperimentLog;
    } catch (error) {
      console.error('Error retrieving from IPFS:', error);
      throw error;
    }
  }

  // Verify data integrity by comparing stored hash with computed hash
  public async verifyIntegrity(cid: string, storedHash: string): Promise<boolean> {
    try {
      const data = await this.retrieveFromIPFS(cid);
      const computedHash = this.generateHash(data);
      return computedHash === storedHash;
    } catch (error) {
      console.error('Error verifying integrity:', error);
      throw error;
    }
  }
}
