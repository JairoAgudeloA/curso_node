const http = require('http');
const cursos = require('./cursos.js');

// const {infoCursos} = require('./cursos.js') // sintasis de desestructuracion, para no manejar el cursos.infocursos, si no directamente el infocurso.



const servidor = http.createServer((req,res)=>{
    const {method} = req;
    // const metodo = req.method //podemos manejar el metodo(method) por medio de una constante que queramos, si le cambiamos el nombre, tambien podemos hacerlo con el path.


    switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res);
              
        case 'POST':
            return manejarSolicitudPOST(req,res);

        case 'PUT':
            return manejarSolicitudPUT(req,res);

        // case 'DELETE':
        //     return manejarSolicitudDELETE(req,res);

        default:
            res.statusCode =501;
            res.end(`El metodo no puede ser manejado por el servidor, metodo : ${method}`)
            break;
            
        
    }

});

function manejarSolicitudGET(req,res) {
    let path = req.url;

    if(path === '/'){
        res.writeHead(200,{'Content-Type': 'application/json'});

        res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y api creado con node.js')
    }else if(path === '/cursos'){
        res.statusCode =200;
        return res.end(JSON.stringify(cursos.infoCursos));
    }else if(path === '/cursos/programacion'){
        res.statusCode=200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }else if(path === '/cursos/matematicas'){
        res.statusCode=200;
        return res.end(JSON.stringify(cursos.infoCursos.matematicas));
    }
    
    res.statusCode= 404;
    res.end('el recurso solicitado no existe...')
}

function manejarSolicitudPOST(req,res){
    const path = req.url

    if(path ==='/cursos/programacion'){
        // res.statusCode = 200;

        let cuerpo ='';

        req.on('data', contenido=>{
            cuerpo += contenido.toString();
        });

        req.on('end',()=>{
            console.log(cuerpo);

            console.log(typeof cuerpo);

            //Convertir a un objeto de javaScript
            cuerpo = JSON.parse(cuerpo);
            
            console.log(typeof cuerpo);
            console.log(`id:${cuerpo.id} - ${cuerpo.titulo}, Nivel: ${cuerpo.nivel}, Lenguaje: ${cuerpo.lenguaje}`);


             return res.end('El servidor recibio una solicitud POST para /cursos/programación')
        });

        // return res.end('El servidor recibio una solicitud POST para /cursos/programación')
    }
    
    // res.statusCode =404;
    // return res.end('No se encontro el dato solicitado')

}

function manejarSolicitudPUT (req,res){
    const path = req.url;

    if(path ==='/cursos/programacion'){
        res.statusCode=200;
        return res.end('El servidor ha recibido una solicitud de PUT para actualizar los datos')
    }

    res.statusCode =404;
    return res.end('No se encontro el dato solicitado')
}

function manejarSolicitudDELETE(req,res){
    const path= req.url;

    if(path ==='/cursos/programacion'){
        res.statusCode=200;
        return res.end('El servidor esta recibiendo una solicitud de DELETE para /cursos/programacion')
    }

    
    res.statusCode =404;
    return res.end('No se encontro el dato solicitado')

}


const PUERTO=3000;

servidor.listen(PUERTO,()=>{
    console.log(`El servidor se esta ejecutando en el puerto: http://localhost:${PUERTO}`)
})