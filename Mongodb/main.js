import MongoClient from 'mongodb';

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient.MongoClient(uri);

try {
    await client.connect();
} catch (e) {
    console.error(e);
}

async function listDatabases() {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function insertDocument(dbName, collectionName, document) {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(document);
    console.log(`Inserted document with _id: ${result.insertedId}`);
}

async function findAllDocuments(dbName) {
    const db = client.db(dbName);
    const collections = await db.listCollections().toArray();
    for (const coll of collections) {
        const collection = db.collection(coll.name);
        const documents = await collection.find({}).toArray();
        console.log(`Documents in collection ${coll.name}:`, documents);
    }
}

// await insertDocument("testDB", "testCollection", { name: "Alice", age: 30 });
await listDatabases();
await findAllDocuments("testDB");


await client.close();