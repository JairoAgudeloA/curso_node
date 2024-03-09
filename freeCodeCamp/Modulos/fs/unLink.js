//Este metodo nos permite eliminar archivos

const fs = require('fs');

fs.unlink('main.html',(err)=>{
    if(err){
        throw err;
    }
    console.log('El archivo se elimino correctamente');
})
fs.unlinkSync('main.html',(err)=>{
    if(err){
        throw err;
    }
    console.log('El archivo se elimino correctamente');
})