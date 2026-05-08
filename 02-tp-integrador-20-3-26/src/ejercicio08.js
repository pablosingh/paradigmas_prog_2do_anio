import { separador } from './index.js';

import { ponerMayusculas, quitarEspaciosInternos } from './ejercicio03.js';

const quitarEspacios = (texto) => quitarEspaciosInternos(texto);

const pipe2 = (f, g) => (x) => g(f(x));

// Misma idea de componer funciones, encadenando

export const ejercicio08 = () => {
  separador('08');
  console.log("Misma idea de componer funciones, encadenando");
  const gritar = pipe2(quitarEspacios, ponerMayusculas);
  console.log(gritar('       hola mundo   '));
};
