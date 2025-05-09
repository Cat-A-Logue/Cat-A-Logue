const Favourite = require("../../models/favourite-model");

async function createFavourite(cat_id, sub_id, image_url) {
  return await Favourite.create({
    cat_id,
    sub_id,
    image_url,
  });
}

async function getFavouriteByCatAndSub(cat_id, sub_id) {
    return await Favourite.findOne({ cat_id, sub_id });
}

async function deleteFavourite(cat_id, sub_id) {
  return await Favourite.deleteOne({ cat_id, sub_id });
}

async function getAllFavourites() {
  return await Favourite.find({});
}

module.exports = {
  createFavourite,
  getFavouriteByCatAndSub,
  deleteFavourite,
  getAllFavourites,
};
