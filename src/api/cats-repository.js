const Cat = require('../database'); //Untuk connect ke schema database

//fungsi untuk membuat data cat dengan create 
async function createCat(id, breed, origin, country_code, life_span, characteristic,
                         description, image_url, width, height, mime_type)
{
return await Cat.create({id, breed, origin, country_code, life_span, characteristic,
                    description, image_url, width, height, mime_type});         
}
//fungsi untuk mencari data cat dengan get
async function getAllCats() {
    return await Cat.find();
}
//fungsi untuk menghapus data cat dengan delete
async function deleteCat(id) {
    return await Cat.findOneAndDelete({ id });
}
//fungsi untuk mencari data cat yang lebih spesifik dengan get disertakan id
async function getCatById(id) {
  return await Cat.findOne({ id });
}
  
module.exports = {
    createCat,
    getAllCats,
    deleteCat,
    getCatById,
} 
