import { separador } from './index.js';

const saludar = (nombre) => `Hola ${nombre}`;

const generarSaludo = saludar;

// En este ejercicio copiamos una funcion ciudadana en otra constante y vemos 
// como, aunque sea el mismo código esta copiado en otro lugar en memoria,
// y son dos funciones diferentes 

export const ejercicio04 = () => {
  separador('04');
  console.log("Generador de Saludos, funciones copiadas en constantes distintas");
  console.log(saludar('Pablo'));
  console.log(generarSaludo('Roberto'));
};
