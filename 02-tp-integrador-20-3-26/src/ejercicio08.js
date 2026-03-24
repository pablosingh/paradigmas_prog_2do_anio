import { ponerMayusculas, quitarEspaciosInternos } from './ejercicio03.js';

const quitarEspacios = (texto) => quitarEspaciosInternos(texto);

const pipe2 = (f, g) => (x) => g(f(x));

export const ejercicio08 = () => {
  const gritar = pipe2(quitarEspacios, ponerMayusculas);
  console.log(gritar('       hola mundo   '));
};
