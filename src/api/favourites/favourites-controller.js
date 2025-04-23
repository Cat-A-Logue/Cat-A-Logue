const favouritesService = require("./favourites-service");

async function createFavourite(req, res, next) {
  try {
    const { cat_id, sub_id, image_url } = req.body;

    if (!cat_id || !sub_id || !image_url) {
      return res.status(400).json({ error: "cat_id, sub_id, dan image_url wajib diisi." });
    }

    // Cek apakah favourite dengan cat_id dan sub_id sudah ada
    const existing = await favouritesService.getFavouriteByCatAndSub(cat_id, sub_id);
    if (existing) {
      return res.status(409).json({ error: "Favourite untuk cat_id dan sub_id ini sudah ada." });
    }

    const favourite = await favouritesService.createFavourite(cat_id, sub_id, image_url);
    return res.status(201).json(favourite);
  } catch (error) {
    return next(error);
  }
}

// Fungsi tambahan untuk menghapus favourite
async function deleteFavourite(req, res, next) {
  try {
    const cat_id = Number(req.params.cat_id);
    const sub_id = req.params.sub_id;

    if (!cat_id || !sub_id) {
      return res.status(400).json({ error: "cat_id and sub_id are required." });
    }

    const favourite = await favouritesService.getFavouriteByCatAndSub(cat_id, sub_id);
    if (!favourite) {
      return res.status(404).json({ error: "Favourite not found." });
    }

    await favouritesService.deleteFavourite(cat_id, sub_id);

    return res.status(200).json({ message: "Favourite deleted successfully." });
  } catch (error) {
    return next(error);
  }
}

// Fungsi tambahan untuk mendapatkan semua favourite
async function getAllFavourites(req, res, next) {
  try {
    const favourites = await favouritesService.getAllFavourites();
    return res.status(200).json(favourites);
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  createFavourite,
  deleteFavourite,
  getAllFavourites,
};
