import { separador } from './index.js';

const sumar10 = (numero) => numero + 10;
const duplicar = (numero) => numero * 2;
const esMayorA30 = (numero) => numero > 30;

const pipe3 = (f, g, h) => (x) => h(f(g(x)));

export const ejercicio09 = () => {
  separador('09');
  const revisar = pipe3(sumar10, duplicar, esMayorA30);
  console.log(revisar(4));
  console.log(revisar(6));
  console.log(revisar(11));
};
