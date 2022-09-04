const { ModeloImages } = require('../models/images/images');
const {logger,  loggeoPeticiones} = require('../services/logger');

const ImagesAPI=require('../api/images');


let imagesDao;

ImagesAPI.getInstance().then((instance)=>{
    imagesDao = instance;
});

   
const guardarImagen=async(file)=>{ //Recibe un objeto y lo guarda en BD
    try{
        const imagen= await imagesDao.guardarImagen(file);
        return imagen
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error)
        return respError
    }
};


const buscarImagenPorId=async(id)=>{ //Recibe en id y devuelve el objeto con ese id o null si no est
    try{
        const imagen = await imagesDao.buscarImagenPorId(id)
        return imagen
    }catch(err){
        const respError={
            error: err.message
        }
        logger.error(respError.error)
        return null
    }
};

const buscarImagenPorFile=async(file)=>{ //Recibe en id y devuelve el obje
    try{
        const imagen = await imagesDao.buscarImagenPorFile(file)
        return imagen
    }catch(err){
        const respError={
            error: err.message
        }
        logger.error(respError.error)
        return null
    }
};
    

const borrarImagen=async(file)=>{ // Elimina del archivo el objeto con el id buscado
    try{
        await imagesDao.borrarImagen(file);
        return({
            message: 'Se elimino la imagen',
        })
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error)
        return respError
    }   
};

module.exports= { guardarImagen, buscarImagenPorId, buscarImagenPorFile, borrarImagen}
