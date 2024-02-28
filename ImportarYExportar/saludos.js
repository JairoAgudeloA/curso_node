
function saludar(nombre){
    return `Hola, ${nombre}`;
}

function saludarHolaMundo(){
    return `Hola, Mundo`
}

//Objeto para exportar
 
module.exports = {
    saludar: saludar,
    saludarHolaMundo : saludarHolaMundo
};