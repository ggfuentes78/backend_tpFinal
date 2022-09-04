const express =require('express');
// const passport = require('passport');
const router = express.Router();
const routerProductos = require('./productos');
const routerPedido = require('./pedido');
const routerCarrito = require('./carrito');
const routerAuthenticate = require('./auth').router;
const routerImages = require('./images');
const routerMensajes=require('./mensajes');
const routerInfo=require('./info')
const validarLogin = require('../controllers/auth').validarLogin;
const {logger, loggeoPeticiones} = require('../services/logger')



router.use('/productos', routerProductos);
router.use('/carrito', routerCarrito);
router.use('/auth', routerAuthenticate);
router.use('/pedido', routerPedido);
router.use('/images', routerImages);
router.use('/info', routerInfo)
router.use('/mensajes', routerMensajes);


router.use(function(req, res, next) {
    const msg404= 'Ruta no definida'
    logger.warn(`${msg404} - Se intento acceder a la ruta ${req.url} con el metodo ${req.method}`)
    res.status(404).json({message: msg404})
  });

router.use(function(err, req, res, next){
    logger.error((`Algo salio mal - ${err}`))
    res.status(500).json({message:'Algo salio mal', error: err})
})


module.exports =router;