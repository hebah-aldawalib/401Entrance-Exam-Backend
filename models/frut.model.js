'use strict';

const Module = require("module");
const mongoose =require("mongoose");

const frutSchema = new mongoose.Schema({
    name: "string",
    image:"",
    price :""
});




Module.syncBuiltinESMExports(frut);

