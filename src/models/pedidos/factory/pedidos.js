const PedidosMongoDao = require('../dao/pedidos.mongo.dao');
const {logger} = require('../../../services/logger');


class PedidosFactoryDAO {
    
    static async get(dao){
        switch (dao){
            case 'mongo':
                logger.info('Retornando Instancia de Pedidos de MongoDB');
                return await PedidosMongoDao.getInstance();

            default:
                logger.info('Retornando Instancia de Pedidos Default');
                return await PedidosMongoDao.getInstance();
        }
    }
}

module.exports=PedidosFactoryDAO