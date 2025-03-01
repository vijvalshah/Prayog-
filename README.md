![Image](https://github.com/user-attachments/assets/b3c34949-c3dd-49d0-b195-78d5104cf8aa)
# *Prayog* - Where every mistake leads to discovery 

<br/>
    
## Problem Statement
Virtual labs lack personalized learning, as they do not track individual progress, leading to uneven educational experiences. Without smart feedback, students often repeat the same mistakes without guidance for improvement. Additionally, these labs fail to analyze errors, preventing them from predicting learning gaps and warning students about future challenges. The one-size-fits-all approach means every student receives the same experience, regardless of their unique strengths or struggles. Furthermore, the burden falls on teachers to manually track performance, making it difficult to provide real-time feedback and support.

![Image](https://github.com/user-attachments/assets/a9ba68bb-0293-4918-8797-ad4b28d793e6)

---
<br/>

# Project Overview

This project is a Startup Success Prediction Model that combines Generative Adversarial Networks (GANs) and Reinforcement Learning (RL) to forecast the future success of startups. The model predicts startup success probabilities based on historical data and simulates various startup scenarios, including actions like raising funds, expanding markets, and cost management. The system uses GANs to generate future outcomes and RL to optimize startup strategies dynamically.
<br>
## *Table of Contents*

1. [Introduction](#introduction)
2. [Features](#features)
3. [How It Works](#how-it-works)
4. [Technology Stack](#technology-stack)
---

## *Introduction*

In India, the scarcity of well-equipped laboratories and the high student-to-teacher ratio severely limit hands‑on science learning—especially in rural areas. Traditional virtual lab platforms lack personalized feedback and tamper-proof record-keeping, leading to inconsistent educational outcomes. LabMate bridges this gap by providing real‑time, adaptive guidance tailored to each student's unique performance profile.By giving them a chance to make errors and learn from it unlik eprewsent OLABS and By harnessing advanced Retrieval-Augmented Generation (RAG) techniques and integrating blockchain for immutable data logging, LabMate ensures that every experiment session is transparent, verifiable, and optimized for continuous learning. This system not only minimizes common experimental errors but also instills confidence in educators and regulators through its secure, decentralized audit trail.


---

## *Features*

- *AI-Driven Financial Analysis*: Tailored insights using AI for evaluating startups' fiscal health, market potential, and long-term viability.
- *Smart Contract Integration*: Automated agreements executed securely on blockchain.
- *Tokenized Startup Investments*: Shares are converted into tokens for enhanced liquidity and transferability.
- *Secure User Wallet (Khatta)*: Manage your tokens and investments with a web3 wallet integrated within the platform.
- *Real-Time Valuation Updates*: Companies’ milestones and progress trigger real-time valuation changes, verified by blockchain oracles.

---

## *How It Works*
- Multi-Module Reterival Using RAG

![Image](https://github.com/user-attachments/assets/1f0f7562-b980-4ee2-9910-7a92e6b2b865)
<br/>

- Blockchain based data integrity system
![Image](https://github.com/user-attachments/assets/74a9887f-a228-4cf2-ba17-c808807129ad)

---

## *Technology Stack*

### *Frontend*
- Nextjs for user interfaces.
- HTML/CSS/JavaScript.

> [!IMPORTANT]
> Full Video For all Functionalities: https://youtu.be/WSfYB1pqO4U

![Image](https://github.com/user-attachments/assets/3b30efd7-1c65-4e76-8e7b-821de7d98882)
![Image](https://github.com/user-attachments/assets/1bfceebf-9b2f-4bff-9316-ff39bdb6247a)
![Image](https://github.com/user-attachments/assets/461d9359-1826-41d9-a7c3-259f4722204c)
<br/>
### *Backend*
- Node.js for server-side logic.
- Python for AI model and data handling.
- Javascript


### *Blockchain*
- Solidity for smart contract development including Minting,Updation, Dynamic Valuation and more.
- Hardhat
- Typescript
- SnarkJS
- Circom
- Web3.js for wallet integration.
- React.js for web app
- Ether.js

Blockchain ensures that all startup investments are secure, transparent, and efficient.

    Smart Contracts:
        Automate milestone-based payments to startups.
        Investors can track whether startups are hitting performance targets in real-time, and payments are automatically released when conditions are met.
        Valuation adjustments happen transparently and automatically based on the output from the AI models (financial score, risk simulation).

    Ownership Representation through NFTs:
        Startup equity can be tokenized through Non-Fungible Tokens (NFTs) that represent ownership. These tokens are traceable, divisible, and tradeable on the blockchain.
        Investors can trade tokens, representing their ownership, securely on the blockchain, ensuring liquidity and easy exit strategies.

    Transaction Security:
        All transactions between startups and investors are stored on a decentralized ledger, ensuring tamper-proof records.
        By decentralizing the investment process, trust is guaranteed, and investors can monitor their investments in real-time.

Starting node on hardhat:

![Screenshot 2024-10-05 103319](https://github.com/user-attachments/assets/d9c81da2-330e-41a2-a027-1c21fa28137f)

Starting WebApp:

![Screenshot 2024-10-05 103350](https://github.com/user-attachments/assets/60bbb56c-0d6a-40d3-a0e1-1fdc8b7fa219)

# Starting Prayog Smart Scoring Systems

In the project directory, run:

```
cd test
npx hardhat compile
npx hardhat node
npx hardhat run scripts\depoly.js --network localhost
```

***Run the node command and depoly command in different terminals.***
The Hardhat runs on [http://localhost:8454].
The local blockchain is now started.

```
cd ..
cd vyfn
npm start
```

![Image](https://github.com/user-attachments/assets/fd623209-e20f-479b-8b3a-87bad785923e)

---


---


This structure integrates the concepts and flows presented in the image, covering both company and user perspectives, AI analysis, and blockchain functionality.
