//Provee informacion sobre el proceso de node.js que se está ejecutando

// console.log(process);

// console.log(process.env);

// console.log(process.argv);
// console.log(process.argv[2]);
// console.log(process.argv[3]);

//[node, process.js, 6, 7]

// for (let i = 2; i < process.argv.length; i++){
//     console.log(process.argv[i]);
// }

//cuanta memoria se esta usando
console.log(process.memoryUsage());