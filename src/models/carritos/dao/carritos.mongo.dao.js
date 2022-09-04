const { ModeloCarritos } = require('../carritos');
const {logger,  loggeoPeticiones} = require('../../../services/logger');


class DaoCarritos{
    static instance;
    carritos;

    static async getInstance(){
        if(!DaoCarritos.instance){
            logger.info('Inicializando DAO MongoDB Carritos');
            DaoCarritos.instance= new DaoCarritos();
        }
        return DaoCarritos.instance;
    }
    
    
    
    async save(item){ //Recibe un objeto y lo guarda en BD
        try{
            const carrito= await ModeloCarritos.create(item);
            return carrito
        }catch (err){
            const respError={
                error: err.message
            }
            logger.error(respError.error)
            return respError
        }
    };

    async updateItem(carrito){
        try{
            const id= carrito._id;
            const carritoActualizado = await ModeloCarritos.findByIdAndUpdate(id, carrito, {new: true});
            return carritoActualizado
        }catch(err){
            const respError={
                error: err.message
            }
            logger.error(respError.error)
            return respError
        }   
    };

    async getIndex(carrito, idProd){
        const prodIndex = await carrito.productos.findIndex(e=>e._id==idProd);
        return prodIndex;
    };

    async getById(id){ //Recibe en id y devuelve el objeto con ese id o null si no est
        try{
            const carrito = await ModeloCarritos.findById(id)
            return carrito
        }catch(err){
            const respError={
                error: err.message
            }
            logger.error(respError.error)
            return null
        }
    };

    async getAll(){ //Devuelve un array con los objetos presentes en el archivo 
        try{
            const items = await ModeloCarritos.find();
            return items
        }catch (err){
            const respError={
                error: err.message
            }
            logger.error(respError.error)
            return respError
        }   
    };
    
    async deleteById(id){ // Elimina del archivo el objeto con el id buscado
        try{
            await ModeloCarritos.findByIdAndDelete(id);
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

    async deleteProdById(carrito, idProd) { //Elimina un producto de un carrito
        // await ModeloCarritos.findOneAndDelete({'productos._id': idProd});
        // const idxProd= this.getIndex(carrito, idProd);
        const idxProd = carrito.productos.map(p=>p._id.valueOf()).indexOf(idProd)
        if (idxProd>-1){
            carrito.productos.splice(idxProd, 1);
            const newCarrito=this.updateItem(carrito)
            return newCarrito;
        }else{ 
            return null
        }
    }

    async deleteAllItems(carrito){ // Elimina todos los items del carrito
        try{
            await ModeloCarritos.findByIdAndUpdate(carrito, {$set:{productos:[]}});
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
};

module.exports= DaoCarritos
