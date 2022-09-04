const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const {modeloUser}=require('../models/users/users');
const EmailService=require('../services/email');
const config=require('../config/index');
const {logger,  loggeoPeticiones} = require('../services/logger');
const { saveCart } = require('./carritos');

const strategyOptions={
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
};

const UsersAPI=require('../api/users');
const { connect } = require('mongoose');


let usersDao;

UsersAPI.getInstance().then((instance)=>{
    usersDao = instance;
});

const validarEmail=(valor)=>{
    const emailRegEx= new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    if (emailRegEx.test(valor)){
     return true;
    } else {
     return false;
    }
  }

const validaCampos=(req, res, next)=>{
    const username=req.query.email;
    const password=req.query.password;
      if(!username || !password){
        res.status(400).json({message: 'Error en login', error:'Debe ingresar email y password para la autenticacion'});
    }else{
        next();    
    }
}

  const validaPerfil=(req, res, next)=>{
    if (req.user.admin){
        next()
    }else{
        res.status(403).send({
            message: 'No tiene permisos para acceder al recurso'
        })
    }
}

const login = async(req, username, password, done)=>{
    req.session.messages = [];
    if(!username || !password){
        return done(null, false, {message:'Debe ingresar email y password para la autenticacion'});
    }else{
        logger.info('intentando login...');
        // req.session.messages = [];
        const user = await usersDao.buscarUsuario(username);
        if(!user){
            logger.info(`Login fallo! Usuario inexistente ${username}`)
            return done(null, false, {message:'Usuario inexistente'});
        }
        const passOk= await user.isValidPassword(password)
        if(!passOk){
            logger.info('Login fallo! Password erronea')
            return done(null, false, {message: 'Password Erronea'});
        }
        logger.info(`Login exitoso de usuario ${username}`);
        return done(null, user);
    };
};

const signup = async (req, username, password, done)=>{
    try{
        logger.info('intentando registro de usuario...');
        req.session.messages = [];
        const { email, password, nombre, apellido, direccion, edad, codPais, telefono, foto, admin } = req.body;
            if (validarEmail(email)){
            const user=await usersDao.buscarUsuario(email);
            if (user){
                logger.info(`Usuario ya existe ${user.email}`);
                return done (null, false, {message:'Usuario ya existe'});
            }else{
                if (!password || !nombre || !apellido || !direccion || !edad || !codPais || !telefono){
                    return done (null, false, {message:'Faltan completar datos obligatorios para el signup'});
                }else{
                    const datosUser={
                        email,
                        password,
                        nombre,
                        apellido,
                        direccion,
                        edad,
                        codPais,
                        telefono,
                        foto,
                        admin
                    };
                    const nuevoUser= await usersDao.altaUsuario(datosUser);
                    const usrCarrito={
                        _id: nuevoUser._id,
                        email: nuevoUser.email,
                        nombre: nuevoUser.nombre,
                        telefono: `+${datosUser.codPais}${datosUser.telefono}`
                    }
                    const carrito= {
                        usuario: nuevoUser._id,
                        productos: []
                    }
                    const cart=await saveCart(carrito);

                    const updUser = await usersDao.actualizarUsuarioPorId(nuevoUser._id, {carrito:cart._id});

                    logger.info(`Se dio de alta el usuario ${datosUser.email}`)
                    const destAltaUsr= config.DESTINATARIO_MAIL_ADMIN;
                    const subjAltaUsr='Nuevo Registro';

                    const contAltaUsr=`<h2>Se dio de alta el usuario <b>${datosUser.email}</b>!</h2>
                    <br>
                    <h4><b>Nombre:</b> ${datosUser.nombre}</h4>
                    <h4><b>Apellido:</b> ${datosUser.apellido}</h4>
                    <h4><b>Edad:</b> ${datosUser.edad}</h4>
                    <h4><b>Direccion:</b> ${datosUser.direccion}</h4>
                    <h4><b>Telefono:</b> (+${datosUser.codPais}) ${datosUser.telefono}</h4>`

                    EmailService.sendEmail(destAltaUsr, subjAltaUsr, contAltaUsr)
                    logger.info(`Se envio email a Admin con los datos de alta del usuario ${datosUser.email}`)
                    return done(null,updUser);
                }
            };
        }else{
            return done(null, false, {message:'Debe ingresar un email válido'})
        }
    }catch(error){
        done(error);
    } 
};

const loginFunc= new LocalStrategy(strategyOptions, login);
const signupFunc=new LocalStrategy(strategyOptions, signup);

const validarLogin=(req, res, next)=>{
    if (req.isAuthenticated()){
        user=req.session.passport.user;
        next()
    }else{
        logger.info('Usuario no autenticado')
        res.status(401).send({message: 'Usuario no autenticado'})
    }
};

passport.serializeUser((user, done)=>{
    logger.info('Ejecutando serializeUser')
    done(null, {_id:user._id, email:user.email, admin:user.admin, carrito:user.carrito});
})

passport.deserializeUser((userId, done)=>{
    logger.info('Ejecutando deserializeUser');
    modeloUser.findById(userId).then((user)=>{
        return done(null, user);
    })
});

const getUserById=async (id)=>{
    try{
        const user= await usersDao.buscarUsuarioPorId(id);
        return user
    }catch(err){
        logger.error(err.stack)
        return null
    }
};

const validaUsuario=async (usr)=>{
    const user = await usersDao.buscarUsuario(usr);
    if(!user){
        return null
    }else{
        return user
    }
}

module.exports={loginFunc, signupFunc, validarLogin, validaUsuario, validaPerfil, getUserById, validaCampos};

