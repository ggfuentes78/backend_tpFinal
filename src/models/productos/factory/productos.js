const ProductosFsDao = require('../dao/productos.fs');
const ProductosMongoDao = require('../dao/productos.mongodb');
const {logger} = require('../../../services/logger');


class ProductosFactoryDAO {
    
    static async get(dao){
        switch (dao){
// 
            // case 'fs':
                // logger.info('Retornando Instancia de Productos de File System');
                // return await ProductosFsDao.getInstance();
            
            case 'mongo':
                logger.info('Retornando Instancia de Productos de MongoDB');
                return await ProductosMongoDao.getInstance();

            default:
                logger.info('Retornando Instancia de Productos Default');
                return await ProductosMongoDao.getInstance();
        }
    }
}

module.exports=ProductosFactoryDAO