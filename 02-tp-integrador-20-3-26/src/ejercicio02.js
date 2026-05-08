import { separador } from './index.js';
const calcularPrecioConIva = (precio) => precio * 1.21;

export const ejercicio02 = () => {
  separador('02');
  console.log("Funciones para agregar IVA");
  // Son funciones puras para transformar un numero, en este caso precios y se agrega el IVA.
  let precio = 1000;
  console.log(`Para el precio : ${precio} su valor +IVA es : ${calcularPrecioConIva(precio)}`);
  precio = 2550;
  console.log(`Para el precio : ${precio} su valor +IVA es : ${calcularPrecioConIva(precio)}`);
  precio = 9999;
  console.log(`Para el precio : ${precio} su valor +IVA es : ${calcularPrecioConIva(precio)}`);
};
