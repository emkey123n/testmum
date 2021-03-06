const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://QmQ7tvzMeni1iXXWQVRJdVnDrSzJGWCBG3tHE3QToSspj6/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  const choonsBeatsContract = await ethers.getContractFactory("ChoonsBeats");

  // deploy the contract
  const deployedChoonsBeatsContract = await choonsBeatsContract.deploy(metadataURL);

  await deployedChoonsBeatsContract.deployed();

  // print the address of the deployed contract
  console.log("ChoonsBeats Contract Address:", deployedChoonsBeatsContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

