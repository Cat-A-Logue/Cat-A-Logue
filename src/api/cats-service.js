const catsRepository = require('./cats-repository'); //Menyambungkan ke service

//Memanggil fungsi createCat di cats-repository
async function createCat(id, breed, origin, country_code, life_span, characteristic,
                         description, image_url, width, height, mime_type) {
    const cats = catsRepository.createCat(id, breed, origin, country_code, life_span, characteristic,
                                          description, image_url, width, height, mime_type);
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

module.exports = {
    createCat,
    getAllCats,
    deleteCat
}
