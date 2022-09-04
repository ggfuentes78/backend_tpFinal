const { ModeloProductos } = require('../models/productos/productos');
const {logger,  loggeoPeticiones} = require('../services/logger');
const ProductosAPI=require('../api/productos');


let productosDao;

ProductosAPI.getInstance().then((instance)=>{
    productosDao = instance;
});



const verifBodyProducto = async (request , response, next)=>{
    let {nombre, descripcion, categoria, precio, stock} = request.body;

    if (!nombre || !descripcion || !categoria || !precio ){
        return response.status(400).json({
            message: 'Faltan datos en el Body',
        });
    }else{
        if(!stock){
            stock=0
        }
        if(isNaN(parseFloat(precio))|| isNaN(parseInt(stock))){
            return response.status(400).json({
                message: 'Error en tipo de datos. Precio y stock deben ser de tipo numerico'
            })
        }
    }


    next();
};


const saveProd=async (item)=>{ //Recibe un objeto y lo guarda en BD
    try{
        await productosDao.guardarProducto(item);
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.respError);
        return respError
    }
};

const updateProd= async(producto)=>{
    try{
        const id = producto._id;
        const productoActualizado = await productosDao.actualizarProducto(producto);
        return productoActualizado
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error);
        return respError
    }   
};

const getProdById=async(id)=>{ //Recibe un id y devuelve el objeto con ese id o null si no esta
    try{
        const producto = await productosDao.buscarProductoPorId(id);
        return producto
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error);
        return null
    }   
};

const getProdsBy=async(query)=>{ //Recibe una categoria y devuelve los productos que corresponden a esta
    try{
        const productos = await productosDao.buscarProductosPor(query);
        return productos
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error);
        return null
    }   
};

const getAllProds=async()=>{ //Devuelve un array con los objetos presentes en la BD
    try{
        const items = await productosDao.buscarProductos()
        return items
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error);
        return respError
    }   
};
    
const deleteProdById=async (id)=>{ // Elimina del archivo el objeto con el id buscado
    try{
        await productosDao.borrarProductoPorId(id);
        const prods= await productosDao.buscarProductos()
        return (prods)
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error);
        return respError
    }   
};

module.exports= { saveProd, getAllProds, getProdById, getProdsBy, updateProd, deleteProdById, verifBodyProducto }