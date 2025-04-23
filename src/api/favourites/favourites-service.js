const favouritesRepository = require("./favourites-repository");

async function createFavourite(cat_id, sub_id, image_url) {
  return await favouritesRepository.createFavourite(cat_id, sub_id, image_url);
}
//Fungsi tambahan untuk cek duplicate
async function getFavouriteByCatAndSub(cat_id, sub_id) {
    return await favouritesRepository.getFavouriteByCatAndSub(cat_id, sub_id)
}

//Fungsi untuk menghapus favourite berdasarkan cat_id dan sub_id
async function deleteFavourite(cat_id, sub_id) {
  return await favouritesRepository.deleteFavourite(cat_id, sub_id);
}

//Fungsi untuk mendapatkan semua favourite
async function getAllFavourites() {
  return await favouritesRepository.getAllFavourites();
}
module.exports = {
  createFavourite,
  getFavouriteByCatAndSub,
  deleteFavourite,
  getAllFavourites,
};
