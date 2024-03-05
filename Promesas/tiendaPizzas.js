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

const aceptado =(valor)=>{
    console.log(valor);
}
const rechazado=(rechazo)=>{
    console.log(rechazo);
}


miPedidoPizza.then(aceptado,rechazado);