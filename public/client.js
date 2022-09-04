const socket = io.connect();
const {schema, denormalize}=normalizr;

console.log('Cliente ok');

const author= new schema.Entity('author');
const mensaje= new schema.Entity('mensaje', {author: author}, {idAttribute: '_id'} );
const schemaMensajes= new schema.Array(mensaje);

const denormalizarDatos=(data)=>{
    console.log(data)
    const datosDenormalizados=denormalize(data.result, schemaMensajes, data.entities);
    return datosDenormalizados;
}


const formMensajes = document.getElementById('formMensajes');
const email = document.getElementById('email');
const msj = document.getElementById('mensaje');
const listaMensajes = document.getElementById('listaMensajes');
const botonEnviar = document.getElementById('enviarMensaje');
const lblUsuarioInexistente= document.getElementById('lblUsuarioInexistente');


formMensajes.addEventListener('submit', async (e)=>{
    try{    
        e.preventDefault();
        console.log('CLICK!')
        if (email.value=="" || msj.value==""){
            alert("DEBE INGRESAR UN EMAIL VALIDO Y UN MENSAJE PARA CONTINUAR")
        }else{
            const objMensaje={
                text: msj.value,
                author:{
                    id: email.value,
                },
            }
            msj.value='';
            socket.emit('nuevoMensaje', objMensaje);
        }
    }catch(err){
        console.log(err)
    }
})

let html

const renderChat= (data)=> {
    html = html + `<br>
    <p> <strong style="color: blue"> ${data.author.id} </strong><em style="fontstyle: italyc; color: green">${data.text}</em></p>`
                    //data
    //   .map((elem, index)=>{
        // return `<p style="color: brown">
                //    <strong style="color: blue"> ${elem.author.id} </strong><em style="fontstyle: italyc; color: green">${elem.text}</em>
        //   </p>`;
    //   })
    //   ; 
    listaMensajes.innerHTML = html;
    listaMensajes.scrollTop = listaMensajes.scrollHeight;
}

socket.on('respuestaMensaje', (data)=>{  
  console.log('RECIBI MENSAJE');
  console.log('mensaje', data)
  const mensajesDenormalizados= denormalizarDatos(data);
  console.log('datos denormalizados', mensajesDenormalizados)
  renderChat(data);
});

socket.on('validaUsuario', (lblUsr)=>{
    console.log(lblUsr)
    lblUsuarioInexistente.style.visibility=lblUsr
});
