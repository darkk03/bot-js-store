const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

async function addProductToDatabase(productInfo) {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("connected to database");
        const db = client.db("Store");
        const collection = db.collection("products");
        const product = { info: productInfo };
        await collection.insertOne(product);
        console.log("Product was added", product);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

module.exports = {
    addProductToDatabase
};