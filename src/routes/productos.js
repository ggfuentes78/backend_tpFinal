const express =require('express');
const router = express.Router();
const { saveProd, getAllProds, getProdById, getProdsBy, updateProd, deleteProdById, verifBodyProducto } = require('../controllers/productos');
const { generaId } = require('../controllers/varios');
const { validarLogin, validaPerfil } = require('../controllers/auth');
const {logger, loggeoPeticiones} = require('../services/logger');


// const validaPerfil=(req, resp, next)=>{
    // if (req.user.admin){
        // next()
    // }else{
        // resp.status(401).send({
            // message: 'No tiene permisos para acceder al recurso'
        // })
    // }
// }

router.get('/', loggeoPeticiones, async (request, response)=>{
    const productos= {productos: await getAllProds()};
    response.json(productos)
});

router.get('/:id', loggeoPeticiones, async (request, response)=>{
    const id = request.params.id;
    const prod= await getProdById(id)
    if (prod!=null){
        response.json(prod)
    }else{
        response.status(404).json({ message: 'producto no encontrado', id: id})
    }
});

router.get('/categoria/:categoria', loggeoPeticiones, async (request, response)=>{
    const query = {categoria: request.params.categoria};
    const prods= await getProdsBy(query)
    if (prods.length>0){
        response.json(prods)
    }else{
        response.status(404).json({ message: 'No se encontraron productos para la categoria', query})
    }
});

router.post('/',  loggeoPeticiones, validarLogin, validaPerfil, verifBodyProducto, async (request, response)=>{
    const idAsignado= generaId();
    const body= request.body;
    const prod= await getProdsBy({nombre: body.nombre})
    if (prod.length==0){
        const item= {
            codigo: idAsignado,
            nombre: body.nombre,
            descripcion: body.descripcion,
            categoria: body.categoria,
            fotos: [body.foto],
            precio: parseFloat(body.precio),
            stock: (body.stock? parseInt(body.stock): 0)
        }
        saveProd(item);
        response.status(201).json({message: 'Se dio de alta el producto', producto: item});
    }else{
        response.status(401).json({message: 'Ya existe otro producto con ese nombre'});
    }
});

router.delete('/:id', loggeoPeticiones, validarLogin, validaPerfil, async (request, response)=>{
    const id = request.params.id;
    let producto= await getProdById(id);
    if (producto!=null) {
        const prods=await deleteProdById(id);
        response.json({
            message:'Producto Eliminado',
            productos: prods
        })
    }else{
        response.status(404).json({message: 'producto no encontrado', id: id})
    }
}); 

router.put('/:id', loggeoPeticiones, validarLogin, validaPerfil, async (request, response)=>{
    const id = request.params.id;
    body = request.body;
    const itemNewData= body
    let producto= await getProdById(id);
    if (producto == null){
        response.status(404).json({message: 'producto no encontrado', id: id});
    }else{
        if(producto.nombre!=body.nombre){
            const prod= await getProdsBy({nombre: body.nombre})
            if (prod.length!=0){
                response.status(401).json({message: 'Ya existe otro producto con ese nombre'});
            }else{
                Object.assign(producto, itemNewData);
                updateProd(producto);
                response.json({message: 'Producto actualizado', producto: producto});
            }
        }else{
            Object.assign(producto, itemNewData);
            updateProd(producto);
            response.json({message: 'Producto actualizado', producto: producto});
        }
    }
}); 

module.exports = router;