const express =require('express');
const router = express.Router();
const passport = require('passport');
const { MessageInstance } = require('twilio/lib/rest/api/v2010/account/message');
const { modeloUser } = require('../models/users/users');
const {logger, loggeoPeticiones} = require('../services/logger')
const {validarLogin, validaPerfil, getUserById, validaCampos}= require('../controllers/auth')


router.post('/login', loggeoPeticiones, validaCampos, passport.authenticate('login', {failureRedirect: '/api/auth/loginFailed', failureMessage: true}), (req, res)=>{
    res.json({message: 'Login OK', user: req.user.email});
});

router.get('/loginFailed', loggeoPeticiones, (req, res)=>{
    logger.info('Error en login')
    res.status(401).json({message: 'Error en login', error: req.session.messages[0]})
});

router.get('/signupFailed', loggeoPeticiones, (req, res)=>{
    logger.info('Error en signup');
    res.status(401).json({message: 'Error en registro de usuario', error: req.session.messages[0]})
});


router.post('/signup', loggeoPeticiones, passport.authenticate('signup', {failureRedirect:'/api/auth/signupFailed', failureMessage: true}), (req, res)=>{
    res.json({message: 'Usuario dado de alta', user: req.user.email});    
});


router.post('/logout', loggeoPeticiones, validarLogin, function (req, res) {
    logger.info('user logout...', req.user.email)
    const user = req.user.email
    req.logOut(function(err){
        if(err){
            logger.error(`error en logout - ${err}`);
            return next(err)
        }
    });
    res.json({message: 'Logout exitoso', user:user})
});

router.get('/:id', validarLogin, validaPerfil, loggeoPeticiones, async(req, res)=>{
    const id = req.params.id;
    const usuario = await getUserById(id);
    if (usuario){
        res.json({usuario: usuario});
    }else{
        res.status(404).json({message: 'No se puede recuperar el usuario', id: id})
    }
} )

module.exports = {router};