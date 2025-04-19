const catsService = require("./cats-service");

async function createCat(req, res, next) {
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
      return res.status(400).json({ error: "ID is required" });
    }

    const cat = await catsService.createCat(
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
      mime_type
    );
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
      return res.status(400).json({ error: "ID is required" });
    }

    const cat = await catsService.deleteCat(id);
    if (!cat) {
      return res.status(404).json({ error: "Cat not found" });
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
      return res.status(400).json({ error: "ID is required" });
    }
    const cat = await catsService.getCatById(id);

    if (!cat) {
      return res.status(404).json({ error: "Cat not found" });
    }
    return res.status(200).json(cat);
  } catch (error) {
    return next(error);
  }
}

async function getByBreed(req, res, next) {
  try {
    const { breed } = req.params;

    if (!breed) {
      return res.status(400).json({ error: "Breed name is required" });
    }

    const cats = await catsService.getByBreed(breed);
    if (cats.length === 0) {
      return res.status(404).json({ error: "No cats found for this breed" });
    }

    return res.status(200).json(cats);
  } catch (error) {
    return next(error);
  }
}

async function updateCat(req, res, next) {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedCat = await catsService.updateCat(id, updateData);
    if (!updatedCat) {
      return res.status(404).json({ error: "Cat not found" });
    }

    return res.status(200).json(updatedCat);
  } catch (error) {
    return next(error);
  }
}
async function getByOrigin(req, res, next) {
  try {
    const { origin } = req.params;

    if (!origin) {
      return res.status(400).json({ error: "This Origin its not found" });
    }

    const cats = await catsService.getByOrigin(origin);
    if (cats.length === 0) {
      return res.status(404).json({ error: "No cats found " });
    }

    return res.status(200).json(cats);
  } catch (error) {
    return next(error);
  }
}

async function getFactById(req, res, next) {
  try {
    const { id } = req.params;
    const limit = parseInt(req.query.limit) || 1;

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const cat = await catsService.getCatById(id);
    if (!cat) {
      return res.status(404).json({ error: "Cat not found" });
    }

    const { description, characteristic } = cat;

    let factsArray = [];

    if (Array.isArray(characteristic)) {
      factsArray = characteristic;
    } else if (typeof characteristic === "string") {
      factsArray = [characteristic];
    }

    if (factsArray.length === 0) {
      return res.status(404).json({ error: "No characteristics found for this cat" });
    }

    const shuffled = factsArray.sort(() => 0.5 - Math.random());
    const facts = shuffled.slice(0, Math.min(limit, factsArray.length));

    return res.status(200).json({
      description,
      characteristic: facts,
    });
  } catch (error) {
    return next(error);
  }
}

async function getByCountryCode(req, res, next) {
  try {
    const { country_code } = req.params;

    if (!country_code) {
      return res.status(400).json({ error: "Country code is required" });
    }

    const cats = await catsService.getByCountryCode(country_code);
    if (cats.length === 0) {
      return res.status(404).json({ error: "No cats found for this country code" });
    }

    return res.status(200).json(cats);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createCat,
  getAllCats,
  deleteCat,
  getCatById,
  getByBreed,
  updateCat,
  getByOrigin,
  getFactById,
  getByCountryCode,
};
