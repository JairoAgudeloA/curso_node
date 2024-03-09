//objetos request y response
// ---------------------------------------------------------------------------------------------------------
// red
// const http = require('http');

// const servidor = http.createServer((req,res)=>{
//     console.log('===> req(solicitud)');
//     console.log(req.url);
//     // el metodo sirve para decir cual es el metodo de esa solicitud, por defecto es GET
//     console.log(req.method);
//     //CON REQ.HEADERS podemos ver las cabeceras de nuestra aplicación.
//     console.log(req.headers);

//     res.end('hola, mundo')
//     // console.log(req.url);
// })
// const puerto=3002;

// servidor.listen(puerto,()=>{
//     console.log(`El servidor esta escuchando en http://localhost:${puerto}...`);
// });


// ---------------------------------------------------------------------------------------------------------
//res

const http = require('http');

const servidor = http.createServer((req,res)=>{
    // console.log(res);
    // console.log(res.statusCode); //200 OK 
    // res.statusCode=404;
    //configurar la cabecera de la respuesta
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders()); //traemos los elemnetos de la cabecera del documento.

    res.end('Hola, mundo');
})

const puerto=3002;

servidor.listen(puerto,()=>{
    console.log(`El servidor se esta ejecutando en: http://localhost:${puerto}`);
})