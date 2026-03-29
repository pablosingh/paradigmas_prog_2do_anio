import { separador } from './index.js';

const algunoCumple = (datos, criterio) => {
  let bandera = false;
  for (let i = 0; i < datos.length; i++) {
    if (criterio(datos[i])) {
      bandera = true;
      return bandera;
    }
  }
  return bandera;
};

export const ej08 = () => {
  separador('08');
  const notas = [20, 31, 5, 55, 15, 99];
  console.log('Hay alguna nota menor a 100? : ' + algunoCumple(notas, (n) => n < 100));
};
