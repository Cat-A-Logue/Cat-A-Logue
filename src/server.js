const { env, port} = require('./config');
const config = require ('./config');
const express = require('express');
require('./database');
const routes = require('./routes');

const app = express();
//meng-allow app untuk bisa membaca standar json
app.use(express.json());
//menggunakan prefix dari config.js dalam routes
app.use(`${config.api.prefix}`, routes());

app.listen(port, (err)=> {
    if(err){
        console.log('Server failed to Run');
    } else {
        console.log(`Server runs on ${port} port and ${env} environment`);
    }
});