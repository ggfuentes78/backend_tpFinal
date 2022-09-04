// require('dotenv').config();
const config= require('../config/index')
const mongoose=require('mongoose');
const Grid = require('gridfs-stream');


const {logger,  loggeoPeticiones} = require('./logger');

const connectionString = config.MONGO_ATLAS_SRV || 'mongodb://localhost:27017/gfuentes'


const initMongoDB = async ()=>{
    try{
        // const connectionParams = {
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifiedTopology: true,
        // };
        logger.info('Conectando a Base de Datos...');
        await mongoose.connect(connectionString);
        logger.info('Conexion a Base de Datos OK!')
    } catch (error){
        logger.error(`Error al conectar a BD: ${error}`  );
        return error
    }
};

module.exports=initMongoDB()