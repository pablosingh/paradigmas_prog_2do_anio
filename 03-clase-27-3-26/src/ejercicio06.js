import { separador } from './index.js';

const seleccionarElementos = (datos, criterio) => {
  const resultado = [];
  for (let i = 0; i < datos.length; i++) {
    if (criterio(datos[i])) {
      resultado.push(datos[i]);
    }
  }
  return resultado;
};

const filtroPar = (n) => n % 2 === 0;
const filtroPorLetraA = (letra) => letra.includes('a');

export const ejercicio06 = () => {
  separador('06');
  const palabras = ['testing', 'backend', 'frontend', 'api'];
  const notas = [20, 31, 5, 55, 15, 99];

  console.log(seleccionarElementos(notas, filtroPar));
  console.log(seleccionarElementos(palabras, filtroPorLetraA));
};
