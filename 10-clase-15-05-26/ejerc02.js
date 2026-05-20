
import { Producto } from './src/producto.js';
import { ProductoConDescuento } from './src/productoConDescuento.js';
import { ProductoImportado } from './src/productoImportado.js';

export const ejerc02 = () => {
    const producto1 = new Producto('Laptop', 1000);
    const producto2 = new ProductoConDescuento('Smartphone', 800, 0.1);
    const producto3 = new ProductoImportado('Reloj', 500, 0.2);

    console.log(producto1.mostrarDetalle());
    console.log(producto2.mostrarDetalle());
    console.log(producto3.mostrarDetalle());
};