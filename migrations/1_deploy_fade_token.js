const FadeToken = artifacts.require("BobToken");

module.exports = function (deployer) {
    deployer.deploy(FadeToken, 69000000000)
}