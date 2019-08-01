module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 5000,
      gas: 4500000,
      // gasPrice: "0",
      // skipDryRun: true,
      network_id: "*" // Match any network id
    },
    ethereum: {
      host: "127.0.0.1",
      port: 5000,
      gas: 4500000,
      gasPrice: "0",
      skipDryRun: true,
      network_id: "*" // Match any network id
    }
  }
};
