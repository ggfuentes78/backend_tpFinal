const express =require('express');
const router = express.Router();
const { deleteAllItemsFromCart, getCartById } = require('../controllers/carritos');
const {saveOrder, updateOrder, getAllOrders, getUserOrders, getOrderById, deleteOrderById, deleteProdByIdFromOrder, enviaMensajes, getLastOrder} = require('../controllers/pedidos');
const { generaId } = require('../controllers/varios');
const { Producto, verifBodyProducto } = require('../controllers/productos');
const { ModeloPedidos } = require('../models/pedidos/pedidos');
const {logger, loggeoPeticiones} = require('../services/logger');
const { validarLogin, validaPerfil } = require('../controllers/auth');
const axios=require('axios');
const config = require('../config');

const msg404Pedido= 'Pedido no encontrado'
const msg404Producto= 'Producto no encontrado'

axios.defaults.withCredentials = true;

router.get('/:id/productos', loggeoPeticiones, validarLogin, validaPerfil, async (request, response)=>{ 
    const id = request.params.id;
    const order = await getOrderById(id);
    if (order!= null){
        if (order.productos.length>0){
            response.json({productos: order.productos})
        }else{
            response.json({
                message:'Todos los items del pedido fueron eliminados',
            })
        }
    }else{
        response.status(404).json({
            error : msg404Pedido 
        })
    }
});

router.get('/', loggeoPeticiones, validarLogin, validaPerfil,async(req, res)=>{
    pedidos=await getAllOrders();
    res.json(pedidos)
})



router.get('/last', loggeoPeticiones, validarLogin, async(req, res)=>{
    const userId= req.user._id.valueOf()
    const pedidos=await getLastOrder(userId);
    res.json(pedidos)
})

router.get('/myorders', loggeoPeticiones, validarLogin, async(req, res)=>{
    const userId= req.user._id.valueOf()
    const pedidos=await getUserOrders(userId);
    res.json(pedidos)
})

router.post('/', loggeoPeticiones, validarLogin,async (request, response)=>{ // Crea Pedido 
    const body= request.body
    let direccionEntrega=body.direccion;
    if (!direccionEntrega){
        direccionEntrega=request.user.direccion
    }
    const idCarrito = request.user.carrito;
    const carrito= await getCartById(idCarrito);
    if(carrito.productos.length==0){
        response.status(400).json({message:'No se puede completar el pedido. El carrito esta vacio'})
    }else{
        const item= {
            usuario: carrito.usuario,
            productos: carrito.productos,
            direccionEntrega: direccionEntrega,
            estado: 'Creado'
            };
        saveOrder(item); // Se crea el pedido
        deleteAllItemsFromCart(carrito._id); // Se vacia el carrito
        enviaMensajes(item);  //Se envia mail y Whatsapp a Admin con el pedido y SMS de confirmacion al cliente
        logger.info('Pedido creado')
        response.json({
            message:'Pedido creado',
            pedido: item});
    }
});



module.exports = router;