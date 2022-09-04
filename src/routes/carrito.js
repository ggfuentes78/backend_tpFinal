const express =require('express');
const router = express.Router();
const { saveCart, updateCart, getAllCarts, getCartById, deleteCartById, deleteProdByIdFromCart, deleteAllItemsFromCart } = require('../controllers/carritos');
const { generaId } = require('../controllers/varios');
const { getProdById, updateProd } = require('../controllers/productos');
const { ModeloCarritos } = require('../models/carritos/carritos');
const {logger, loggeoPeticiones} = require('../services/logger');
const { validarLogin, validaPerfil } = require('../controllers/auth');
const { render } = require('pug');

const msg404Carrito= 'Carrito no encontrado'
const msg404Producto= 'Producto no encontrado'


router.get('/', loggeoPeticiones, validarLogin, async (req, res)=>{
    const cartId= req.user.carrito;
    const carrito= await getCartById(cartId);
    if (carrito!=null){
        res.json(carrito);
    }else{
        res.status(404).json({error: msg404Carrito})
    }
});

router.get('/:id', loggeoPeticiones, validarLogin, validaPerfil,async (request, response)=>{ 
    const id = request.params.id;
    const carrito = await getCartById(id);
    if (carrito!= null){
        response.json(carrito)
    }else{
        logger.info(`Carrito id: ${id} - ${msg404Carrito}`)
        response.status(404).json({
            error : msg404Carrito 
        })
    }
});

router.get('/:id/productos', loggeoPeticiones, validarLogin, validaPerfil, async (request, response)=>{ 
    const id = request.params.id;
    const carrito = await getCartById(id);
    if (carrito!= null){
        if (carrito.productos.length>0){
            response.json({productos: carrito.productos})
        }else{
            response.json({
                message:'No hay productos en el carrito',
                productos: carrito.productos
            })
        }
    }else{
        logger.info(`Carrito id: ${id} - ${msg404Carrito}`)
        response.status(404).json({
            error : msg404Carrito 
        })
    }
});


router.post('/productos', loggeoPeticiones, validarLogin, async (req, res)=>{
    const cartId= req.user.carrito;
    carrito= await getCartById(cartId);
    if (carrito!=null){
        const body= req.body;
        if(!body.idProd || !body.cantidad){
            res.status(400).json({message:'Debe indicar un Id de Producto y cantidad para actualizar el carrito'})
        }else{
            let producto= await getProdById(body.idProd);
            let cant =  parseInt(body.cantidad)
            if (cant<=0 || isNaN(cant)){
                res.status(400).json({message: 'Cantidad incorrecta, debe ingresar un valor mayor a 0 (cero)'})
            }else{
                if (producto==null){
                    logger.info(`Producto id: ${body.idProd} - ${msg404Producto}`);
                    res.status(404).json({message: msg404Producto, id: body.idProd})
                }else{
                    if(cant>producto.stock){
                        res.status(401).json({message: 'No hay stock suficiente para ingresar al carrito'})
                    }else{
                        producto.stock-=cant
                        await updateProd(producto)
                        logger.info('Ser restaron los productos del Stock')
                        const idxProd = carrito.productos.findIndex(e=>e._id.valueOf()==producto._id)
                        if (idxProd != -1){
                            carrito.productos[idxProd].cantidad+=cant
                        }else{
                            carrito.productos.push({_id: producto._id, nombre: producto.nombre, cantidad: cant, precio: producto.precio})                        
                        }
                        const newCarrito=await updateCart(carrito);
                        logger.info('Se agrego producto al carrito');
                        res.json({message:'Se agrego producto al carrito', carrito: newCarrito});
                    }
                }
            }
        }
    }else{
        logger.info(`Carrito id: ${cartId} - ${msg404Carrito}`);
        res.status(404).json({message: msg404Carrito, id: cartId})        
    }
});

