const express = require('express');
const mongo = require('./data/database.js');

const app = express();

const port = process.env.PORT || 3000;

app.use('/', require("./routes"));

mongo.initDb((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`The database and Web Sever is listening at ${port}`);
        })        
    }
})


