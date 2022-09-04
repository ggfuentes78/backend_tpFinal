const socketIo = require ('socket.io');
const {Contenedor} = require('../controllers/productos');
const {procesaMensaje, saveMensaje, getMensajes} = require('../controllers/mensajes');
const {logger} = require('./logger')


const listaMensajes= async()=>{
    try{

        const listaMensajes = await getMensajes();
        return listaMensajes
    }
    catch(err){
        logger.error(`Error al recuperar los mensajes - ${err}`)
        return (listaMensajes.mensajes=[])
    }
}

const initWsServer = (server) => {
    io = socketIo(server);
  
    io.on('connection', async (socket) => {
      logger.info('Nueva Conexion establecida!');
    
      socket.on('nuevoMensaje', async (data)=>{
            let lblUsr
            logger.info('nuevo mensaje')
           const mensajeRespuesta= await procesaMensaje(data)
            if (!mensajeRespuesta){
              lblUsr='visible'
            }else{
              mensaje={mensaje:data.text, userId:mensajeRespuesta.userId, tipo:mensajeRespuesta.tipo}
              await saveMensaje(mensaje)
              lblUsr='hidden'
              respuesta={text: mensajeRespuesta.mensaje, author:{id:'Sistema'}}
              resp={mensaje: mensajeRespuesta.mensaje, userId: mensajeRespuesta.userId, tipo:'Sistema'}
              await saveMensaje(resp)
              
              socket.emit('respuestaMensaje', data)
              socket.emit('respuestaMensaje', respuesta)
            }
            socket.emit('validaUsuario', lblUsr)
      })
    
    return io;
    })};
  
  module.exports = {
    initWsServer,
  };