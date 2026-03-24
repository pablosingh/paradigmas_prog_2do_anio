const calcularPrecioConIva = (precio) => precio * 1.21;

export const ejercicio02 = () => {
  let precio = 1000;
  console.log(`Para el precio : ${precio} su valor +IVA es : ${calcularPrecioConIva(precio)}`);
  precio = 2550;
  console.log(`Para el precio : ${precio} su valor +IVA es : ${calcularPrecioConIva(precio)}`);
  precio = 9999;
  console.log(`Para el precio : ${precio} su valor +IVA es : ${calcularPrecioConIva(precio)}`);
};
