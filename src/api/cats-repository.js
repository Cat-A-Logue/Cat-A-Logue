const Cat = require("../database"); //Untuk connect ke schema database

//fungsi untuk membuat data cat dengan create
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
  return await Cat.create({
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
  });
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

//fungsi untuk mencari data cat berdasarkan breed name
async function getByBreed(breedName) {
  return await Cat.find({ breed: breedName });
}
// Fungsi untuk mengupdate data menggunakan id
async function updateCat(id, updateData) {
  return await Cat.findByIdAndUpdate(id, updateData, { new: true });
}
// Fungsi untuk mencari  data menggunakan id
async function getByOrigin(origin) {
  return await Cat.find({ origin });
}

// Fungsi untuk mendapatkan Fact by ID
async function getFactById() {
  const count = await Cat.countDocuments();
  const random = Math.floor(Math.random() * count);
  return await Cat.findOne().skip(random);
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
};
