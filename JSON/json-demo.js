let infoCurso = {
    "titulo":"Aprende node.js",
    "numVistas": 455654,
    "numLikes": 211123,
    "temas":[
        "javaScript",
        "node.js"
    ],
    "esPublico":true

};

//pasar de un objeto de js a JSON
//Cadena de caracteres en formato json

let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

//pasar de un formato JSON a un objeto de JS

let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);