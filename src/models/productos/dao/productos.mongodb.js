const { ModeloProductos } = require('../productos');
const {logger,  loggeoPeticiones} = require('../../../services/logger');
const ProductosDTO=require('../dto/productos');


const verifBodyProducto = async (request , response, next)=>{
    const {nombre, descripcion, foto, precio, stock} = request.body;

    if (!nombre || !descripcion || !foto || !precio || !stock){
        return response.status(400).json({
            message: 'Faltan datos en el Body',
        });
    }

    next();
};


class DaoProductos{
    static instance;
    productos;

    static async getInstance(){
        if(!DaoProductos.instance){
            logger.info('Inicializando DAO MongoDB Productos');
            DaoProductos.instance= new DaoProductos();
        }
        return DaoProductos.instance;
    }


    async save(item){ //Recibe un objeto y lo guarda en BD
        try{
            await ModeloProductos.create(item);
        }catch (err){
            const respError={
                error: err.message
            }
            logger.error(respError.error);
            return respError
        }
    };

    async updateItem(producto){ // Recibe un producto y lo actualiza
        try{
            const id = producto._id;
            const productoActualizado = await ModeloProductos.findByIdAndUpdate(id, producto, {new: true});
            return productoActualizado
        }catch (err){
            const respError={
                error: err.message
            }
            logger.error(respError.error);
            return respError
        }   
    };

    async getById(id){ //Recibe un id y devuelve el objeto con ese id o null si no esta
        try{
            const producto = await ModeloProductos.findById(id)
            return producto
        }catch (err){
            const respError={
                error: err.message
            }
            logger.error(respError.error);
            return null
        }   
    };

    async getBy(query){ //Recibe un id y devuelve el objeto con ese id o null si no esta
        try{
            const productos = await ModeloProductos.find(query)
            return productos
        }catch (err){
            const respError={
                error: err.message
            }
            logger.error(respError.error);
            return null
        }   
    };

    async getAll(){ //Devuelve un array con los objetos presentes en la BD
        try{
            const items = await ModeloProductos.find();
            return items
        }catch (err){
            const respError={
                error: err.message
            }
            logger.error(respError.error);
            return respError
        }   
    };
    
    async deleteById(id){ // Elimina del archivo el objeto con el id buscado
        try{
            await ModeloProductos.findByIdAndDelete(id);
            const prods= await DaoProductos.getAll() //o this.getAll() ???
            return (prods)
        }catch (err){
            const respError={
                error: err.message
            }
            logger.error(respError.error);
            return respError
        }   
    };
};

module.exports= DaoProductos //, verifBodyProducto }