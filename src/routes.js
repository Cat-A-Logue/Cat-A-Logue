const express = require('express');
const cats = require('./api/cats-route');

//Membuat agar rute bisa berjalan dengan baik
module.exports = () => {
    const app = express.Router();
    cats(app);
    return app;
};
