const { v4: uuid4 } = require('uuid');

const generaId=()=>{
    const idAsignado=uuid4();
    return idAsignado
};

const randomIndex = (min,max) =>{
    return Math.floor(Math.random() * (max - min) + min);
};

const formatDate = (date)=>{
    let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
     return formatted_date;
};

module.exports={generaId, randomIndex, formatDate}