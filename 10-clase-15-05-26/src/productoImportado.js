
import { Producto } from './producto.js';

export class ProductoImportado extends Producto{
    #impuestoImportado
    constructor(nombre, precio, impuestoImportado){
        super(nombre, precio);
        this.#impuestoImportado = impuestoImportado;
    }
    calcularPrecioFinal(){
        return super.calcularPrecioFinal() * (1 + this.#impuestoImportado);
    }
    mostrarDetalle(){
        return `Producto Importado: ${this.darNombre()} - Precio final: $${this.calcularPrecioFinal()}`;
    }
}