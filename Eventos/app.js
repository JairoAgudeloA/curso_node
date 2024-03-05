const EventEmitters = require('events'); //iniciamos el nombre de la constante como EventEmitters en mayuscula, ya que es una clase y por convención se tiene que colocar la primera en mayuscula

const emisorProductos = new EventEmitters();

emisorProductos.on('compra', (total,numProducts,cliente)=>{
    console.log(`Total de la compra: ${total}`);
    console.log(`Total de productos ${numProducts}`);
    console.log(`Nombre del cliente: ${cliente}`);
});

emisorProductos.emit('compra', 450, 4 , 'jairo agudelo');
