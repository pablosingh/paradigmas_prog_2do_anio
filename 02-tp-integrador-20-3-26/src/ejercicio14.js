import { separador } from './index.js';

const factorial = (n) => {
  if (n > 1) return n * factorial(n - 1);
  else return n;
};

export const ejercicio14 = () => {
  separador('14');
  console.log(factorial(5));
  console.log(factorial(8));
};
