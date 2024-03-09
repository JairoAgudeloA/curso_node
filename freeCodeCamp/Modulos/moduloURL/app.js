const miURL = new URL('https://ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(miURL.hostname); // ejemplo.org

console.log(miURL.pathname); //cursos/programacion

//parametros de busqueda para buscar querys
console.log(miURL.searchParams); //URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }

//como entrar a alguno de ellos.

console.log(miURL.searchParams.get('ordenar')); //vistas

console.log(miURL.searchParams.get('nivel'));//1