router.post('/:id/productos', loggeoPeticiones, validarLogin, validaPerfil, async(req, res)=>{
    const cartId= req.params.id;
    carrito= await getCartById(cartId);
    if (carrito!=null){
        const body= req.body;
        if(!body.idProd || !body.cantidad){
            res.status(400).json({message:'Debe indicar un Id de Producto y cantidad para actualizar el carrito'})
        }else{
            let producto= await getProdById(body.idProd);
            let cant =  parseInt(body.cantidad)
            if (cant<=0 || isNaN(cant)){
                res.status(400).json({message: 'Cantidad incorrecta, debe ingresar un valor mayor a 0 (cero)'})
            }else{
                if (producto==null){
                    logger.info(`Producto id: ${body.idProd} - ${msg404Producto}`);
                    res.status(404).json({message: msg404Producto, id: body.idProd})
                }else{
                    if(cant>producto.stock){
                        res.status(401).json({message: 'No hay stock suficiente para ingresar al carrito'})
                    }else{
                        producto.stock-=cant
                        await updateProd(producto)
                        logger.info('Ser restaron los productos del Stock')
                        const idxProd = carrito.productos.findIndex(e=>e._id.valueOf()==producto._id)
                        if (idxProd != -1){
                            carrito.productos[idxProd].cantidad+=cant
                        }else{
                            carrito.productos.push({_id: producto._id, nombre: producto.nombre, cantidad: cant, precio: producto.precio})
                        }
                        const newCarrito=await updateCart(carrito);
                        logger.info('Se agrego producto al carrito');
                        res.json({message:'Se agrego producto al carrito', carrito: newCarrito});
                    }
                }
            }
        }
    }else{
        logger.info(`Carrito id: ${cartId} - ${msg404Carrito}`);
        res.status(404).json({message: msg404Carrito, id: cartId})        
    }
});


router.put('/productos', loggeoPeticiones, validarLogin, async (req, res)=>{ // Ruta para decrementar la cantidad de un producto del carrito
    const cartId= req.user.carrito;
    carrito= await getCartById(cartId);
    if (carrito!=null){
        const body= req.body;
        if(!body.idProd || !body.cantidad){
            res.status(400).json({message:'Debe indicar un Id de Producto y cantidad para actualizar el carrito'})
        }else{
            const idxProd = carrito.productos.findIndex(e=>e._id.valueOf()==body.idProd)
            let producto= await getProdById(body.idProd);
            let cant =  parseInt(body.cantidad)
            if (cant<=0 || isNaN(cant)){
                res.status(400).json({message: 'Cantidad incorrecta, debe ingresar un valor mayor o igual a 0 (cero)'});
            }else{
                if (idxProd==-1){
                    logger.info(`Producto id: ${body.idProd} - No se encuetra en el carrito`);
                    res.status(404).json({message: 'Producto no se encuentra en el carrito', id: body.idProd})
                }else{
                    if(cant>carrito.productos[idxProd].cantidad){
                        res.status(401).json({message: 'No hay tanta cantidad en el carrito'})
                    }else{
                        let newCarrito
                        producto.stock+=(carrito.productos[idxProd].cantidad - cant)
                        await updateProd(producto)
                        logger.info('Ser devolvieron los productos al Stock')
                        carrito.productos[idxProd].cantidad=cant;
                        newCarrito=await updateCart(carrito);
                        logger.info('Se actualizo la cantidad del producto del carrito');
                        res.json({message:'Se actualizo el carrito', carrito: newCarrito});
                    }
                }
            }
        }
    }else{
        logger.info(`Carrito id: ${id} - ${msg404Carrito}`);
        res.status(404).json({message: msg404Carrito, id: id})        
    }    
});

router.delete('/productos/:id_prod', loggeoPeticiones, validarLogin, async(request, response)=>{ // Ruta para remover un producto completo del carrito
    const idCarrito = request.user.carrito;
    const idProd = request.params.id_prod;
    const carrito = await getCartById(idCarrito);
    if (carrito!= null){
        const idxProd = carrito.productos.map(p=>p._id.valueOf()).indexOf(idProd)
        if(idxProd!=-1){ 
            const updtCarrito = await deleteProdByIdFromCart(carrito, idProd);
            updateCart(updtCarrito);
            response.json({message: 'Producto eliminado del carrito', carrito: updtCarrito});
        }else{
            logger.info(`Producto id: ${idProd} - ${msg404Producto}`);
            response.status(404).json({message: msg404Producto, id: idProd})
        }
    }else{
        logger.info(`Carrito id: ${idCarrito} - ${msg404Carrito}`);
        response.status(404).json({message: msg404Carrito, id: idCarrito})
    }
});

router.delete('/:id/productos/:id_prod', loggeoPeticiones, validarLogin, validaPerfil, async(request, response)=>{
    const idCarrito = request.params.id;
    const idProd = request.params.id_prod;
    const carrito = await getCartById(idCarrito);
    if (carrito!= null){
        const idxProd = carrito.productos.map(p=>p._id.valueOf()).indexOf(idProd)
        if(idxProd!=-1){ 
            const updtCarrito = await deleteProdByIdFromCart(carrito, idProd);
            updateCart(updtCarrito);
            response.json({message: 'Producto eliminado del carrito', carrito: updtCarrito});
        }else{
            logger.info(`Producto id: ${idProd} - ${msg404Producto}`);
            response.status(404).json({message: msg404Producto, id: idProd})
        }
    }else{
        logger.info(`Carrito id: ${idCarrito} - ${msg404Carrito}`);
        response.status(404).json({message: msg404Carrito, id: idCarrito})
    }
});


module.exports = router;