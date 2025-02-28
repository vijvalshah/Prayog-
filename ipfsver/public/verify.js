// Elements
const ipfsHashInput = document.getElementById('ipfsHash');
const sha256HashSpan = document.getElementById('sha256Hash');
const md5HashSpan = document.getElementById('md5Hash');
const filesList = document.getElementById('filesList');
const fileContent = document.getElementById('fileContent');
const verifyBtn = document.getElementById('verifyBtn');
const verificationResult = document.getElementById('verificationResult');

// Function to format file size
function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + ' MB';
    else return (bytes / 1073741824).toFixed(2) + ' GB';
}

// Function to format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleString();
}

// Function to load IPFS files
async function loadIPFSFiles() {
    try {
        const response = await fetch('/ipfs-files');
        const data = await response.json();
        
        if (data.success && data.files) {
            filesList.innerHTML = data.files.map(file => `
                <div class="ipfs-file" data-hash="${file.hash}">
                    <strong>Hash:</strong> ${file.hash}<br>
                    <strong>Size:</strong> ${formatFileSize(file.size)}<br>
                    <strong>Date:</strong> ${formatDate(file.date)}<br>
                    <button onclick="selectFile('${file.hash}')" class="select-btn">Select</button>
                </div>
            `).join('');
        } else {
            filesList.innerHTML = '<p>No files found</p>';
        }
    } catch (error) {
        console.error('Error loading IPFS files:', error);
        filesList.innerHTML = '<p>Error loading files</p>';
    }
}

// Function to select a file
function selectFile(hash) {
    ipfsHashInput.value = hash;
    verifyFile();
}

// Function to verify file
async function verifyFile() {
    try {
        const ipfsHash = ipfsHashInput.value;
        if (!ipfsHash) {
            alert('Please enter an IPFS hash or select a file');
            return;
        }

        // Show loading state
        verifyBtn.disabled = true;
        verifyBtn.textContent = 'Verifying...';
        fileContent.textContent = 'Loading...';
        sha256HashSpan.textContent = '-';
        md5HashSpan.textContent = '-';

        // Try to verify with IPFS first
        try {
            const response = await fetch('/verify-file', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ipfsHash })
            });

            const result = await response.json();
            
            if (result.success) {
                // Display hashes
                sha256HashSpan.textContent = result.hashes.sha256;
                md5HashSpan.textContent = result.hashes.md5;
                
                // Display file content
                fileContent.textContent = JSON.stringify(result.data, null, 2);
                
                // Show success
                showVerificationResult(true, 'File Retrieved Successfully');
                return;
            }
        } catch (error) {
            console.warn('IPFS verification failed, trying local storage:', error);
        }

        // If IPFS verification fails, try local storage
        const storedHashes = JSON.parse(localStorage.getItem('verification_hashes') || '{}');
        const storedHash = storedHashes[ipfsHash];
        
        if (storedHash) {
            sha256HashSpan.textContent = storedHash.sha256;
            md5HashSpan.textContent = storedHash.md5;
            fileContent.textContent = 'File content not available (using stored hashes)';
            showVerificationResult(true, 'Using Stored Hashes');
        } else {
            throw new Error('File not found in IPFS or local storage');
        }

    } catch (error) {
        console.error('Error verifying file:', error);
        showVerificationResult(false, error.message || 'Verification Failed');
        fileContent.textContent = 'Error loading file content';
    } finally {
        verifyBtn.disabled = false;
        verifyBtn.textContent = 'Verify File';
    }
}

// Function to show verification result
function showVerificationResult(success, message) {
    verificationResult.classList.remove('hidden');
    const resultIcon = verificationResult.querySelector('.result-icon');
    const resultMessage = verificationResult.querySelector('.result-message');
    
    resultIcon.textContent = success ? '✓' : '✗';
    resultIcon.style.color = success ? '#4CAF50' : '#f44336';
    resultMessage.textContent = message;
}

// Event listeners
verifyBtn.addEventListener('click', verifyFile);

// Initialize
loadIPFSFiles(); 