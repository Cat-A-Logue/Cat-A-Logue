const mongoose = require ('mongoose');

//membuat schema favouritw
const favouriteSchema = mongoose.Schema({
    "cat_id": Number, //id kucing yang disesuaikan dengan catSchema
    "sub_id" : String, //seolah2 id user 
    "image_url" : String, //disesuaikan dengan image dari catSchema
}, {
    timestamps : true
});

//mengekspor model dari schema yang sudah dibuat
module.exports = mongoose.model('Favourite', favouriteSchema);