const { logger } = require('../../../services/logger');
const {modeloImagenes} = require ('../images');
const Grid = require('gridfs-stream');
const mongoose = require('mongoose')

// const {gfs} = require ('../../../services/server');
// console.log('gfs del dao', gfs)
// const ImagesDTO= require('../dto/images');


let gfs;

const conn = mongoose.connection;
conn.once("open", function(){
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("images");
})


class DaoImages{
    static instance;
    images;

    static async getInstance(){
        if(!DaoImages.instance){
            logger.info('Inicializando DAO MONGODB de Imagenes');
            DaoImages.instance=new DaoImages();
        }
        return DaoImages.instance;
    }

    async cargarImagenPorFile(file){
        try{
            const img= await gfs.files.findOne({filename: file})
            console.log('img file', img)
            if (img){
                const readStream= gfs.createReadStream({filename: file})
                // console.log('READsTREAM', readStream)
                return readStream
            }else{
                return null
            }
        }catch(err){
            console.log('que pacho?')
            return (err)
        }
    }

    async cargarImagenPorId(id){
        console.log('llegue???')
        // console.log('gfs', gfs)
        try{
            console.log('iiiid', id)
            const img= await gfs.files.findById(id)
            console.log('img id', img)
            if (img){
                const readStream= await gfs.createReadStream(img.filename)
                return readStream
            }else{
                return null
            }
        }catch(err){
            console.log('que pacho? id')
            return (err)
        }
    }

    async borrarImagen(file){
        try{
            await gfs.files.deleteOne({filename: file});
            return {status: 200, message:'Imagen eliminada con exito'}
        }catch(error){
            logger.error(err);
            return {status: 500, message:'Ocurrio un error al eliminar la imagen', error: err}
        }

    }


}


module.exports= DaoImages