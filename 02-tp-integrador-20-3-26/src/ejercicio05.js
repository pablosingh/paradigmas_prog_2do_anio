const duplicar = (numero) => numero * 2;
const numeroMas100Por3 = (n) => (n + 100) * 3;
const mayorA100 = (numero) => numero > 100;

const aplicar = (fn, x) => fn(x);

export const ejercicio05 = () => {
  console.log(aplicar(duplicar, 2));
  console.log(aplicar(numeroMas100Por3, 100));
  console.log(aplicar(mayorA100, 101));
  console.log(aplicar(mayorA100, 100));
};
