//COn este metodo podemos agregar informacion adicional al final de un archivo
const fs = require('fs');

fs.appendFile('../../index.html', '<p>Hola soy jairo</p>', (err)=>{
    if(err){
        throw err;
    }
    console.log('Se ha agregado correctamente al archivo');
});

//Para trabajar con loos archivos sincronos, debemos poner en el nombre del metodo el Sync

fs.appendFileSync('../../index.html', '<p>Hola soy jairo</p>', (err)=>{
    if(err){
        throw err;
    }
    console.log('Se ha agregado correctamente al archivo');
});
