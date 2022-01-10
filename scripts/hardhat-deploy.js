async function main() {
    // We get the contract to deploy
    const ArtCollectible = await ethers.getContractFactory("ArtCollectible");
    const art = await ArtCollectible.deploy();

    console.log('Claiming ownership of contract');
    await art.claimItem('https://ipfs.io/ipfs/QmaLq536jF9Lp63hueohuWyDmjjRfjwreoRhThbaxVqc1F')
  
    console.log("NFT deployed to:", art.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });