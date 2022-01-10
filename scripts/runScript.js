const path = require('path');
const pinFileToIPFS = require('./pinFileToIPFS');

//const filePath = path.join(__dirname, '../assets/my-nft-collection.png');
const filePath = path.join(__dirname, '../data/metadata.json');

pinFileToIPFS(filePath);
