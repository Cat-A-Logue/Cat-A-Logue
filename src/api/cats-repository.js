const Cat = require('../database');

async function createCat(id, breed, origin, country_code, life_span, characteristic,
                         description, image_url, width, height, mime_type)
{
return await Cat.create({id, breed, origin, country_code, life_span, characteristic,
                    description, image_url, width, height, mime_type});         
}

module.exports = {
    createCat,
} 
