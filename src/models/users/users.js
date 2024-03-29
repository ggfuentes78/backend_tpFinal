const mongoose= require('mongoose');
const bcrypt = require('bcrypt');
const coleccionUser='users';

const userSchema= new mongoose.Schema({
    email: {type: String, required: true, unique:true},
    carrito:{type: String, required: false},
    password: {type: String, required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    direccion: {type: String, required: true},
    edad: {type: Number, required:true},
    codPais: {type: Number, required: true},
    telefono: {type:Number, required: true},
    foto: {type: String, require: true},
    admin: {type: Boolean, default: false}
},
    {timestamps: true, versionKey:false}
);

userSchema.pre('save', async function (next) {
    const user=this;
    const hash= await bcrypt.hash(user.password, 10)
    this.password=hash;
    next();
});

userSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare
};

const modeloUser=mongoose.model(
    coleccionUser,
    userSchema
);

module.exports= { modeloUser} //, coleccionUser };
