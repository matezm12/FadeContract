const FadeToken = artifacts.require("FadeToken");

module.exports = function (deployer) {
  deployer.deploy(FadeToken);
};
