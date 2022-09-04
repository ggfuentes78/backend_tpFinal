const ImagesFactoryDAO = require('../models/images/factory/images');
const { logger }=require('../services/logger');
const args= require('../services/args');

const persistencia=args['dao'];

class ImagesAPI{
    static instance;
    images;

    constructor(dao){
        this.images = dao
    }

    static async getInstance(){
        if(!this.instance){
            logger.info('Inicializando API de Imagenes');
            const dao=await ImagesFactoryDAO.get(persistencia);
            ImagesAPI.instance= new ImagesAPI(dao);
        }
        return ImagesAPI.instance;
    };

    async guardarImagen(file){
        return await this.images.guardarImagen(file);
    };
    async buscarImagenPorId(id){ //Recibe en id y devuelve el objeto con ese id o null si no esta
        console.log('id - api', id)
        return await this.images.cargarImagenPorId(id);
    };
    async buscarImagenPorFile(file){ //Recibe en id y devuelve el objeto con ese id o null si no esta
        const readStream=await this.images.cargarImagenPorFile(file);
        return readStream
    };
    async borrarImagen(file){ // Elimina del archivo el objeto con el id buscado
        return await this.images.borrarImagen(file);
    };
}

module.exports=ImagesAPI