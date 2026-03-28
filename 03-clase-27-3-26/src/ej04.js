import { separador } from './index.js';

const contarSegun = (datos, criterio) => {
  let contador = 0;
  for (let i = 0; i < datos.length; i++) if (criterio(datos[i])) contador++;
  return contador;
};

export const ej04 = () => {
  separador('04');
  const notas = [20, 31, 5, 55, 15, 99];
  const palabras = ['testing', 'backend', 'frontend', 'api'];
  const mayoresDe50 = contarSegun(notas, (n) => n > 50);
  console.log(mayoresDe50);
  console.log(contarSegun(palabras, (palabra) => palabra.length > 6));
};
