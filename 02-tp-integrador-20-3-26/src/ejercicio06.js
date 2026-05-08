import { separador } from './index.js';

const aplicarDosVeces = (fn, x) => fn(fn(x));

// Seguimos con las func ciudadanas y de orden superior, aplicando 2 veces otra func ciudadana
// Mostrando la idea que podemos ejecutar una func las veces que quieramos

export const ejercicio06 = () => {
  separador('06');
  console.log("Seguimos con las func ciudadanas y de orden superior, aplicando 2 veces otra func ciudadana");
  console.log(aplicarDosVeces((n) => n + 5, 10));
  console.log(aplicarDosVeces((n) => n + 5, 5));
  console.log(aplicarDosVeces((texto) => texto + '!', 'Hola'));
};
