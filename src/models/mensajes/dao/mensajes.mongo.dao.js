const { logger } = require('../../../services/logger');
const {modeloMensajes} = require ('../mensajes');
// const MensajesDTO= require('../dto/mensajes');

class DaoMensajes{
    static instance;

    static async getInstance(){
        if(!DaoMensajes.instance){
            logger.info('Inicializando DAO MONGODB de Mensajes');
            DaoMensajes.instance=new DaoMensajes();
        }
        return DaoMensajes.instance;
    }

    async guardaMensaje(mensaje){
        const nuevoMensaje = await modeloMensajes.create(mensaje);
        return nuevoMensaje
    }
    
    async cargarMensajes(){
        const mensajes = await modeloMensajes.find().lean();
        return mensajes
    }


}


module.exports= DaoMensajes