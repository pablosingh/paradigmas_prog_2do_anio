import { separador } from './index.js';

const duplicar = (numero) => numero * 2;
const numeroMas100Por3 = (n) => (n + 100) * 3;
const mayorA100 = (numero) => numero > 100;

// Las 3 funciones de arriba son las ciudadanas que se pasan a otra 
// función de orden superior aplicar()
const aplicar = (fn, x) => fn(x);

export const ejercicio05 = () => {
  separador('05');
  console.log("Pasando func ciudadanas como argumento de func de orden superior");
  console.log(aplicar(duplicar, 2));
  console.log(aplicar(numeroMas100Por3, 100));
  console.log(aplicar(mayorA100, 101));
  console.log(aplicar(mayorA100, 100));
};
