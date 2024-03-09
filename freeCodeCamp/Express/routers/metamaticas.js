const express = require('express');

const {matematicas} = require('../datos/cursos.js').infoCursos ;


const routerMatematicas = express.Router();


routerMatematicas.use(express.json());


function index(parametro){
  return matematicas.findIndex(curso => curso.id == parametro);
}

routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(matematicas));
})

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados =matematicas.filter(curso => curso.tema === tema);
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }

  res.send(JSON.stringify(resultados));
});

routerMatematicas.post('/',(req,res)=>{
  const cursoNuevo = req.body;
  matematicas.push(cursoNuevo);
  res.send(JSON.stringify(matematicas));
});

routerMatematicas.put('/:id',(req,res)=>{
  const actualizarCurso =req.body;
  const id =req.params.id;

  const indice = index(id);

  if (indice >= 0) {
    matematicas[indice] = actualizarCurso; // Actualizamos el curso en el índice correspondiente
    res.send(JSON.stringify(matematicas));
  } else {
    res.status(404).send(`No se encontró ningún curso con el id ${id}`);
  }
});

routerMatematicas.patch('/:id',(req,res)=>{
  const actualizarDatos = req.body;
  const id =req.params.id;

  const indice = index(id);

  if(indice >=0){
    const cursoAModificar = matematicas[indice];
    Object.assign(cursoAModificar, actualizarDatos);
  }else{
    res.status(404).send(`No se encontró ningún curso con el id ${id}`);
  }
  res.send(JSON.stringify(matematicas));
});

routerMatematicas.delete('/:id',(req,res)=>{
  const id =req.params.id;
  const indice = index(id);

  if(indice>=0){
    matematicas.splice(indice,1);
    return res.json(matematicas);
  }else{
    res.status(404).send(`No se encontró ningún curso con el id ${id}`);
  }


})

module.exports = routerMatematicas
