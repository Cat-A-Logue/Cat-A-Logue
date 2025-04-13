const Cat = require('../database'); //Untuk connect ke schema database

//fungsi untuk membuat data cat dengan create 
async function createCat(id, breed, origin, country_code, life_span, characteristic,
                         description, image_url, width, height, mime_type)
{
return await Cat.create({id, breed, origin, country_code, life_span, characteristic,
                    description, image_url, width, height, mime_type});         
}

async function getAllCats() {
    return await Cat.find();
}

module.exports = {
    createCat,
    getAllCats,
} 
