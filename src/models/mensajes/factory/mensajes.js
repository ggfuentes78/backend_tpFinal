const MensajesMongoDao = require('../dao/mensajes.mongo.dao');
const {logger} = require('../../../services/logger');


class MensajesFactoryDAO {
    
    static async get(dao){
        switch (dao){
            case 'mongo':
                logger.info('Retornando Instancia de Mensajes de MongoDB');
                return await MensajesMongoDao.getInstance();

            default:
                logger.info('Retornando Instancia de Mensajes Default');
                return await MensajesMongoDao.getInstance();
        }
    }
}

module.exports=MensajesFactoryDAO