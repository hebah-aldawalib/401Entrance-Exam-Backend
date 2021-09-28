'use strict ';

const axios = require('axios');
const { log, Console } = require('console');
const frut = require("./models/frut");

const updatefrut = (req , res) => {
const id = req.id;
const{name , image , price }= req.id;

frut.findById((id ,name,image , price) )
(error ,updatefrut) => {
    res.json(updatefrut);
};
};

const deletefrut =(req ,res) => {

const id = req.id;
const{name , image , price }= req.id;
frut.deleteOne(id )  (error ,deletefrut) => {
    Console.log("done delet");
    res.json(deletefrut);
}

};


module.exports={updatefrut, deletefrut};
