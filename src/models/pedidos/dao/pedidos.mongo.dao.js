const {ModeloPedidos}=require('../pedidos');
const {logger}=require('../../../services/logger');
// const PedidosDTO=require('../dto/pedidos');

class DaoPedidos{
    static instance;
    pedido;

    static async getInstance(){
        if(!DaoPedidos.instance){
            logger.info('Inicializando DAO MongoDB de Pedidos');
            DaoPedidos.instance=new DaoPedidos();
        }
        return DaoPedidos.instance;
    }
    async save(item){ //Recibe un objeto y lo guarda en BD
        try{
            await ModeloPedidos.create(item);
        }catch (err){
            const respError={
                error: err.message
            }
            logger.error(respError.error);
            return respError
        }
    };

    async updateItem(pedido){
        try{
            const id= pedido._id;
            const pedidoActualizado = await ModeloPedidos.findByIdAndUpdate(id, pedido, {new: true});
            return pedidoActualizado
        }catch(err){
            const respError={
                error: err.message
            }
            logger.error(respError.error);
            return respError
        }   
    };

    async getIndex(pedido, idProd){
        const prodIndex = await pedido.productos.findIndex(e=>e._id==idProd);
        return prodIndex;
    };

    async getById(id){ //Recibe en id y devuelve el objeto con ese id o null si no est
        try{
            const pedido = await ModeloPedidos.findById(id)
            return pedido
        }catch(err){
            const respError={
                error: err.message
            }
            logger.error(respError.error);
            return null
        }
    };
    
    async getAll(){ //Devuelve un array con todos los pedidos en BD 
        try{
            const items = await ModeloPedidos.find();
            return items
        }catch (err){
            const respError={
                error: err.message
            }
            logger.error(respError.error);
            return respError
        }   
    };

    async getLastOrder(userId){ //Devuelve el ultimo pedido del usuario indicado
        try{
            const order= await ModeloPedidos.find({'usuario': userId}).sort({$natural:-1}).limit(1);
            return order
        }catch(err){
            logger.error(JSON.stringify(err))
            return err
        }
    }

    async getUserOrders(userId){ //Devuelve el ultimo pedido del usuario indicado
        try{
            const orders= await ModeloPedidos.find({'usuario': userId})
            return orders
        }catch(err){
            logger.error(JSON.stringify(err))
            return err
        }
    }

    async deleteById(id){ // Elimina de la BD el objeto con el id buscado
        try{
            await ModeloPedidos.findByIdAndDelete(id);
            return({
                message: 'Pedido eliminado',
            })
        }catch (err){
            const respError={
                error: err.message
            }
            logger.error(respError.error);
            return respError
        }   
    };

    static async deleteProdById(pedido, idProd) { //Elimina un producto de un pedido
        const idxProd= Pedido.getIndex(pedido, idProd);
        if (idxProd>-1){
            pedido.productos.splice(idxProd, 1);
            return pedido;
        }else{
            return null
        }
    }
}

module.exports=DaoPedidos


