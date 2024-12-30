const pinataApiKey = 'f808480431852d1d003e';
const pinataApiSecret = 'e1d3bd246fde5e828dffa6a6b09078e6467bc4490f576bd2de681cd7136e597c';
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(pinataApiKey, pinataApiSecret);

async function uploadToIPFS(file) {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyNWFkN2E1Ni1mZjlmLTRiNjUtYmE4NC1lNjljMjc4NGEyY2YiLCJlbWFpbCI6InYybGFrc2htaTEyMDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImY4MDg0ODA0MzE4NTJkMWQwMDNlIiwic2NvcGVkS2V5U2VjcmV0IjoiZTFkM2JkMjQ2ZmRlNWU4MjhkZmZhNmE2YjA5MDc4ZTY0NjdiYzQ0OTBmNTc2YmQyZGU2ODFjZDcxMzZlNTk3YyIsImlhdCI6MTcxNzkzMDMzNX0.NKBRDHofqEHIJ5l5_o4bjlMx82futDxyOCrjG6IFq_U`, // Your JWT token
        },
        body: formData
    });

    const result = await response.json();
    console.log('IPFS Hash:', result.IpfsHash);
    return result.IpfsHash;
}

async function getFileFromIPFS(hash) {
    const response = await fetch(`https://gateway.pinata.cloud/ipfs/${hash}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const fileContent = await response.text();
    console.log('File Content:', fileContent);
    return fileContent;
}



