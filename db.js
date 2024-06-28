const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/arsenalBoys";
let dbCollection;

module.exports = {
    connectToDb: (callback) => {
        MongoClient.connect(url)
        .then((client) => {
            dbCollection = client.db();
            return callback();
        })
        .catch((err) => {
        console.error(err);
        return callback(err);
    })
    },
    getDb: () => dbCollection,
};



// const connectToDb = () => {
//     MongoClient.connect(url)
//         .then((client) => {
//         dbcollection = client.db();
//         console.log("dbCollection", dbcollection)
//     }) 
//     .catch((err) => {
//         console.log("error connecting to db", err)
//     });
// };

// const getDbCollection = () => {
//     return dbcollection;
// }