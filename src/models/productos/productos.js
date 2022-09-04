const coleccionImagenes=require('../images/images')
const mongoose = require('mongoose');

const coleccionProductos = 'productos';

const productosSchema = new mongoose.Schema(
    {
        codigo: { type: String, required: true },
        nombre: { type: String, requiered: true },
        descripcion: { type: String, required: true },
        categoria: {type: String, required: true},
        fotos: {type: Array},//, ref: coleccionImagenes},
        precio: { type: Number, required: true},
        stock: { type: Number, default:0}
    },
    { timestamps: true, versionKey: false }
);

const ModeloProductos = mongoose.model(
    coleccionProductos,
    productosSchema
);

module.exports= { ModeloProductos, coleccionProductos };