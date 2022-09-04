const express =require('express');
const router = express.Router();
const {logger, loggeoPeticiones} = require('../services/logger');

router.get('/', loggeoPeticiones,  async (req, res)=>{
    res.render('mensajes')
});

module.exports = router;
