const { normalize, schema} = require('normalizr');
const {logger} = require('../services/logger');
const MensajesAPI=require('../api/mensajes');
const {validaUsuario}=require('./auth');
const{getAllProds}=require('./productos');
const {getCartById}=require('./carritos');
const {getLastOrder}=require('./pedidos');
const { formatDate } = require('./varios');


let mensajesDao;

MensajesAPI.getInstance().then((instance)=>{
    mensajesDao = instance;
});


const author = new schema.Entity('author');

const mensaje = new schema.Entity('mensaje', {author: author} , {idAttribute: '_id'});

const schemaMensajes = new schema.Array(mensaje);


const saveMensaje=async(mensaje)=>{ //Recibe un objeto y lo guarda en la BD
    try{
        logger.info(`Guardar mensaje: ${JSON.stringify(mensaje)}`);
        const nuevoMensaje = await mensajesDao.guardaMensaje(mensaje);
        return nuevoMensaje;
    }catch(error){
        logger.error('Error', error)
        return null
    }
};

const getMensajes=async()=>{ //Devuelve un array con los registros de la BD 
    try{
        const mensajesOriginales = await mensajesDao.cargarMesajes();
        const mensajesNormalizados = normalize(mensajesOriginales, schemaMensajes);
        return mensajesNormalizados;
    }catch(error){
        logger.error('Error', error)
        return null            
    }
};

const procesaMensaje=async(mensaje)=>{
    try{
        const user=await validaUsuario(mensaje.author.id);
        if (!user){
            return null
        }else{
            const textoDefault= `
        Hola! no he podido comprender tu mensaje. Por favor ingresa una de las siguientes opciones

        * Stock: Para conocer nuestro stock actual.
            
        * Orden: Para conocer la informacion de tu ultima orden.
            
        * Carrito: Para conocer el estado actual de tu carrito.
        `
            // saveMensaje(mensaje);
            logger.info(JSON.stringify(mensaje))
            const objUsrId= user._id;
            const usrId=objUsrId.toString();
            const respuesta={userId: user._id, mensaje:'', tipo:'Usuario'}
            switch  (mensaje.text.toLowerCase()){
                case 'stock':
                    const prods= await getAllProds();
                    const stock=prods.map((p)=>{return [p.nombre, p.stock].join(" - ")})
                    respuesta.mensaje=`Stock disponible: ${stock}`;
                    return respuesta
                case 'orden':
                    const orden= await getLastOrder(usrId)
                    if(orden.length>0){
                        const fechaPedido= formatDate(orden[0].createdAt)
                        const contenido=orden[0].productos.map((p)=>{return [([p.nombre, p.cantidad].join(" - Cant:")), p.precio].join(" - $")})
                        respuesta.mensaje= `Su ultimo pedido fue el ${fechaPedido} por los siguientes productos: ${contenido}`
                    }else{
                        respuesta.mensaje= 'No tiene ningun pedido'
                    }
                    return respuesta
                case 'carrito':
                    const carrito= await getCartById(user.carrito)
                    if(carrito.productos.length>0){
                        const contenido=carrito.productos.map((p)=>{return [([p.nombre, p.cantidad].join(" - Cant: ")), p.precio].join(" - $")})
                        
                        respuesta.mensaje= `Contenido del carrito: ${contenido}`;
                    }else{
                        respuesta.mensaje= 'El carrito esta vacio'
                    }
                    return respuesta
                default:
                    respuesta.mensaje= textoDefault;
                    return respuesta
            }

        }
    }catch(err){
        logger.error('Error', err)
        return
    }

}


module.exports= {saveMensaje, getMensajes, procesaMensaje};