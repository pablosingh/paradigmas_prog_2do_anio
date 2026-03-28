import { separador } from './index.js';

const buscarPrimero = (datos, criterio) => {
  for (let i = 0; i < datos.length; i++) if (criterio(datos[i])) return datos[i];
  return undefined;
};

export const ej05 = () => {
  separador('05');
  const notas = [20, 31, 5, 55, 15, 99];
  console.log(buscarPrimero(notas, (dato) => dato > 55));
};
