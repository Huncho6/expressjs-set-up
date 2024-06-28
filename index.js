const express = require('express');
const { MongoClient } = require ("mongodb");
const { connectToDb, getDb } = require ("./db");
const { ObjectId } = require("mongodb");

const app = express();
let db;

//connect to mongodb
connectToDb ((err) => {
    if (!err) {
        app.listen(666, () => {
            console.log("server is running on port 666")
        });
        db = getDb();
    }
});



app.get("/", (req, res) => {
    res.send("Hello World");
});//this sets up a route handler for HTTP get request to the root URL(`/`)

app.get("/cohorts", (req, res) =>{
    let cohorts = [];
    db.collection("niggers")
    .find()
    .forEach((cohort) => cohorts.push(cohort))
    .then(() =>{
    res.status(200).json(cohorts);
    })
    });
    // .catch((err) => {
    //     res.status(500).json({error: err })
    // });


// app.get("/cohorts/:id", (req, res) => {
//     const id = new ObjectId (req.params.id);
//     db.collection("niggers")
//     .findOne({ _id: id })
//     .then((cohort) => {
//         res.status(200).json(cohort);
//     });
// });