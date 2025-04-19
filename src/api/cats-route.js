const express = require("express");

const catsController = require("./cats-controller"); //Menyambungkan ke controller

const route = express.Router();

//Untuk export berbagai macam rute yang akan digunakan nantinya
//Setiap route harus selalu dihubungkan ke cats-controller
module.exports = (app) => {
  app.use("/cats", route);
  //create a new cat
  route.post("/", catsController.createCat);

  //get all cats
  route.get("/", catsController.getAllCats);

  //get cat by id
  route.get("/:id", catsController.getCatById);

  //get cat by breed
  route.get("/breed/:breed", catsController.getByBreed);

  //put / update by id
  route.put("/:id", catsController.updateCat);

  //get cat by Origin
  route.get("/origin/:origin", catsController.getByOrigin);

  //get fact by id
  route.get("/fact/:id", catsController.getFactById);

  //get cat by country code
  route.get("/country/:country_code", catsController.getByCountryCode);

  //delete cat by breed
  route.delete("/breed/:breed", catsController.deleteCatByBreed);
};
