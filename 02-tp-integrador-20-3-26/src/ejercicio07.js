import { separador } from './index.js';

const sumar2 = (numero) => numero + 2;
const multiplicarPor3 = (numero) => numero * 3;
const compuesto = (numero) => multiplicarPor3(sumar2(numero));

export const ejercicio07 = () => {
  separador('07');
  console.log(compuesto(4));
  console.log(compuesto(10));
  console.log(compuesto(5));
};
