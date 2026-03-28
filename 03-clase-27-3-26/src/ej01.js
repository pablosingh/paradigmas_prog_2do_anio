import { separador } from './index.js';

const arreglo = [3, 6, 9, 15, 19, 22];

const transformarNumeros = (numeros, operacion) => {
  const nuevoArreglo = [];
  for (let i = 0; i < numeros.length; i++) nuevoArreglo.push(operacion(numeros[i]));
  return nuevoArreglo;
};

export const ej01 = () => {
  separador('01');
  console.log(transformarNumeros(arreglo, (n) => n * 2));
};
