import { separador } from './index.js';

const crearSaludo = (saludoBase) => (texto) => saludoBase + texto;

export const ejercicio11 = () => {
  separador('11');
  const saludoNombre = crearSaludo('Buenos días ');

  console.log(saludoNombre('Pablo'));
};
