const http = require('http');

const servidor=http.createServer((req,res)=>{

    res.end('Estoy aprendiendo node.js');

})

const puerto=3000;

servidor.listen(puerto,()=>{
    console.log(`El servidor se inicio en: http://localhost:${puerto}`);
});