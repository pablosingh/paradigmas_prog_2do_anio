import { separador } from './index.js';

const factorial = (n) => {
  if (n > 1) return n * factorial(n - 1);
  else return n;
};

// Igual al anterior la funcion se llama asi misma hasya una condición de corte, ahora con factorial

export const ejercicio14 = () => {
  separador('14');
  console.log("Igual al anterior la funcion se llama asi misma hasya una condición de corte, ahora con factorial");
  console.log(factorial(5));
  console.log(factorial(8));
};
