async function initiateContract() {
    const file = document.getElementById('fileInput').files[0];
    const secretKey = document.getElementById('secretKey').value;

    try {
        // Upload file to IPFS
        const ipfsHash = await uploadToIPFS(file);

        // Initiate smart contract with secret key and IPFS hash
        const transaction = await initiateSmartContract(secretKey, ipfsHash);

        console.log('Transaction successful:', transaction);
    } catch (error) {
        console.error('Error initiating contract:', error);
    }
}

async function fetchFile() {
    const ipfsHash = document.getElementById('ipfsHashInput').value;

    try {
        // Fetch file from IPFS
        const fileContent = await getFileFromIPFS(ipfsHash);

        // Display the file content
        document.getElementById('fileContent').textContent = fileContent;
    } catch (error) {
        console.error('Error fetching file:', error);
        document.getElementById('fileContent').textContent = 'Error fetching file';
    }
}

document.querySelector('#initiateContractButton').addEventListener('click', initiateContract);
document.querySelector('#fetchFileButton').addEventListener('click', fetchFile);











