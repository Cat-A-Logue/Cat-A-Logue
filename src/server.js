const { env, port} = require('./config');
const config = require ('./config');
const express = require('express');
const path = require('path');
require('./database');
const routes = require('./routes');
const app = express();

//meng-allow app untuk bisa membaca standar json
app.use(express.json());
//menggunakan prefix dari config.js dalam routes
app.use(`${config.api.prefix}`, routes());
//menghubungkan ke html yang telah dibuat
app.use(express.static(path.join(__dirname, '../public')));

//kode untuk menyajikan html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  
});

//melihat apakah server berjalan dengan baik atau tidak
app.listen(port, (err)=> {
    if(err){
        console.log('Server failed to Run');
    } else {
        console.log(`Server runs on ${port} port and ${env} environment`);
    }
});