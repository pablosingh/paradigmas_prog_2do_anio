import { separador } from './index.js';

const crearEscalador = (factor) => (x) => factor * x;
const sumar8 = (x) => x + 8;
const esMayorA40 = (x) => x > 40;

export const ejercicio16 = () => {
  separador('16');
  const escalar = crearEscalador(4);
  const pipe3 = (f, g, h) => (x) => f(g(h(x)));
  const revisar = pipe3(esMayorA40, sumar8, escalar);
  console.log(revisar(5));
  console.log(revisar(10));
  console.log(revisar(20));
};
