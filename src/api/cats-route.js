const express = require('express');

const catsController = require('./cats-controller');

const route = express.Router();

module.exports = (app) => {
    app.use('/cats', route);
    //create a new cat
    route.post('/', catsController.createCat);
};
