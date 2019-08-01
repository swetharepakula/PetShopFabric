module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    // fab3
    fabric: {
      host: "127.0.0.1",
      port: 5000,
      network_id: "*" // Match any network id
    },
    // geth
    ethereum: {
      host: "127.0.0.1",
      port: 5000,
      gas: 4500000,
      network_id: "*" // Match any network id
    }
  }
};
