const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

let database;

const initDb = (callback) => {
    if(database) { //If database came back with result do this
        console.log("Db is initialized");
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URI) //* changed MongoClient to mongoose
    .then((client) => {
        database = client;
        callback(null, database);
    })
    .catch((err) => {
        callback(err);
    });
};

const getDatabase = () => {
    if(!database) {
        throw Error('Database not initialized')
    }
    return database;
};


module.exports = {
    initDb,
    getDatabase
};