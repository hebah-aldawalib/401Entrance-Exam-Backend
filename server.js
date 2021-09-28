'use strict';

const express = require('express')
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const mongoose = require("mongoose");
const db = require("./models");
const { append } = require('vary');
const { Console } = require('console');


const App=express;

app.use= cors;

const port= process.env.port ;
const mongo_URL=process.env.port;

app.get('/' , (req, res) => {
    res.send('hebah server is runing');
});

app.put('frut:id' ,updatefrut);
app.delete('frut:id' , deletefrut);








app.listen(port; () => {
    Console.log(`hebah server is runing`);
}

