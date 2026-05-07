
const transformarNumeros = (numeros, operacion) => numeros.map( n => operacion(n));

const transformarCadenas = (cadenas, transformadora) => cadenas.map(cad => transformadora(cad));

const contarSegun = (datos, criterio) => {
    let cantidad = 0;
    for(let i =0; i< datos.length; i++)
        criterio(datos[i]) ? cantidad++ : null ;
    return cantidad;
}

const suma = (a, b) => a+b;
const multiplicacion = (a, b) => a*b;

module.exports = { transformarNumeros, transformarCadenas, contarSegun, suma, multiplicacion };