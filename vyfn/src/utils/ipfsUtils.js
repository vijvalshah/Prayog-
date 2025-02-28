import pinataSDK from '@pinata/sdk';

const pinata = new pinataSDK(
    "0c9823906a06d4b34b7d",
    "8512fb6674b04ef877657d1c27e4e096d1f4624fe21e0cc03b8c4c3a54b10774"
);

export const uploadToIPFS = async (jsonData) => {
    try {
        const result = await pinata.pinJSONToIPFS(jsonData);
        return {
            success: true,
            hash: result.IpfsHash
        };
    } catch (error) {
        console.error('Error uploading to IPFS:', error);
        return {
            success: false,
            hash: null
        };
    }
}; 