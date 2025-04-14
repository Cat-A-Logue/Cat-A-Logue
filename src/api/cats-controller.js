const catsService = require('./cats-service');

async function createCat (req, res, next){
    try {
      const {
        id, 
        breed,
        origin, 
        country_code, 
        life_span, 
        characteristic, 
        description,
        image_url, 
        width,
        height, 
        mime_type,
      } = req.body;

      if (!id) {
        return res.status(400).json({ error: 'ID is required' });
      }

      const cat = await catsService.createCat(id, breed, origin, country_code, life_span,
                                              characteristic, description, image_url, width, height, mime_type)
      return res.status(200).json(cat);
    } catch (error) {
      return next(error);
    }
}

async function getAllCats(req, res, next) {
  try {
    const cats = await catsService.getAllCats();
    return res.status(200).json(cats);
  } catch (error) {
    return next(error);
  }
}

async function deleteCat(req, res, next) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }

    const cat = await catsService.deleteCat(id);
    if (!cat) {
      return res.status(404).json({ error: 'Cat not found' });
    }

    return res.status(200).json(cat);
  } catch (error) {
    return next(error);
  }
}

async function getCatById(req, res, next) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
    const cat = await catsService.getCatById(id);

    if (!cat) {
      return res.status(404).json({ error: 'Cat not found' });
    }
    return res.status(200).json(cat);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
    createCat,
    getAllCats,
    deleteCat,
    getCatById,
}
