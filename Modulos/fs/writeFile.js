//Remplaza todo el contenido del archivo que estamos modificando

const fs = require('fs');

fs.writeFile('../../index.html', 'Contenido nuevo',(err)=>{
    if(err){
        throw err;
    }
    console.log('Contenido remplazdo correctamente');
})
fs.writeFileSync('../../index.html', 'Contenido nuevo',(err)=>{
    if(err){
        throw err;
    }
    console.log('Contenido remplazdo correctamente');
})