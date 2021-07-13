const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express(); 

app.use(morgan ('dev'));

app.use(express.urlencoded ({ extended: true }));
app.use(express.json());

// make the mongoose connection 
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout', 
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true, 
    useFindAndModify: false
    
    }
);

// routes
app.use(require('./routes/api'));
app.use(require('./routes/view'));

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}!`);
});

