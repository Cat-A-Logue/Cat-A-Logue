const express = require('express');
//Menghubungkan ke route-route dari api cats, votes, dan favourites
const cats = require('./api/cats/cats-route');
const favourites = require('./api/favourites/favourites-route');

//Membuat agar rute bisa berjalan dengan baik
module.exports = () => {
    const app = express.Router();

    cats(app);
    favourites(app);

    return app;
};
