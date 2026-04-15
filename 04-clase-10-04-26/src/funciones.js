
const transformarNumeros = (numeros, operacion) => numeros.map( n => operacion(n));

const transformarCadenas = (cadenas, transformadora) => cadenas.map(cad => transformadora(cad));

const contarSegun = (datos, criterio) => {
    let cantidad = 0;
    for(let i =0; i< datos.length; i++)
        criterio(datos[i]) ? cantidad++ : null ;
    return cantidad;
}

module.exports = { transformarNumeros, transformarCadenas, contarSegun };