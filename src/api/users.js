const UsersFactoryDAO = require('../models/users/factory/users');
const { logger }=require('../services/logger');
const args= require('../services/args');

const persistencia=args['dao'];


class UsersAPI{
    static instance;
    users;

    constructor(dao){
        this.users = dao
    }

    static async getInstance(){
        if(!this.instance){
            logger.info('Inicializando API de Usuarios');
            const dao=await UsersFactoryDAO.get(persistencia);
            UsersAPI.instance= new UsersAPI(dao);
        }
        return UsersAPI.instance;
    };

    async altaUsuario(datosUser){
        return await this.users.addUser(datosUser);
    };

    async buscarUsuario(usuario){ //Recibe en email y devuelve el objeto completo o null si no esta
            const user=await this.users.getUser(usuario);
            return user
    };

    async buscarUsuarioPorId(id){ //Recibe en id y devuelve el objeto con ese id o null si no esta
        const user=await this.users.getUserById(id);
        return user
};

    async actualizarUsuarioPorId(userId, datos){ //Actualiza datos de Usuario
        const updUser = await this.users.updateUserById(userId, datos);
        return await this.users.getUserById(userId);
    };

    async isValidPassword(password){
        return await this.users.isValidPassword(password)
    }
        
};

module.exports=UsersAPI