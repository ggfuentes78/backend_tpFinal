const config = require('../config/index');
// const { ModeloPedidos } = require('../models/pedidos/pedidos');
const EmailService = require('../services/email');
const {logger,  loggeoPeticiones} = require('../services/logger');
const TwilioService = require('../services/twilio');


const PedidosAPI=require('../api/pedidos');
const { getUserById } = require('./auth');
const { getProdById } = require('./productos');


let pedidosDao;

PedidosAPI.getInstance().then((instance)=>{
    pedidosDao = instance;
});

    
const saveOrder=async(item)=>{ //Recibe un objeto y lo guarda en BD
    try{
        await pedidosDao.guardarPedido(item);
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error);
        return respError
    }
};

const updateOrder=async(pedido)=>{
    try{
        const id= pedido._id;
        const pedidoActualizado = await pedidosDao.actualizarPedido(id);
        return pedidoActualizado
    }catch(err){
        const respError={
            error: err.message
        }
        logger.error(respError.error);
        return respError
    }   
};

const getIndex=(pedido, idProd)=>{
    const prodIndex = pedido.productos.findIndex(e=>e._id==idProd);
    return prodIndex;
};

const getOrderById=async(id)=>{ //Recibe en id y devuelve el objeto con ese id o null si no est
    try{
        const pedido = await pedidosDao.buscarPedidoPorId(id)
        return pedido
    }catch(err){
        const respError={
            error: err.message
        }
        logger.error(respError.error);
        return null
    }
};

// const getRandom=()=>{
    // const min = 0; 
    // const max = this.pedidos.length;
    // const idx= randomIndex(min, max);
    // return (this.pedidos[idx]);
// }

const getAllOrders=async()=>{ //Devuelve un array con todos los pedidos en BD 
    try{
        const items = await pedidosDao.buscarPedidos();
        return items
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error);
        return respError
    }   
};

const getLastOrder=async(userId)=>{ //Devuelve el ultimo pedido del usuario especificado 
    try{
        const pedido = await pedidosDao.buscarUltimoPedido(userId);
        return pedido
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error);
        return respError
    }   
};

const getUserOrders=async(userId)=>{ //Devuelve el todos los pedidos del usuario especificado 
    try{
        const pedidos = await pedidosDao.buscarPedidosDeUsuario(userId);
        return pedidos
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error);
        return respError
    }   
};


const deleteOrderById=async(id)=>{ // Elimina de la BD el objeto con el id buscado
    try{
        await pedidosDao.borrarPedidoPorId(id);
        return({
            message: 'Pedido eliminado',
        })
    }catch (err){
        const respError={
            error: err.message
        }
        logger.error(respError.error);
        return respError
    }   
};

const  deleteProdByIdFromOrder=async(pedido, idProd)=>{ //Elimina un producto de un pedido
    const idxProd= getIndex(pedido, idProd);
    if (idxProd>-1){
        pedidosDao.borrarProductoPorId(pedido, idProd);
        return pedido;
    }else{
        return null
    }
}

const enviaMensajes=async (pedido)=>{
    const usuario= await getUserById(pedido.usuario)
    const cellAdmin = config.DESTINATARIO_CELU_ADMIN;
    const mailAdmin = config.DESTINATARIO_MAIL_ADMIN;
    const cellUsuario = `+${usuario.codPais}${usuario.telefono}`;
    const nombreUsuario = usuario.nombre;
    const emailUsuario = usuario.email;
    const productos = pedido.productos;
    let prods=""
    await productos.forEach(async (e) => {
        prods += `<p>Codigo de Producto: ${e._id} - <b>Nombre: ${e.nombre}</b> - cant: ${e.cantidad} - Precio Unitario: $${e.precio}</p>`;
    })
    const asunto =`Nuevo pedido de ${nombreUsuario} - ${emailUsuario}`
    const contProductos=`<H2>NUEVO PEDIDO </H2>
    <H3>Productos:</H3>
    ${prods}`
    const mensajeSMSUsuario = `${nombreUsuario}, te confirmamos que recibimos tu pedido y esta siendo procesado`;
    TwilioService.sendWhatsAppMessage(cellAdmin, asunto);
    TwilioService.sendSMSMessage(cellUsuario, mensajeSMSUsuario);
    EmailService.sendEmail(mailAdmin, asunto, contProductos);
}


module.exports= {saveOrder, updateOrder, getAllOrders, getUserOrders, getLastOrder, getOrderById, deleteOrderById, deleteProdByIdFromOrder, enviaMensajes}