const { transformarNumeros, transformarCadenas, contarSegun } = require('./src/funciones.js');

const numeros = [3, 2, 5, 4, 6, 8];
const palabras = ["Hola ", "Javascript", "fullstack", "noDE"];

console.log(transformarNumeros(numeros, n => n + 1));
console.log(transformarCadenas(palabras, cadena => cadena.toUpperCase()));
console.log(contarSegun(numeros, n => n%2 == 0 ));
