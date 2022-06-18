const Migrations = artifacts.require("Migrations");
const vChain = artifacts.require("vChain")
module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(vChain)
};
