const { ethers } = require("hardhat");

async function storeCID() {
  const [deployer] = await ethers.getSigners();
  const LabMateData = await ethers.getContractFactory("LabMateData");
  const labMateData = await LabMateData.deploy();
  await labMateData.deployed();
  console.log("Contract deployed to:", labMateData.address);

  // Replace with the CID from your Pinata output
  const ipfsCID = "YOUR_PINATA_CID_HERE";
  const tx = await labMateData.storeLog(ipfsCID);
  await tx.wait();
  console.log("Log stored on blockchain with CID:", ipfsCID);
}

storeCID().catch(console.error);
