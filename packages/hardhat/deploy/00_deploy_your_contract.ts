import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("FrostyNFT", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  const FrostyNFT = await hre.ethers.getContract<Contract>("FrostyNFT", deployer);

  await deploy("CrystalPoint", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  const CrystalPoint = await hre.ethers.getContract<Contract>("CrystalPoint", deployer);

  await deploy("FrostyFriends", {
    from: deployer,
    args: [deployer, await CrystalPoint.getAddress(), await FrostyNFT.getAddress()],
    log: true,
    autoMine: true,
  });
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["YourContract"];
