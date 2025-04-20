const favouritesRepository = require("./favourites-repository");

async function createFavourite(cat_id, sub_id, image_url) {
  return await favouritesRepository.createFavourite(cat_id, sub_id, image_url);
}
//Fungsi tambahan untuk cek duplicate
async function getFavouriteByCatAndSub(cat_id, sub_id) {
    return await favouritesRepository.getFavouriteByCatAndSub(cat_id, sub_id)
}

module.exports = {
  createFavourite,
  getFavouriteByCatAndSub,
};
