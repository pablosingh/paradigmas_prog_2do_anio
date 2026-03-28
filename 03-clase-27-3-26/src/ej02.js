import { normalizarTexto } from '../../02-tp-integrador-20-3-26/src/ejercicio03.js';
import { separador } from './index.js';

const transformarCadenas = (cadenas, transformadora) => {
  const nuevoArreglo = [];
  for (let i = 0; i < cadenas.length; i++) nuevoArreglo.push(transformadora(cadenas[i]));
  return nuevoArreglo;
};
export const ej02 = () => {
  separador('02');
  const palabras = ['   testing    ', ' backend    ', 'fr on te nd    ', '    api'];
  console.log(transformarCadenas(palabras, normalizarTexto));
};
