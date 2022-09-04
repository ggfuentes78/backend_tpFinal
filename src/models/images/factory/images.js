const ImagesMongoDao = require('../dao/images.mongo.dao');
const {logger} = require('../../../services/logger');


class ImagesFactoryDAO {
    
    static async get(dao){
        switch (dao){
            case 'mongo':
                logger.info('Retornando Instancia de Imagenes de MongoDB');
                return await ImagesMongoDao.getInstance();

            default:
                logger.info('Retornando Instancia de Imagenes Default');
                return await ImagesMongoDao.getInstance();
        }
    }
}

module.exports=ImagesFactoryDAO