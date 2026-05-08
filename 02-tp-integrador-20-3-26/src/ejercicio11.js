import { separador } from './index.js';

const crearSaludo = (saludoBase) => (texto) => saludoBase + texto;

// Cuando una func devuelve otra func con un dato dependiente en la 1ra func
// se genera un closure, parecido a una dependencia

export const ejercicio11 = () => {
  separador('11');
  console.log("Cuando una func devuelve otra func con un dato dependiente en la 1ra func se genera un closure, parecido a una dependencia");
  const saludoNombre = crearSaludo('Buenos días ');

  console.log(saludoNombre('Pablo'));
};
