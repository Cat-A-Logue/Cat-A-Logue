const catsRepository = require("./cats-repository"); //Menyambungkan ke service

//Memanggil fungsi createCat di cats-repository
async function createCat(
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
) {
  const cats = catsRepository.createCat(
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
  return cats;
}
//Memanggil fungsi getAllCats di cats-repository
async function getAllCats() {
  return await catsRepository.getAllCats();
}
//Memanggil fungsi deleteCat di cats-repository
async function deleteCat(id) {
  return await catsRepository.deleteCat(id);
}
//Memanggil fungsi getCatById di cats-repository
async function getCatById(id) {
  return await catsRepository.getCatById(id);
}

//Memanggil fungsi getBreed di cats-repository
async function getByBreed(breedName) {
  return await catsRepository.getByBreed(breedName);
}
//memanggil fungsi updateCat di cats-repository
async function updateCat(id, updateData) {
  return await catsRepository.updateCat(id, updateData);
}
//Memanggil fungsi getByOrigin di cats-repository
async function getByOrigin(origin) {
  return await catsRepository.getByOrigin(origin);
}

//Memanggil fungsi getFactById di cats-repository
async function getFactById(id) {
  return await catsRepository.getCatById(id);
}

//Memanggil fungsi getByCountryCode di cats-repository
async function getByCountryCode(country_code) {
  return await catsRepository.getByCountryCode(country_code);
}
async function deleteCatByBreed(breedName) {
  return await catsRepository.deleteCatByBreed(breedName);
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
  deleteCatByBreed,
};
