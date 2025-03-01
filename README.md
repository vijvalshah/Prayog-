![Image](https://github.com/user-attachments/assets/8dadee92-7ef9-46d8-975c-3974f7f55e5f)
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

![Image](https://github.com/user-attachments/assets/d45644dc-1f1e-4f36-87f0-63f087c5351c)

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

## *Frontend*
- Nextjs for user interfaces.
- HTML/CSS/JavaScript.

> [!IMPORTANT]
> Full Video For all Functionalities: https://youtu.be/WSfYB1pqO4U

<br/>

To run the frontend webage for SIFRA:
```
cd LandingPage
npm run dev
```

![Image](https://github.com/user-attachments/assets/3b30efd7-1c65-4e76-8e7b-821de7d98882)
![Image](https://github.com/user-attachments/assets/1bfceebf-9b2f-4bff-9316-ff39bdb6247a)
![Image](https://github.com/user-attachments/assets/461d9359-1826-41d9-a7c3-259f4722204c)

<br/>

## *Backend*
- Node.js for server-side logic.
- Python for AI model and data handling.
- Javascript


## *Blockchain*
- Solidity for smart contract development including Minting,Updation, Dynamic Valuation and more.
- Hardhat
- Typescript
- SnarkJS
- Circom
- Web3.js for wallet integration.
- React.js for web app
- Ether.js

Blockchain ensures that all Scores are secure, transparent, and distributed.

    Data Storage: It defines a structure called ExperimentLog that holds a unique IPFS CID and a timestamp for each experiment session.
    The contract uses a mapping to store an array of these logs for each student’s address, ensuring that each student's experiment history is preserved.

    Immutable Logging:
        Through the storeLog function, when a new experiment session is completed, the system generates a JSON file of the session data and uploads it to IPFS. The returned CID (along with a timestamp) is then stored on-chain.
        This creates an immutable record—once stored, the data cannot be altered, which is critical for maintaining data integrity and trust.

    Transparency & Auditability:
        The smart contract emits an event (LogStored) every time a log is saved. This event can be monitored in real-time, providing an audit trail that educators and regulators can use to verify the authenticity of the experiment data.
        Anyone can retrieve these logs by querying the blockchain, ensuring complete transparency.

    Foundational for Adaptive Learning:
        The secure, immutable logs are later used to feed our adaptive learning system. By analyzing these records, the system can provide personalized feedback based on historical performance, further enhancing the educational experience.

<br/>

> [!TIP]
> In essence, our smart contract guarantees that every experiment session’s data is securely, transparently, and immutably recorded—forming the backbone of our data integrity and trust system in LabMate. This is what sets our solution apart, ensuring that educators and stakeholders can always verify the authenticity of a student’s performance.

<br/>

## Running Blockchain locally
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
## *INNOVATION & ACCESSIBILITIY*

- AI-Driven Precision Learning, *Chetna* leverages Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs) to predict learning gaps, personalize recommendations, and turn student mistakes into data-driven insights for improvement.
- Intelligent Virtual Lab Assistance *SIFRA* acts as a dynamic multi-modal lab agent, providing real-time procedural guidance, conceptual clarifications, and interactive troubleshooting to enhance hands-on virtual experiments.
- Blockchain-Powered Academic Integrity *Prayog Integrity System* secures student performance records on a decentralized ledger with Solidity-based smart contracts and MetaMask integration, ensuring immutable, tamper-proof academic tracking.
- Seamless & Inclusive Learning With speech-to-text, text-to-speech, and adaptive AI models, our system ensures multi-sensory accessibility, enabling a personalized, barrier-free learning experience for all students.

![Image](https://github.com/user-attachments/assets/9b2f82f9-ed80-4e34-807c-fd705cddd2f0)
