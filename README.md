![Image](https://github.com/user-attachments/assets/b3c34949-c3dd-49d0-b195-78d5104cf8aa)
# *Prayog* - Where every mistake leads to discovery 

<br/>
    
## Problem Statement



![image](https://github.com/user-attachments/assets/6cf3ec47-5320-44f0-9e45-8eef7efd2690)


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
5. [AI Model](#ai-model)
6. [Blockchain Integration](#blockchain-integration)
7. [Installation Guide](#installation-guide)
8. [Usage](#usage)
9. [Security](#security)
10. [License](#license)
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
![Image](https://github.com/user-attachments/assets/1f0f7562-b980-4ee2-9910-7a92e6b2b865)
![Image](https://github.com/user-attachments/assets/74a9887f-a228-4cf2-ba17-c808807129ad)

### *Company Side*
1. *Company Registration*: Startups fill in their relevant details.
2. *Milestones*: Companies update their progress as they achieve key milestones.
3. *Verification*: All information is verified through blockchain oracles.
4. *Smart Contract Issuance*: Tokens are minted for investors once the startup is verified.

### *User Side*
1. *Dashboard of Investments*: Users can track their investments in real-time.
2. *AI-Powered Insights: Tools like **Venture Vitals, **Fiscal Fitness, and **Market Mojo* evaluate companies' growth prospects based on AI and web scraping.
3. *Tokenized Investments*: Easily buy, sell, or transfer your tokens to another user via the Khatta wallet.
4. *Valuation Updates*: Token values are dynamically updated based on company performance and milestones.

---

## *Technology Stack*

### *Frontend*
- Nextjs for user interfaces.
- HTML/CSS/JavaScript.

https://youtu.be/WSfYB1pqO4U

![Image](https://github.com/user-attachments/assets/3b30efd7-1c65-4e76-8e7b-821de7d98882)
![Image](https://github.com/user-attachments/assets/1bfceebf-9b2f-4bff-9316-ff39bdb6247a)
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

## *AI Model*

At the core of *Vyapaar.AI* is an advanced AI model that analyzes the fiscal health of startups and evaluates their potential growth. The AI considers:
- Financial metrics, historical data, and market sentiment.
- Predictive scores like *VC Scores* that help users gauge startup viability.
- Real-time scraping of market trends for updated data.

---

## *Blockchain Integration*

The platform integrates blockchain in several key ways:
- *Tokenization of shares*: Startups' equity is transformed into blockchain tokens, which can be easily traded or transferred between users.
- *Smart Contracts*: Investment agreements and valuations are secured using Ethereum smart contracts.
- *Oracle verification*: Data is validated using oracles to ensure reliability and transparency in milestones.

---

## ⚡ Intel OneAPI Tools

| Sno | Intel Product Used                 | Description                                                                 |
|-----|------------------------------------|-----------------------------------------------------------------------------|
| 1   | Intel® Distribution for Python®    | Provides optimized Python libraries for numerical computing and data manipulation |
| 2   | Intel® OpenVINO™                   | Accelerates the implementation of Q-LoRA using OpenVINO                     |
| 3   | Intel® DevCloud                    | Offers a valuable environment for the project                               |

Scikit-learn Model Tools
![scklearnusingoneAPIinVyaapar](https://github.com/user-attachments/assets/fc99868d-abdc-4bca-b2e3-63ce4f746d28)


![oneAPI](https://github.com/user-attachments/assets/34311be0-df15-4eb4-ae3b-c5d88163faa0)


## *Installation Guide*

### *Prerequisites*
- Node.js, Python, Metamask, HardHat, React.js, Web3.js.

### *Setup*
1. *Clone the repository*:
   bash
   git clone [https://github.com/Unknnownnn/Vyaapar.ai_oneAPI_hack_kpr]
   
2. *Install dependencies*:
   bash
   npm install
   pip3 install pipreqs
   
3. *Setup environment variables* for API keys, blockchain access, etc.
   
4. *Start the application*:
   bash
   npm run start
   

---

## *Usage*

- *For Startups*: Register your company, fill in relevant details, and update milestones for investors to track.
- *For Investors*: Browse available startups, leverage AI insights, invest using tokens, and monitor investments through the dashboard.
- *Token Transfer: Easily transfer tokens between users through **Khatta*, your integrated web3 wallet.


---

## *Security*

*Vyapaar.AI* prioritizes:
- *Blockchain Ledger*: Immutable and transparent transaction records.
- *Data Encryption*: Secure data handling and storage.

---
## *Conclusion*

Vyapaar leverages AI/ML models and blockchain technology to revolutionize startup investments, making them accessible, transparent, and secure for retail investors. By providing a comprehensive risk assessment using cutting-edge models like XGBoost, GANs, and RL, and securing transactions with blockchain, Vyapaar democratizes high-potential investment opportunities, ensuring retail investors can confidently invest in the future of innovation.

## *License*

This project is licensed under the MIT License.

---


This structure integrates the concepts and flows presented in the image, covering both company and user perspectives, AI analysis, and blockchain functionality.
