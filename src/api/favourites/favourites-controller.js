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

module.exports = {
  createFavourite,
};
