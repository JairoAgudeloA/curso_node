const http = require('http');

const servidor = http.createServer((req,res)=>{
    //proceso de solicitud
    res.end('Respuesta del servidor, en este caso un "Hola, mundo"');
});

const puerto=3000;

servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en http://localhost:${puerto}`);
});