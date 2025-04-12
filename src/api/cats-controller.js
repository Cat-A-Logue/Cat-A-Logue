const catsService = require('./cats-service'); //Menyambungkan ke service

//fungsi dasar untuk mengcreate data dan menghubungkan ke cats-service
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

module.exports = {
    createCat,
}
