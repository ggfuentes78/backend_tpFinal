const { ModeloCarritos } = require('../models/carritos/carritos');
const {logger,  loggeoPeticiones} = require('../services/logger');

const CarritosAPI=require('../api/carritos');


let carritosDao;

CarritosAPI.getInstance().then((instance)=>{
    carritosDao = instance;
});

   
const saveCart=async(item)=>{ //Recibe un objeto y lo guarda en BD
    try{
        const carrito= await carritosDao.guardarCarrito(item);
        return carrito
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error)
        return respError
    }
};

const updateCart=async(carrito)=>{
    try{
        const id= carrito._id;
        const carritoActualizado = await carritosDao.actualizarCarrito(carrito);
        return carritoActualizado
    }catch(err){
        const respError={
            error: err.message
        }
        logger.error(respError.error)
        return respError
    }   
};

//  const getIndex=(carrito, idProd){
// const prodIndex = carrito.productos.findIndex(e=>e._id==idProd);
// return prodIndex;
// };

const getCartById=async(id)=>{ //Recibe en id y devuelve el objeto con ese id o null si no est
    try{
        const carrito = await carritosDao.buscarCarritoPorId(id)
        return carrito
    }catch(err){
        const respError={
            error: err.message
        }
        logger.error(respError.error)
        return null
    }
};
    
// const getRandom=()=>{
    // const min = 0; 
    // const max = this.carritos.length;
    // const idx= randomIndex(min, max);
    // return (this.carritos[idx]);
// }

const getAllCarts=async()=>{ //Devuelve un array con los objetos presentes en el archivo 
    try{
        const items = await carritosDao.buscarCarritos();
        return items
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error)
        return respError
    }   
};
    
const deleteCartById=async(id)=>{ // Elimina del archivo el objeto con el id buscado
    try{
        await carritosDao.borrarCarritoPorId(id);
        return({
            message: 'Se elimino el carrito',
        })
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error)
        return respError
    }   
};

const deleteProdByIdFromCart=async(carrito, idProd)=>{ //Elimina un producto de un carrito
    try{
        const newCarrito= await carritosDao.borrarProductoPorId(carrito, idProd);
        return newCarrito
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error)
        return respError
    }   
}

const deleteAllItemsFromCart=async(carrito)=>{ // Elimina todos los items del carrito
    try{
        await carritosDao.vaciarCarrito(carrito);
        logger.info('productos eliminados')
        return({
            message: 'Se vacio el carrito',
        });
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error)
        return respError
    }; 
};


module.exports= { saveCart, updateCart, getAllCarts, getCartById, deleteCartById, deleteProdByIdFromCart, deleteAllItemsFromCart }
