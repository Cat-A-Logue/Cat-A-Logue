const mongoose = require ('mongoose');
const config = require ('./config');

//mengset connection dari file config.js dalam bentuk url
//menambahkan pathname dari nama yang ada di file config.js
const connectionString = new URL(config.database.connection); 
connectionString.pathname += config.database.name;

mongoose.connect(`${connectionString.toString()}`);
//melakukan koneksi ke mongoose
const db = mongoose.connection;
db.once('open', () => {
    console.log('Succesfully Connected to Database');
});

//menyatakan schema database 
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
module.exports = mongoose.model('Cat', catSchema);


