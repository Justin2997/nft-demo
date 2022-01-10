async function main() {
    // We get the contract to deploy
    const ArtCollectible = await ethers.getContractFactory("ArtCollectible");
    const art = await ArtCollectible.attach("0xE47Cac71804eA8693B848406e2B51F3Dd039E00b");

    console.log('Claiming ownership of contract');
    await art.claimItem('https://ipfs.io/ipfs/QmaLq536jF9Lp63hueohuWyDmjjRfjwreoRhThbaxVqc1F')
  
    console.log("Claim adress:", art.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });