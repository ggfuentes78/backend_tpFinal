const CarritosFactoryDAO = require('../models/carritos/factory/carritos');
const { logger }=require('../services/logger');
const args= require('../services/args');

const persistencia=args['dao'];


class CarritosAPI{
    static instance;
    carritos;

    constructor(dao){
        this.carritos = dao
    }

    static async getInstance(){
        if(!this.instance){
            logger.info('Inicializando API de Carritos');
            const dao=await CarritosFactoryDAO.get(persistencia);
            CarritosAPI.instance= new CarritosAPI(dao);
        }
        return CarritosAPI.instance;
    };

    async guardarCarrito(item){
        return await this.carritos.save(item);
    };

    async actualizarCarrito (carrito){
        return await this.carritos.updateItem(carrito)
    };

    async buscarCarritoPorId(id){ //Recibe en id y devuelve el objeto con ese id o null si no esta
        return await this.carritos.getById(id);
    };

    async buscarCarritos(){ //Devuelve un array con los objetos presentes en el archivo 
        const listaCarritos= await this.carritos.getAll();
        return listaCarritos
    };
        
    async borrarCarritoPorId(id){ // Elimina del archivo el objeto con el id buscado
        return await this.carritos.deleteById(id);
    };

    async borrarProductoPorId(carrito, idProd){ // Elimina del archivo el objeto con el id buscado
        return await this.carritos.deleteProdById(carrito, idProd);
    };

    async vaciarCarrito(carrito){ // Elimina del archivo el objeto con el id buscado
        return await this.carritos.deleteAllItems(carrito);
    };
    
};

module.exports=CarritosAPI