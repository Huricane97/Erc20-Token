const hre = require("hardhat");

async function main() {
  const HurricaneToken = await hre.ethers.getContractFactory("HurricaneToken");
  const hurricaneToken = await HurricaneToken.deploy(1000000, 50);

  await hurricaneToken.deployed();
  console.log("HurricaneToken is Deployed at :", hurricaneToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
