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



