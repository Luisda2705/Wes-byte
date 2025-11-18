const { MongoClient } = require('mongodb');
const uri = "<Your Connection String>";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } finally {
        await client.close();
    }
}


run().catch(console.error);
