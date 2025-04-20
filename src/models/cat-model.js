const mongoose = require ('mongoose');

//membuat schema cat
const catSchema = mongoose.Schema({
    "id" : Number, 
    "breed" : String, 
    "origin" : String, 
    "country_code" : String, 
    "life_span" : String, 
    "characteristic" : String, 
    "description"  : String,
    "image_url" : String, 
    "width" : Number, "height" : Number, 
    "mime_type" : String,
});

//mengekspor model dari schema yang sudah dibuat
//mau tidak mau harus nambahin mongoose.models.cat untuk handling masalah compile
module.exports = mongoose.models.Cat || mongoose.model('Cat', catSchema); 