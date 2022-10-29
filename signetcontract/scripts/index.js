const { network, deployments, ethers, getNamedAccounts } = require("hardhat");
async function main() {
  const SignetFollowSystem = await ethers.getContractFactory(
    "SignetFollowSystem"
  );

  const SignetName = await ethers.getContractFactory("SignetName");

  await SignetName.setSignetControllor(SignetControllor.address);
  await SignetFollowSystem.setSignetControllor(SignetControllor.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
