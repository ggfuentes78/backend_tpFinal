const express = require('express');
const router = express.Router();
const session = require('express-session');
const {logger, loggeoPeticiones}=require('../services/logger');
const {validarLogin, validaPerfil}=require('../controllers/auth');
const upload = require('../services/upload');
const { GridFsStorage } = require('multer-gridfs-storage');
const { buscarImagenPorId, buscarImagenPorFile } = require('../controllers/images');
const mongodb=require('mongodb')
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

let gfs;
// 
// 
const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("images");
});


router.post('/upload', loggeoPeticiones, upload.single('file'), (req, res)=>{ //permite subir una imagen a un producto
    if (req.file === undefined) return res.status(500).json({message:'Debe seleccionar un archivo'})
    const imgUrl = req.file.filename;
    return res.send(imgUrl);
});

router.get('/:id', loggeoPeticiones, async (req, res)=>{ //permite acceder a una imagen
    try{
        const id= req.params.id
        const readStream= buscarImagenPorId(id);
        readStream.pipe(res);
    }catch(error){
        res.status(500).json({message:'Error al acceder a al archivo', error: error})
    }
});



router.get('/file/:filename', loggeoPeticiones, async (req, res)=>{ //permite acceder a una imagen
    try{
        const filename= req.params.filename
        console.log('filename', filename)
        const readStream= await buscarImagenPorFile(filename);
        readStream.pipe(res);
    }catch(error){
        res.status(500).json({message:'Error al acceder a al archivo', error: error})
    }
});

router.delete('/:id', loggeoPeticiones, (req, res)=>{ //permite borrar una imagen

});

module.exports=router;
