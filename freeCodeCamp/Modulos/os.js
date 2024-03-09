//Este modulo nos permite ver la informacion del sistema operativo donde se ejecuta nuestra aplicación
const os = require("os");

//nos dice que sistema operativo tenemos
// console.log(os.type());

//Nos muestra el directorio principal
// console.log(os.homedir());

//nos muestra el tiempo que lleva la maquina en funcionamiento
// console.log(os.uptime());

//Nos muestra informacion del usuario

console.log(os.userInfo());