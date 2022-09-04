const UsersMongoDao = require('../dao/users.mongo.dao');
const {logger} = require('../../../services/logger');


class UsersFactoryDAO {
    
    static async get(dao){
        switch (dao){
            case 'mongo':
                logger.info('Retornando Instancia de Users de MongoDB');
                return await UsersMongoDao.getInstance();

            default:
                logger.info('Retornando Instancia de Users Default');
                return await UsersMongoDao.getInstance();
        }
    }
}

module.exports=UsersFactoryDAO