const mongoose= require("mongoose");
const { coleccionProductos } = require("../productos/productos");
// const { coleccionUser } = require("../users/users")

const coleccionCarritos = 'carritos'

const carritosSchema = new mongoose.Schema(
    {
        usuario: { type: String, required: true },
        productos: { type: Array , required: true }
    },
    { timestamps: true, versionKey: false}
);

const ModeloCarritos = mongoose.model(
    coleccionCarritos,
    carritosSchema
);

module.exports={ ModeloCarritos };