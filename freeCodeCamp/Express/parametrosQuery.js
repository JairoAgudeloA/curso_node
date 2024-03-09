const express = require('express');

const {infoCursos} = require('./cursos.js');

const app = express();

const routerProgramacion = express.Router();
app.use('/api/cursos/programacion',routerProgramacion);


routerProgramacion.get('/',(req,res)=>{
    res.send(JSON.stringify(infoCursos.programacion));
})


routerProgramacion.get('/:lenguaje',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de: ${lenguaje}`);
    }

    if(req.query.ordenar === 'vistas'){
      return res.send(JSON.stringify(resultados.sort((a,b)=>b.vistas - a.vistas)));
    }



    res.send(JSON.stringify(resultados));

    // res.send(JSON.stringify(resultados));
})

const PUERTO =process.env.PUERTO || 3000;

app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
})