//este metedo nos permite renombrar archivos de nuestros programas
const fs = require ('fs');

fs.rename('../../index.html','../../main.html',(error)=>{
    if(error){
        throw error;
    }
    console.log('Nombre cambiado exitosamente');
});

fs.renameSync('../../index.html','../../main.html',(error)=>{
    if(error){
        throw error;
    }
    console.log('Nombre cambiado exitosamente');
});