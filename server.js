const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express(); 

app.use(logger ("dev"));

app.use(express.urlencoded ({ extended: true }));
app.use(express.json());

// make the mongoose connection 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true, 
    useUnifiedTopology: true
}
);

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);
});

