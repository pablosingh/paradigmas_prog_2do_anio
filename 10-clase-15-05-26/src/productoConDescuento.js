
import { Producto } from './producto.js';

export class ProductoConDescuento extends Producto {
    #descuento;
    constructor(nombre, precio, descuento){
        super(nombre, precio);
        this.#descuento = descuento;
    }
    calcularPrecioFinal(){
        return super.calcularPrecioFinal() * (1 - this.#descuento);
    }
    mostrarDetalle(){
        return `Producto con Descuento: ${this.darNombre()} - Precio final: $${this.calcularPrecioFinal()}`;
    }
}