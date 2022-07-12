const express =require('express');
const router = express.Router();
const { Carrito } = require('../controllers/carritosMongo');
const pedido = require('../controllers/pedidosCtrl');
const { generaId } = require('../controllers/varios');
const { Producto } = require('../controllers/productosMongo');
const { ModeloPedidos } = require('../models/pedidos');
const {logger, loggeoPeticiones} = require('../services/logger');
const { validarLogin } = require('../services/auth');
const axios=require('axios');
const config = require('../config');

const msg404Pedido= 'Pedido no encontrado'
const msg404Producto= 'Producto no encontrado'

axios.defaults.withCredentials = true;

// router.get('/:id/productos', validarLogin, async (request, response)=>{ 
    // const id = request.params.id;
    // const order = await pedido.getById(id);
    // console.log('pedido', order)
    // if (order!= null){
        // if (order.productos.length>0){
            // response.json({productos: order.productos})
        // }else{
            // response.json({
                // msg: 'Todos los items del pedido fueron eliminados',
                // productos: order.productos
            // })
        // }
    // }else{
        // response.status(404).json({
            // error : msg404Pedido 
        // })
    // }
// });

router.post('/:idCarrito', validarLogin, async(req, res)=>{ // ruta para usar desde el Front 
    const idCarrito = req.params.idCarrito
    try{
        const carrito = await axios.get(`${config.RUTA_APP}/api/carrito/${idCarrito}`)

        if (carrito){
            try{
                const nuevoPedido = await axios.post(`${config.RUTA_APP}/api/pedido`, {carrito: carrito.data, withCredentials: true })
            }catch (error){
                logger.error(error)
            }
            res.render('pedidoOK')   
        }else{
            res.status(404).json({error: 'Carrito no encontrado'})
        }
    }catch (error){
        logger.error(error)
    }
})

router.post('/', async (request, response)=>{ // Crea Pedido 
    const carrito = request.body.carrito;
    const item= {
        usuario: carrito.usuario,
        timestamp: Date.now(),
        productos: carrito.productos
    }
    pedido.save(item); // Se crea el pedido
    Carrito.deleteAllItems(carrito._id); // Se vacia el carrito
    pedido.enviaMensajes(item);  //Se envia mail y Whatsapp a Admin con el pedido y SMS de confirmacion al cliente
    logger.info('Pedido creado')
    response.json({
        msg: 'Pedido creado',
        pedido: item});

});

// router.delete('/:id', validarLogin, async(request, response)=>{ //Borra por carrito segun id (hace falta controlar/reponer stock)?
    // const id = request.params.id;
    // const carrito= await Carrito.getById(id)
    // if(carrito!=null){
        // const borrarCarrito = await Carrito.deleteById(id);
        // response.json(borrarCarrito) //Devuelve array de carritos creados
    // }else{
        // response.status(404).json({error : msg404Carrito})
    // }
// }); 
// 
// router.post('/:id/productos', validarLogin, async(request, response)=>{
    // const idCarrito = request.params.id;
    // const carrito = await Carrito.getById(idCarrito);
    // if (carrito!= null){
        // const body= request.body;
        // let producto= await Producto.getById(body.idProd);
        // if (producto!=null){
            // const idxProd = Carrito.getIndex(carrito, producto._id)
            // if (idxProd == -1){
                // carrito.productos.push(producto);
                // await Carrito.updateItem(carrito);
                // logger.info(`Se agrego el producto ${bosy.idProd} al carrito ${idCarrito}`)
                // response.json(carrito);
            // }else{
            //    response.status(400).json({msg: 'Producto ya existe en Carrito'})
            // }
        // }else{
            // response.status(404).json({error: msg404Producto})
        // }
    // }else{
        // response.status(404).json({error: msg404Carrito})
    // }
// 
// });
// 
// router.delete('/:id/productos/:id_prod', validarLogin, async(request, response)=>{
    // const idCarrito = request.params.id;
    // const idProd = request.params.id_prod;
    // const carrito = await Carrito.getById(idCarrito);
    // if (carrito!= null){
        // const updtCarrito = await Carrito.deleteProdById(carrito, idProd);
            // if (updtCarrito==null){
                // response.status(404).json({error: msg404Producto})
            // }else{
                // Carrito.updateItem(carrito);
                // logger.info(`Se elimino el producto ${idProd} de Carrito ${idCarrito}`)
                // response.json(carrito);
            // }
    // }else{
        // response.status(404).json({error: msg404Carrito})
    // }
// });


module.exports = router;