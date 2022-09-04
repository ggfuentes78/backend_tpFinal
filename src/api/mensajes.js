const MensajesFactoryDAO = require('../models/mensajes/factory/mensajes');
const { logger }=require('../services/logger');
const args= require('../services/args');

const persistencia=args['dao'];


class MensajesAPI{
    static instance;
    mensajes;

    constructor(dao){
        this.mensajes = dao
    }

    static async getInstance(){
        if(!this.instance){
            logger.info('Inicializando API de Mensajes');
            const dao=await MensajesFactoryDAO.get(persistencia);
            MensajesAPI.instance= new MensajesAPI(dao);
        }
        return MensajesAPI.instance;
    };

    async guardaMensaje(mensaje){
        return await this.mensajes.guardaMensaje(mensaje);
    };

    async cargarMensajes(){ //Recibe en id y devuelve el objeto con ese id o null si no esta
        return await this.mensajes.cargarMensajes();
    };
        
};

module.exports=MensajesAPI