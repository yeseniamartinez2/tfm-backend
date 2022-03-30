const { MongoClient } = require("mongodb");
require("dotenv").config();
const connectionString = "mongodb://admin:password@localhost:27017";
console.log("🚀 ~ file: conn.js ~ line 4 ~ connectionString", connectionString);
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db("tfm");
            console.log("Successfully connected to MongoDB.");

            return callback();
        });
    },

    getDb: function () {
        return dbConnection;
    },
};
