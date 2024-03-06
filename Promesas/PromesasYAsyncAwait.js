function ordenarProducto(producto){
    return new Promise((resolve,reject)=>{
        console.log(`Ordenando: ${producto} de YoaCosmetics`);
        setTimeout(()=>{
            if(producto === 'taza'){
                resolve('Se encontro la taza de yoa');
            }else{
                reject('Este producto no esta disponible actualmente');
            }
        },2000);
    });
};


function procesarPedido(respuesta){
    return new Promise(resolve=>{
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout(()=>{
            resolve('Gracias por tu compra, disfruta del producto')
        },4000)
    });
}

//manejo de promesas asinconicas con .then y catch

// ordenarProducto('camisa')
// .then(respuesta=>{
//     console.log('Respuesta recibida');
//     console.log(respuesta);
//     return procesarPedido(respuesta);
// })
// .then(respuestaProcesada =>{
//     console.log(respuestaProcesada);
// })
// .catch(error=>{
//     console.log(error);
// })

//manejo de promesas con el async await, podemos escribir codigo asincrono, como si fuera sincrono, respetando cada linea de codigo como la asignemos.

async function realizarPedido(producto){
    try {
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        const procesoPedido = await procesarPedido(respuesta);
        console.log(procesoPedido);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('lapiz')