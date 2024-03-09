const estatusPedido =()=>{
    return Math.random() < 0.8;
}

const miPedidoPizza = new Promise((resolve,reject)=>{
    setTimeout(()=>{   
    if(estatusPedido()){
        resolve('El pedido es realizado con exito');
    }else{
        reject('El pedido fue rechazado');
    }
    },2000);
});

// const aceptado =(valor)=>{
//     console.log(valor);
// }
// const rechazado=(rechazo)=>{
//     console.log(rechazo);
// }


// miPedidoPizza.then(aceptado,rechazado);

// miPedidoPizza
// .then((pedidoAceptado)=>{
//     console.log(pedidoAceptado);
// })
// .then(null,(mensajeError)=>{
//     console.log(mensajeError);
// })

//trabajar con catch con method chaining

    miPedidoPizza
.then((mensajeExito)=>{
    console.log(mensajeExito);
})
.catch((error)=>{
    console.log(error);
})  



//trabajar con catch y con variables al mismo tiempo, se utiliza para logicas mas extensas

const aceptado =(valor)=>{
    console.log(valor);
}
const rechazado=(rechazo)=>{
    console.log(rechazo);
}

miPedidoPizza.then(aceptado).catch(rechazado);