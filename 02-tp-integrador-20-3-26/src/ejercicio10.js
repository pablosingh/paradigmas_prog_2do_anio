import { separador } from './index.js';

const crearMultiplicador = (factor) => (x) => factor * x;

// Creamos una función tipo fábrica de func 

export const ejercicio10 = () => {
  separador('10');
  console.log("Creamos una función tipo fábrica de func ");
  const por2 = crearMultiplicador(2);
  const por5 = crearMultiplicador(5);

  console.log('Por 2 - func: por2(2) : ' + por2(2));
  console.log('Por 2  - func: por2(3) : ' + por2(3));
  console.log('Por 5  - func: por5(5) : ' + por5(5));
  console.log('Por 5  - func: por5(7) : ' + por5(7));
};
