import { IPFSService } from './IPFSService';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  // Read the demo JSON file (ensure it's in the correct directory)
  const demoFilePath = path.join(__dirname, 'demoSession.json');
  const fileData = fs.readFileSync(demoFilePath, 'utf-8');
  const sampleLog = JSON.parse(fileData);

  const ipfsService = new IPFSService();

  console.log('Uploading to IPFS...');
  const { cid, hash } = await ipfsService.uploadToIPFS(sampleLog);
  console.log('Uploaded successfully! CID:', cid);
  console.log('Hash:', hash);

  console.log('\nVerifying data integrity...');
  const isValid = await ipfsService.verifyIntegrity(cid, hash);
  console.log('Data integrity is', isValid ? 'Valid' : 'Invalid');

  console.log('\nRetrieving data from IPFS...');
  const retrievedData = await ipfsService.retrieveFromIPFS(cid);
  console.log('Retrieved Experiment Log:', retrievedData);
}

main().catch(console.error);
