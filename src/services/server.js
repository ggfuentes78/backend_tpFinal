const { initMongoDB }=require('./database');
const args=require('./args');
const config= require('../config/index')
const express = require('express');
const path = require('path');
const mainRouter = require('../routes/index');
const viewsPath= path.resolve(__dirname, '../../views');
const http =require('http');
const session=require('express-session');
const passport = require('passport');
const {loginFunc, signupFunc} = require('../controllers/auth')
const compression=require('compression');
const {logger}= require('./logger');
const { initWsServer} = require ('./socket');
const YAML= require('yamljs');
const swaggerUi = require('swagger-ui-express');



initMongoDB
const aplicacion = express();


//Configuracion de Express-Session
aplicacion.use(
    session({
        secret: process.env.SESSION_SECRET || 'claveSuperSecreta',
        cookie: {
            httpOnly: false,
            secure: false,
            maxAge: 6000000
        },
        rolling: true,
        resave: true,
        saveUninitialized: true,
    }),
);

//Se indica que passport va a utilizarse en todas las rutas y se le delega el manejo de sesiones
aplicacion.use(passport.initialize());
aplicacion.use(passport.session());


passport.use('login', loginFunc);
passport.use('signup', signupFunc);

//Se utiliza compression para minimizar la trafico de datos
aplicacion.use(compression());

//Se define PUG como motor de plantillas para el front
aplicacion.set('views', viewsPath);
aplicacion.set('view engine', 'pug');


aplicacion.use (express.json());
aplicacion.use(express.urlencoded({extended: true}));

const publicPath = path.resolve(__dirname, '../../public');
aplicacion.use(express.static(publicPath));

//Config de  Swagger
const swaggerPath = path.resolve(process.cwd(), './swagger.yaml');
const swaggerDoc = YAML.load(swaggerPath);

aplicacion.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

aplicacion.use('/api', mainRouter);

aplicacion.use('/', mainRouter);

const server = http.Server(aplicacion);



// Configuracion de Manejo de Errores
const errorHandler = (err, req, res, next)=>{
    logger.error(`HUBO UN ERROR ${err.message}`);
    const status = err.statusCode || 500;
    const msg = err.message || 'Internal Server Error';
    const stack = err.stack;
    logger.error(err);
    res.status(status).send({msg, stack});
};

aplicacion.use(errorHandler)


//Init SocketIo Server
initWsServer(server);




module.exports={server}