import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import './CompanyForm.css';
import { computeHash } from '../utils/hashUtil';

const CompanyForm = ({ contract, account }) => {
  const [companyName, setCompanyName] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [placeholder1, setPlaceholder1] = useState('');
  const [placeholder2, setPlaceholder2] = useState('');
  const [mintedCompanies, setMintedCompanies] = useState([]);
  const [totalMinted, setTotalMinted] = useState(0);
  // Add local storage for demonstration
  const [localCompanies, setLocalCompanies] = useState(() => {
    const saved = localStorage.getItem('mintedCompanies');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (contract && account) {
      loadMintedCompanies();
      loadTotalMinted();
    }
  }, [contract, account]);

  // Save to local storage whenever localCompanies changes
  useEffect(() => {
    localStorage.setItem('mintedCompanies', JSON.stringify(localCompanies));
  }, [localCompanies]);

  const loadMintedCompanies = async () => {
    try {
      const userCompanies = await contract.getUserCompanies(account);
      const companiesDetails = await Promise.all(
        userCompanies.map(async (tokenId) => {
          const details = await contract.getCompanyDetails(tokenId);
          return {
            tokenId: tokenId.toString(),
            name: details.name,
            tokenAmount: details.tokenAmount,
            placeholder1: details.placeholder1,
            placeholder2: details.placeholder2,
            owner: details.owner
          };
        })
      );
      setMintedCompanies(companiesDetails);
    } catch (error) {
      console.error('Error loading Student Details:', error);
    }
  };

  const loadTotalMinted = async () => {
    try {
      const total = await contract.getTotalMinted();
      setTotalMinted(total.toString());
    } catch (error) {
      console.error('Error loading total minted:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contract) {
      try {
        const amount = parseInt(tokenAmount);
        const p1 = parseInt(placeholder1);
        const p2 = parseInt(placeholder2);
        
        if (isNaN(amount) || amount <= 0) {
          throw new Error('Invalid Marks');
        }
        if (isNaN(p1) || p1 <= 0) {
          throw new Error('Invalid Marks');
        }
        if (isNaN(p2) || p2 <= 0) {
          throw new Error('Invalid Marks');
        }

        // Compute hashes for the data
        const dataForHash = {
          studentId: companyName,
          quizMarks: amount,
          efficiencyMarks: p1,
          resultMarks: p2,
          timestamp: new Date().toISOString()
        };
        const hashes = computeHash(dataForHash);

        await contract.mintCompany(companyName, amount, p1, p2);
        
        // Add to local storage with hashes
        const newCompany = {
          tokenId: localCompanies.length.toString(),
          name: companyName,
          tokenAmount: amount,
          placeholder1: p1,
          placeholder2: p2,
          owner: account,
          sha256Hash: hashes.sha256,
          md5Hash: hashes.md5,
          timestamp: new Date().toISOString()
        };
        setLocalCompanies(prev => [...prev, newCompany]);
        
        alert('Student Details recorded successfully!');
        setCompanyName('');
        setTokenAmount('');
        setPlaceholder1('');
        setPlaceholder2('');
        
        // Reload the blockchain state
        await loadMintedCompanies();
        await loadTotalMinted();
      } catch (error) {
        console.error('Error minting Details:', error);
        alert('Error minting Student Details. Check console for details.');
      }
    }
  };

  // Function to clear local storage (for testing)
  const clearLocalStorage = () => {
    localStorage.removeItem('mintedCompanies');
    setLocalCompanies([]);
  };

  return (
    <div className="company-container">
      <Hero 
        onConnectWallet={() => {
          if (typeof window.ethereum !== 'undefined') {
            window.ethereum.request({ method: 'eth_requestAccounts' });
          } else {
            alert('Please install MetaMask!');
          }
        }}
        isConnected={!!account}
      />

      {account ? (
        <div className="company-details-box">
          <h2>Student Details</h2>
          <form onSubmit={handleSubmit} className="mint-form">
            <div className="form-group">
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Student ID"
                required
              />
              <div className="marks-inputs">
                <input
                  type="number"
                  value={tokenAmount}
                  onChange={(e) => setTokenAmount(e.target.value)}
                  placeholder="Marks (Quiz)"
                  min="1"
                  required
                  className="number-input"
                />
                <input
                  type="number"
                  value={placeholder1}
                  onChange={(e) => setPlaceholder1(e.target.value)}
                  placeholder="Marks (Efficiency)"
                  min="1"
                  required
                  className="number-input"
                />
                <input
                  type="number"
                  value={placeholder2}
                  onChange={(e) => setPlaceholder2(e.target.value)}
                  placeholder="Marks (Result)"
                  min="1"
                  required
                  className="number-input"
                />
              </div>
            </div>
            <button type="submit">Submit Details</button>
          </form>

          <div className="minted-companies">
            <h3>Available Data</h3>
            <p>Total Details: {localCompanies.length}</p>
            
            {localCompanies.map((company) => (
              <div key={company.tokenId} className="company-item">
                <p>Token ID: {company.tokenId}</p>
                <p>Student ID: {company.name}</p>
                <p>Marks (Quiz): {company.tokenAmount}</p>
                <p>Marks (Efficiency): {company.placeholder1}</p>
                <p>Marks (Result): {company.placeholder2}</p>
                <div className="hash-details">
                  <p>SHA-256 Hash:</p>
                  <code>{company.sha256Hash}</code>
                  <p>MD5 Hash:</p>
                  <code>{company.md5Hash}</code>
                </div>
                <p className="timestamp">Minted: {new Date(company.timestamp).toLocaleString()}</p>
              </div>
            ))}

            {/* Development tools */}
            {process.env.NODE_ENV === 'development' && (
              <button 
                onClick={clearLocalStorage}
                className="clear-storage-btn"
              >
                Reset Data Storage
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>Please connect your wallet to interact with the contract.</p>
      )}
    </div>
  );
};

export default CompanyForm;
