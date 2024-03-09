const promesaCumplida = false;

const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(promesaCumplida){
            resolve('¡Promesa cumplida!');
        }else{
            reject('Promesa Rechazada...');
        }
    },3000)
});

const promesaAceptada = (valor)=>{
    console.log(valor);
}

const promesaRechazada =(razonRechazo)=>{
    console.log(razonRechazo);
}


miPromesa.then(promesaAceptada,promesaRechazada);


const promesaCumplida2=true;

const promesa2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(promesaCumplida2){
            resolve('Promesa 2 cumplida');
        }else{
            reject ('Promesa 2 rechazada');
        }
    },2000);
});

const acept = (valor)=>{
    console.log(valor);
}
const rechazada = (razonRechazo)=>{
    console.log(razonRechazo);
}

promesa2.then(acept,rechazada);