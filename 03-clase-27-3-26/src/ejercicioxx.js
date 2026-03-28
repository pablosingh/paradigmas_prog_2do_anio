import { separador } from './index.js';

const crearFormateador = (prefijo, sufijo) => (texto) => prefijo + texto + sufijo;

const destacar = crearFormateador('<<', '>>');
const etiquetar = crearFormateador('[[', ']]');
const comentar = crearFormateador('//', '\\');

const transformar = (arreglo, func) => {
  const nuevoArreglo = [];
  if (typeof func === 'function')
    for (let i = 0; i < arreglo.length; i++) {
      nuevoArreglo.push(func(arreglo[i]));
      console.log('h');
    }
  return nuevoArreglo;
};

export const ejercicioxx = () => {
  separador('xx');
  const arreglo = ['Matematica', 'Algebra', 'Ingles', 'Paradigmas'];
  console.log(transformar(destacar(arreglo)));
  console.log(transformar(etiquetar(arreglo)));
  console.log(transformar(comentar(arreglo)));
};
