const express = require('express');

const favouritesController = require('./favourites-controller'); //Menyambungkan ke controller

const route = express.Router();

//Untuk export berbagai macam rute yang akan digunakan nantinya
//Setiap route harus selalu dihubungkan ke favourites-controller
module.exports = (app) => {
app.use('/favourites', route);

// Post /favourites
route.post("/", favouritesController.createFavourite);

// Delete /favourites/:cat_id/:sub_id
route.delete("/:cat_id/:sub_id", favouritesController.deleteFavourite);
}