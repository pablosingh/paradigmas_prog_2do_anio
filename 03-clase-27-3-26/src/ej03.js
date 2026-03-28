import { separador } from './index.js';
export const crearFormateador = (prefijo, sufijo) => (texto) => prefijo + texto + sufijo;

export const ej03 = () => {
  separador('03');
  const generico = crearFormateador('pre - ', ' - post');
  console.log(generico('Hola Mundo'));
};
