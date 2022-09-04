const Grid = require("gridfs-stream");
const mongoose = require('mongoose');
const coleccionImagenes= 'images';


// let gfs;
// 
// const conn = mongoose.connection;
// conn.once('open',()=>{
    // gfs= Grid(conn.db, mongoose.mongo);
    // gfs.collection(coleccionImagenes);
// });


// const imagesSchema = mongoose.Schema({
    // itemId: {type: String, required: true, max:50},
    // tipo: {type: String, required:true},
    // descripcion: { type: String, required:true, max:250},
    // },
    // { timestamps: true, versionKey: false}
// );

// const modeloImagenes=mongoose.model(
    // coleccionImagenes,
    // imagesSchema
// );

module.exports= { coleccionImagenes };
