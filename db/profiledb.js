const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

async function addUserToDatabase(userId) {
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connected to the database");
        const db = client.db("Store");
        const collection = db.collection("user");

        // Проверяем, есть ли пользователь с таким userId в базе
        const existingUser = await collection.findOne({ userId });

        if (!existingUser) {
            // Если пользователя нет, добавляем его с текущей датой регистрации
            const currentDate = new Date();
            const user = { userId, registrationDate: currentDate };
            await collection.insertOne(user);
            console.log("User was added:", user);
        } else {
            console.log("User already exists");
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

async function GetDate(userId) {
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db("Store");
        const collection = db.collection("user");

        const user = await collection.findOne({ userId });
        return user;
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

module.exports = {
    addUserToDatabase,
    GetDate
};
