const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express(); 

app.use(logger ("dev"));

app.use(express.urlencoded ({ extended: true }));
app.use(express.json());

// make the mongoose connection 
mongoose.connect(process.env.MONGODB_URI || "mongod://localhost/workout", {
    useNewUrlParser: true, 
    useFindAndModify: false
});
