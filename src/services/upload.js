const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
// const { config } = require('yargs');
const config = require('../config/index')

const storage = new GridFsStorage({
    url: config.MONGO_ATLAS_SRV,
    options: {useNewUrlParser: true, useUnifiedTopology: true},
    file: (req, file)=>{
        const match = ['image/png', 'image/jpeg'];

        if (match.indexOf(file.mimetype)=== -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: 'images',
            filename: `${Date.now()}-any-name-${file.originalname}`,
        };
    },
});

module.exports=multer({storage});

