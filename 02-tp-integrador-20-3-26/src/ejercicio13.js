import { separador } from './index.js';



const sumarHasta = (n) => {
  if (n > 1) return n + sumarHasta(n - 1);
  else return n;
};

// Con la recursividad la funcion se llama asi misma hasya una condición de corte

export const ejercicio13 = () => {
  separador('13');
  console.log("Con la recursividad la funcion se llama asi misma hasya una condición de corte");
  console.log(sumarHasta(5));
  console.log(sumarHasta(8));
};
