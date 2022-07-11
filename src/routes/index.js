const express =require('express');
// const passport = require('passport');
const router = express.Router();
const routerProductos = require('./productos');
const routerPedido = require('./pedido');
const routerCarrito = require('./carrito');
const routerAuthenticate = require('./auth').router;
const validarLogin = require('../services/auth').validarLogin;
const {logger, loggeoPeticiones} = require('../services/logger')

// const validarLogin=(req, res, next)=>{
    // if (req.isAuthenticated()){
        // user=req.session.user;
        // next()
    // }else{
        // res.redirect('/login')
        // res.render('login')
    // }
// };

router.get('/', validarLogin, (request, response)=>{
    response.render('productos', productos)
    // response.json({
        // error: '-2, ruta no implementada'
    // })
})

// router.get('/login',  (req, res)=>{
    // res.render('login');
// });
// 
// router.get('/signup',   (req, res)=>{
    // res.render('signup');
// });
// 
// router.post('/login',   passport.authenticate('login', {failureRedirect:'/loginFailed'}), (req, res)=>{
    // res.redirect('/');
// });
// 
// router.get('/loginFailed',  (req, res)=>{
    // res.render('loginFailed');
// });
// 
// router.get('/signupFailed',  (req, res)=>{
    // console.log('req-fail: ', req)
    // res.render('signupFailed', );
// });
// 
// 
// router.post('/signup',  passport.authenticate('signup', {failureRedirect:'/signupFailed', failureMessage: true}), (req, res)=>{
        // res.render('login')
// });
// 
// 
// router.post('/logout',  function (req, res) {
    // console.log('user logout...', req.user.email)
    // const user = req.user.email
    // req.logOut(function(err){
        // if(err){
            // logger.error(`error en logout - ${err}`);
            // return next(err)
        // }
    // });
    // res.render('logout', {user: user})
// })

router.use('/productos', routerProductos);
router.use('/carrito', routerCarrito);
router.use('/auth', routerAuthenticate);
router.use('/pedido', routerPedido);

router.use(function(req, res, next) {
    const msg404= 'Ruta no definida'
    logger.warn(`${msg404} - Se intento acceder a la ruta ${req.url} con el metodo ${req.method}`)
    res.status(404).send(msg404)
  });

router.use(function(err, req, res, next){
    logger.error((`Algo salio mal - ${err}`))
    res.status(500).send(`Algo salio mal - ${err}`)
})


module.exports =router;