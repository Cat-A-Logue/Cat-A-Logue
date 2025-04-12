const express = require('express');

const catsController = require('./cats-controller'); //Menyambungkan ke controller

const route = express.Router();

//Untuk export berbagai macam rute yang akan digunakan nantinya
//Setiap route harus selalu dihubungkan ke cats-controller
module.exports = (app) => {
    app.use('/cats', route);
    //create a new cat
    route.post('/', catsController.createCat);
};
