const CarritosMongoDao = require('../dao/carritos.mongo.dao');
const {logger} = require('../../../services/logger');


class CarritosFactoryDAO {
    
    static async get(dao){
        switch (dao){
            case 'mongo':
                logger.info('Retornando Instancia de Carritos de MongoDB');
                return await CarritosMongoDao.getInstance();

            default:
                logger.info('Retornando Instancia de Carritos Default');
                return await CarritosMongoDao.getInstance();
        }
    }
}

module.exports=CarritosFactoryDAO