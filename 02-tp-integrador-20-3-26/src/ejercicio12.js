import { separador } from './index.js';

const crearAcumulador = (inicial) => (x) => inicial + x;

// Siguiendo con el closure, esa tipo de dependecia la usamos como un estado interno

export const ejercicio12 = () => {
  separador('12');
  console.log("Siguiendo con el closure, esa tipo de dependecia la usamos como un estado interno");
  const acum1 = crearAcumulador(10);
  const acum2 = crearAcumulador(20);

  console.log(acum1(5));
  console.log(acum2(10));
};
