const express = require('express');

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

//esto nos permite trabajar con las solicitudes en formato json, es la importancia de los Middleware
//Esto se le conoce como middleware

/* Las funciones Middleware se ejecutan:
-Despues de  recibir una solicitud.
-Antes de enviar una respuesta.

tienen acceso al objeto de la solicitud, al objeto de la respuesta y a next(), una función que se llama para ejecutar el próximo middleware.


*/

routerProgramacion.use(express.json());

function index (parametro){
    return programacion.findIndex(curso => curso.id == parametro);
}


routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(programacion));
})

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }
  // res.send(JSON.stringify(resultados));
  res.send(resultados);

});

//filtrar por lenguaje y por nivel del curso con parametrosURL.

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontro ningún curso de ${lenguaje} de nivel ${nivel}`);
  }

  res.send(JSON.stringify(resultados));

});

routerProgramacion.post('/',(req,res)=>{
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));
});

//con put tenemos que enviar todas las propiedades del objeto, aunque solo queramos ejecutar una o cambiar una sola propiedad, tenemos que enviar todas, esa es la esencia de put, manejamos esto por medio del parametro que queremos actualizar, en este caso, por id
routerProgramacion.put('/:id',(req,res)=>{
  const cursoActualizado = req.body;
  const id =req.params.id;

    const indice = index(id);
  // const indice = programacion.findIndex(curso => curso.id == id); //nos permite encontrar el indice de un elemento en un arreglo en base a un criterio.

  if(indice >= 0){
    return programacion[indice] = cursoActualizado;
  }

  res.send(JSON.stringify(programacion));

})

//El termino de path nos ayuda a cambiar las propiedades que queremos cambiar, sin enviar las que no tocamos, esto lo hacemos por medio de pares clave - valor.
routerProgramacion.patch('/:id',(req,res)=>{
  const infoActualizada = req.body;
  const id= req.params.id;
  
   const indice = index(id);
  // const indice = programacion.findIndex(curso => curso.id == id);

  if(indice >=0){
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoActualizada);
  }

  res.send(JSON.stringify(programacion));

});

routerProgramacion.delete('/:id',(req,res)=>{
  const id = req.params.id;
  const indice = index(id);
  if(indice >= 0){
    programacion.splice(indice, 1);
  }

  res.send(JSON.stringify(programacion));

})

module.exports = routerProgramacion;

