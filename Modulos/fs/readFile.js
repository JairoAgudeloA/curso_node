//fileSystem

//Módulo muy importante que contiene funcionalidad muy util para trabajar con el sistema de archivos, todos los modulos de este archivo son asíncronicos por defecto

//nota tambien podemos escoger que metodos queremos que sean síncronicos con el comando Sync a sus nombres
//Ejemplo fs.renameSync()

// //operaciones utiles
// leer archivo
// modificar archivo
// copiar archivo
// eliminar archivo
// cambiar nombre de archivo

const fs = require('fs');


// Leer el condicional de forma normal
// fs.readFile('../index.html', 'utf-8', (err, contenido)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(contenido);
//     }

// });

// Si utilizamos throw, esta propiedad nos permitira detener la aplicación en el momento que se detecte un error en la ejecución del programa

fs.readFile('../../index.html', 'utf-8', (err,contenido)=>{
    if(err){
        throw err;
    }
    console.log(contenido);
});