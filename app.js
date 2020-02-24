// @ts-check
const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");
const dbContext = require("./data/databaseContext");

const newItem = {
  id: "3",
  category: "fun",
  name: "Cosmos DB",
  description: "Complete Cosmos DB Node.js Quickstart ⚡",
  isComplete: false
};

async function main() {
  const { endpoint, key, databaseId, containerId } = config;

  const client = new CosmosClient({ endpoint, key });

  const database = client.database(databaseId);
  const container = database.container(containerId);

  // Make sure Tasks database is already setup. If not, create it.
  await dbContext.create(client, databaseId, containerId);

  try {
    console.log(`Querying container: Items`);

    // query to return all items
    const querySpec = {
      query: "SELECT * from c"
    };

    // read all items in the Items container
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();

    console.log(items);

    // Create a new item
    const { resource: createdItem } = await container.items.create(newItem);
    console.log(`Created item: %s`, createdItem);

    const { id, category } = createdItem;

    // Update the item
    createdItem.isComplete = true;
    const { resource: updatedItem } = await container
      .item(id, category)
      .replace(createdItem);
    console.log(`Updated item: %s`, updatedItem);

    // Delete the item
    const { resource: result } = await container.item(id, category).delete();
    console.log("Deleted item with id: %s", id);
  } catch (err) {
    console.log(err.message);
  }
}

main();
