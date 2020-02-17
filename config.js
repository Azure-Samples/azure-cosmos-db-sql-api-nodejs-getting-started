// @ts-check

const config = {
  // endpoint: "<Your Azure Cosmos account URI>",
  // key: "<Your Azure Cosmos account key>",
  endpoint: "https://fb2c4ff3-0ee0-4-231-b9ee.documents.azure.com:443/",
  key:
    "rgQwJf2ulYjgksTifH6l5MSj0VJlMMsWghBJsQM0Yw5IJVcSycZw3LTiL68MrGxtaVh2ekPEDWGlQvaT3hdgNg==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
