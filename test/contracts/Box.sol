// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./access-control/Auth.sol";

contract Box {
    uint256 private _tokenIdCounter;
    mapping(address => uint256) private _balances;
    mapping(address => uint256) private _reputationScores;
    mapping(address => bool) private _soulboundTokensMinted;
    
    // New mappings for company tracking
    mapping(uint256 => string) private _companyNames;
    mapping(uint256 => address) private _companyOwners;
    mapping(uint256 => uint256) private _companyTokenAmounts;
    mapping(address => uint256[]) private _userCompanies;

    // Add new mappings for placeholder values
    mapping(uint256 => uint256) private _placeholder1Values;
    mapping(uint256 => uint256) private _placeholder2Values;

    event LoanRepaid(address indexed user, uint256 amount);
    event ReputationUpdated(address indexed user, uint256 newScore);
    event SoulboundTokenMinted(address indexed user);
    event CompanyMinted(
        address indexed owner, 
        uint256 indexed tokenId, 
        string name, 
        uint256 amount,
        uint256 placeholder1,
        uint256 placeholder2
    );

    function mintCompany(
        string memory name, 
        uint256 tokenAmount,
        uint256 placeholder1,
        uint256 placeholder2
    ) public {
        require(tokenAmount > 0, "Token amount must be greater than 0");
        require(placeholder1 > 0, "Placeholder1 must be greater than 0");
        require(placeholder2 > 0, "Placeholder2 must be greater than 0");
        
        uint256 newTokenId = _tokenIdCounter;
        _tokenIdCounter++;
        
        _companyNames[newTokenId] = name;
        _companyOwners[newTokenId] = msg.sender;
        _companyTokenAmounts[newTokenId] = tokenAmount;
        _placeholder1Values[newTokenId] = placeholder1;
        _placeholder2Values[newTokenId] = placeholder2;
        _userCompanies[msg.sender].push(newTokenId);
        
        emit CompanyMinted(msg.sender, newTokenId, name, tokenAmount, placeholder1, placeholder2);
    }

    // Get all companies owned by a user
    function getUserCompanies(address user) public view returns (uint256[] memory) {
        return _userCompanies[user];
    }

    // Get company details by token ID
    function getCompanyDetails(uint256 tokenId) public view returns (
        string memory name, 
        address owner,
        uint256 tokenAmount,
        uint256 placeholder1,
        uint256 placeholder2
    ) {
        require(tokenId < _tokenIdCounter, "Company does not exist");
        return (
            _companyNames[tokenId],
            _companyOwners[tokenId],
            _companyTokenAmounts[tokenId],
            _placeholder1Values[tokenId],
            _placeholder2Values[tokenId]
        );
    }

    // Get total number of minted companies
    function getTotalMinted() public view returns (uint256) {
        return _tokenIdCounter;
    }

    function repayLoan(uint256 amount) public {
        require(amount > 0, "Repayment amount must be greater than 0");

        // Business logic for loan repayment
        _balances[msg.sender] += amount; // Simulated repayment tracking

        emit LoanRepaid(msg.sender, amount);

        // Update reputation score
        _reputationScores[msg.sender] += 10; // Increment score by a fixed amount
        emit ReputationUpdated(msg.sender, _reputationScores[msg.sender]);

        // Mint soulbound token if not already minted
        if (!_soulboundTokensMinted[msg.sender]) {
            _soulboundTokensMinted[msg.sender] = true;
            emit SoulboundTokenMinted(msg.sender);
        }
    }

    function getReputation(address user) public view returns (uint256) {
        return _reputationScores[user];
    }

    function hasSoulboundToken(address user) public view returns (bool) {
        return _soulboundTokensMinted[user];
    }
}
