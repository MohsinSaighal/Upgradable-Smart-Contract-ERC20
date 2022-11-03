const { ethers, upgrades } = require("hardhat");

async function main() {
  const ERC20UpgradableV2 = await ethers.getContractFactory(
    "ERC20UpgradableV2"
  );
  console.log("Upgrading ERC20UpgradableV1...");
  await upgrades.upgradeProxy(
    "0x70fB2aA849f2Aa667E5d972Ca2548E069FEddbce",
    ERC20UpgradableV2
  );
  console.log("Upgraded Successfully");
}

main();