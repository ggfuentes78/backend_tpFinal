const mongoose = require('mongoose');
const coleccionMensajes= 'mensajes';

const mensajesSchema = mongoose.Schema({
    userId: {type: String, required: true, max:50},
    tipo: {type: String, required:true},
    mensaje: { type: String, required:true, max:250},
    
    },
    { timestamps: true, versionKey: false}
);

const modeloMensajes=mongoose.model(
    coleccionMensajes,
    mensajesSchema
);

module.exports= { modeloMensajes };
