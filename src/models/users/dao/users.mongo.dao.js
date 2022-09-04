const {modeloUser}=require('../users');
const {logger}=require('../../../services/logger');
// const UsersDTO=require('../dto/users');

class DaoUsers{
    static instance;
    users;

    static async getInstance(){
        if(!DaoUsers.instance){
            logger.info('Inicializando DAO MongoDB de Usuarios');
            DaoUsers.instance= new DaoUsers();
        }
        return DaoUsers.instance;
    };

    async getUser(usuario){
        try{
            const user = await modeloUser.findOne({email:usuario});
            return user
        }catch(err){
            logger.error(err)
        }
    };
    
    async addUser(datosUser){
        const nuevoUser= await modeloUser.create(datosUser);
        return nuevoUser
    }
    
    async getUserById(userId){
        const user = modeloUser.findById(userId);
        return user;
    }

    async updateUserById(userId, datos){ //Actualiza datos de Usuario
        const updUser = await modeloUser.findByIdAndUpdate(userId, datos, {new: true});
        return updUser;
    };
}

module.exports=DaoUsers


