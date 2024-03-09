const express = require('express');

const app = express();

const routerMatematicas = require('./routers/metamaticas.js')
app.use('/api/cursos/matematicas', routerMatematicas);

const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion);


//Routers


// curso matematicas


const PUERTO = process.env.PUERTO || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor se esta ejecutando en el servidor: ${PUERTO}...`);
})
