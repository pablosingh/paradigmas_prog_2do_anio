import { separador } from './index.js';

const todosCumplen = (datos, criterio) => {
  let bandera = true;
  for (let i = 0; i < datos.length; i++) {
    if (!criterio(datos[i])) {
      bandera = false;
      return bandera;
    }
  }
  return bandera;
};

// const todosCumplen2 = (datos, criterio) => {
//   for (let i = 0; i < datos.length; i++) {

// };

export const ej07 = () => {
  separador('07');
  const notas = [20, 31, 5, 55, 15, 99];
  console.log('Son Todas las notas menores a 100? : ' + todosCumplen(notas, (n) => n < 1000));
};
