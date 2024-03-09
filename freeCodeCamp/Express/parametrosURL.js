const express = require('express');
const app = express();

const {infoCursos} = require('./cursos.js');


//ROuting conocido como Direccionamiento o enrutamiento

app.get('/',(req,res)=>{
    res.send('Mi primer servidor con express, Cursos.');
});
//Agregar rutas
app.get('/api/cursos',(req,res)=>{
    res.send(JSON.stringify(infoCursos));
});

app.get('/api/cursos/programacion',(req,res)=>{
    res.send(JSON.stringify(infoCursos.programacion));
})
app.get('/api/cursos/matematicas',(req,res)=>{
    res.send(JSON.stringify(infoCursos.matematicas));
})

//cursos de programacion
//manejar peticiones de busqueda por parametros de URL, en este caso el :lenguaje.
app.get('/api/cursos/programacion/:lenguaje',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje );
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    // res.send(JSON.stringify(resultados));
    res.send(resultados);

});

//filtrar por lenguaje y por nivel del curso con parametrosURL.

app.get('/api/cursos/programacion/:lenguaje/:nivel',(req,res)=>{
    const lenguaje =req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontro ningún curso de ${lenguaje} de nivel ${nivel}`);
    }

    res.send(JSON.stringify(resultados));


})



// curso matematicas

app.get('/api/cursos/matematicas/:tema',(req,res)=>{
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }

    res.send(JSON.stringify(resultados));
})




// si tenemos una variable que defina el puerto, o si no la tenemos toma como referencia el puerto 3000

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
})
