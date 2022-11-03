// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0x935e2784270cAe14b2731292fd7000DF1cB9bD2a";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading Box...");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}

main();