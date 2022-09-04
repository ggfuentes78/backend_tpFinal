const yargs = require('yargs');


//Configuracion de Yargs
const args = yargs
    .alias({
        p:'puerto',
        m:'modo',
        d: 'dao',
    })
    .describe({
        p: 'Indica el puerto de escucha del Servidor (8080 por defecto)',
        m: 'Indica el modo fork o cluster. (fork por defecto)',
        d: 'Indica el DAO para la base de productos'
    })
    .choices({
        m: ['cluster', 'fork'],
        d: ['fs', 'mongo']
    })
    .default({
        puerto:8080,
        modo:'fork',
        dao: 'mongo',
    })
    .argv;

    module.exports=args