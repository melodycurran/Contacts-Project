const express = require('express');
const mongo = require('./data/database.js');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', require("./routes"));


mongo.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`The database and Web Sever is listening at ${port}`);
        })        
    }
})


