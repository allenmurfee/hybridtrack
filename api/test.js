import { CosmosClient } from "@azure/cosmos";
import { config } from "dotenv";

config();

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });

async function testConnection() {
  const databaseId = "hybridtrack-db";
  const containerId = "employees";

  try {
    const database = client.database(databaseId);
    console.log(`✅ Referenced database: ${database.id}`);

    const container = database.container(containerId);
    console.log(`✅ Referenced container: ${container.id}`);
  } catch (err) {
    console.error("❌ Error accessing Cosmos DB:", err.message);
  }
}

testConnection();
