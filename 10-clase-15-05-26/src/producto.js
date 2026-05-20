
export class Producto {
    #nombre;
    #precio;
    static iva = 0.21;
    constructor (nombre, precio){
        this.#nombre = nombre;
        this.#precio = precio;
    }
    calcularPrecioFinal(){
        return this.#precio * (1 + Producto.iva);
    }
    mostrarDetalle(){
        return `Producto: ${this.#nombre} - Precio final: $${this.calcularPrecioFinal()}`;
    }
    darNombre(){
        return this.#nombre;
    }
};
