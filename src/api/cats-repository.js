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

//async function deleteCat(id) {
    //const cat = await Cat.findByIdAndDelete(id);
    //if (!cat) {
      //  throw new Error('Cat not found');
    //}
  //  return cat;
//}

async function deleteCat(id) {
    return await Cat.findOneAndDelete({ id }); // karena kamu pakai id custom, bukan _id
  }
  
module.exports = {
    createCat,
    getAllCats,
    deleteCat,
} 
