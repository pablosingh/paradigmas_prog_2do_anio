console.log('Paradigmas de Programación - 2do año');

console.log('=============================================');

const calcularPrecio = (impuesto) => (descuento) => (precioItem) => precioItem * (1 + impuesto) - descuento;

// Crear funciones parciales para cada país / configuración
const precioArgentina = calcularPrecio(0.21)(0);
const precioBrasil = calcularPrecio(0.21)(10);
const precioBrasil1 = calcularPrecio(0.21)(1);
const precioBrasil2 = calcularPrecio(0.34)(10);
const precioBrasil3 = calcularPrecio(0.21)(10);

// Ejemplos de uso
console.log(precioArgentina(100)); // precio en Argentina con IVA 21%, sin descuento
console.log(precioBrasil(100)); // precio en Brasil con IVA 21%, descuento 10
console.log(precioBrasil1(100));
console.log(precioBrasil2(100));
console.log(precioBrasil3(100));
