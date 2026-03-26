import { separador } from './index.js';

const saludar = (nombre) => `Hola ${nombre}`;

const generarSaludo = saludar;

export const ejercicio04 = () => {
  separador('04');
  console.log(saludar('Pablo'));
  console.log(generarSaludo('Roberto'));
};
