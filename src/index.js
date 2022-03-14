const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const connect = require('./configs/db')






app.listen(5000, async () => {
    try {
        await connect;
    }
    catch (err){
        console.log({message: err.message});
    }
    console.log("listening on port 5000");
})