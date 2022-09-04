const ProductosFactoryDAO = require('../models/productos/factory/productos');
const { logger }=require('../services/logger');
const args= require('../services/args');

const persistencia=args['dao'];


class ProductosAPI{
    static instance;
    productos;

    constructor(dao){
        this.productos = dao
    }

    static async getInstance(){
        if(!this.instance){
            logger.info('Inicializando API de Productos');
            const dao=await ProductosFactoryDAO.get(persistencia);
            ProductosAPI.instance= new ProductosAPI(dao);
        }
        return ProductosAPI.instance;
    };

    async guardarProducto(item){
        return await this.productos.save(item);
    };

    async actualizarProducto (producto){
        return await this.productos.updateItem(producto)
    };

    async buscarProductoPorId(id){ //Recibe en id y devuelve el objeto con ese id o null si no esta
        return await this.productos.getById(id);
    };

    async buscarProductosPor(query){
        const listaProductos= await this.productos.getBy(query);
        return listaProductos
    }

    async buscarProductos(){ //Devuelve un array con los objetos presentes en el archivo 
        const listaProductos= await this.productos.getAll();
        return listaProductos
    };
        
    async borrarProductoPorId(id){ // Elimina del archivo el objeto con el id buscado
        return await this.productos.deleteById(id);
    };
    
};

module.exports=ProductosAPI