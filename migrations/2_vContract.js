const Migrations = artifacts.require("vContract");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
