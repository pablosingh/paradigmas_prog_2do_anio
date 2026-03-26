import { separador } from './index.js';

const sumarHasta = (n) => {
  if (n > 1) return n + sumarHasta(n - 1);
  else return n;
};

export const ejercicio13 = () => {
  separador('13');
  console.log(sumarHasta(5));
  console.log(sumarHasta(8));
};
