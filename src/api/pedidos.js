const PedidosFactoryDAO = require('../models/pedidos/factory/pedidos');
const { logger }=require('../services/logger');
const args= require('../services/args');

const persistencia=args['dao'];


class PedidosAPI{
    static instance;
    pedidos;

    constructor(dao){
        this.pedidos = dao
    }

    static async getInstance(){
        if(!this.instance){
            logger.info('Inicializando API de Pedidos');
            const dao=await PedidosFactoryDAO.get(persistencia);
            PedidosAPI.instance= new PedidosAPI(dao);
        }
        return PedidosAPI.instance;
    };

    async guardarPedido(item){
        return await this.pedidos.save(item);
    };

    async actualizarPedido(pedido){
        return await this.pedidos.updateItem(pedido)
    };

    async buscarPedidoPorId(id){ //Recibe en id y devuelve el objeto con ese id o null si no esta
        return await this.pedidos.getById(id);
    };

    async buscarPedidos(){ //Devuelve un array todos los pedidos
        const listaPedidos= await this.pedidos.getAll();
        return listaPedidos
    };

    async buscarUltimoPedido(userId){ //Devuelve el ultimo pedido del usuario 
        const ultimoPedido= await this.pedidos.getLastOrder(userId);
        return ultimoPedido
    };

    async buscarPedidosDeUsuario(userId){ //Devuelve un array con todos los pedidos de usuario 
        const pedidos= await this.pedidos.getUserOrders(userId);
        return pedidos
    };
        
    async borrarPedidoPorId(id){ // Elimina del archivo el objeto con el id buscado
        return await this.pedidos.deleteById(id);
    };

    async borrarProductoPorId(pedido, idProd){ // Elimina del archivo el objeto con el id buscado
        return await this.pedidos.deleteProdById(pedido, idProd);
    };

};

module.exports=PedidosAPI