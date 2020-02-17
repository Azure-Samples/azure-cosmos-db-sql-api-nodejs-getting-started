// @ts-check

const config = {
  endpoint: "<Your Azure Cosmos account URI>",
  key: "<Your Azure Cosmos account key>",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
