const express = require("express");
const {MongoClient} = require("mongodb");

const path = require("path");

const app = express();

app.use(express.json);

const uri = "mongodb+srv://m001-student:m001-mongodb-basics@get-crafty-test.auo7v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases: ");
    databasesList.databases.forEach(db => console.log(` = ${db.name}`));
}

async function main() {
    
    try {
        await client.connect();
        await listDatabases(client);
    }
    catch(e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}

main().catch(console.error);



app.listen(5005, () => console.log("Server is ready on port 5005"));