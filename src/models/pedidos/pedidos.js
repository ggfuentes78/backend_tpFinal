const mongoose= require("mongoose");
const { coleccionProductos } = require("../productos/productos");
// const { coleccionUser } = require("../users/users")

const coleccionPedidos = 'pedidos'

const pedidosSchema = new mongoose.Schema(
    {
        usuario: { type: Object, required: true },
        productos: { type: Array , required: true },
        direccionEntrega: { type: String, required: true},
        estado: { type: String, default: 'Creado'}
    },
    { timestamps: true, versionKey: false}
);

const ModeloPedidos = mongoose.model(
    coleccionPedidos,
    pedidosSchema
);

module.exports={ ModeloPedidos };