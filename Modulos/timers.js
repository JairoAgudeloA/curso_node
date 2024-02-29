//Nos ayuda a ejecutar codigo luego de un cierto periodo de tiempo


//funciones útiles

//Esta funcion sirve para ejecutar codigo luego de cierta cantidad de milisegundos
// setTimeout()

// function sumar(a,b){
//     console.log(a+b);
// }

// setTimeout(sumar,2000,5,6);
    //   function,tiempo,argumentos(6 y 7)


//Para ejecutar código asíncrono en la próxima iteración del ciclo de eventos (Lo más pronto posible), se ejecuta despues del código síncrono,  es decir, el codigo sincrono tiene la prioridad, despues que se ejecuta, inmediatamente se ejecuta esta función

// setImmediate()

// function mostrarTema(tema){
//     console.log(`Estoy aprendiendo, ${tema}`);
// }

// console.log('Antes de setImmediate()');

// setImmediate(mostrarTema,'Node.js');

// console.log('Despues de setImmediate()');


//se utiliza para ejecutar código un número de veces infinito, con un retraso de milisegundos
// setInterval()

function helloWord(nombre){
    console.log(`Hello, Word ${nombre}`);
}
function suma(a,b){
    console.log(a+b);
}

setInterval(suma,2000,7,1);
// setInterval(helloWord, 1500, 'jairo');

