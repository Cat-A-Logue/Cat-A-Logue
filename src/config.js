const dotenv = require('dotenv');
//mengatur node environment untuk ke 'development' secara default
process.env.NODE_ENV = (process.env.NODE_ENV || 'development').toLowerCase(); 

//Menggunakan library dotenv untuk mengkonfigurasi ke environment yang sudah dibuat
//Melakukan pengecekan jika path tidak ditemui
const envFound = dotenv.config({path : '.env'});
if(envFound.error){
    throw new Error ('.env file is not found!');
}

//Set beberapa hal yang akan diekspor jika file config dipanggil
module.exports = {
    env: process.env.NODE_ENV, 
    port: process.env.PORT || 4000, 
    api: {
        prefix: '/api', //penggunaan prefix agar routes berawalan /api
    },
    database: {
        connection: process.env.DB_CONNECTION,
        name: process.env.DB_NAME,
    },
};