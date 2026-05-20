
import { Empleado } from './empleado.js';

export class EmpleadoComision extends Empleado {
    #comision;
    constructor (nombre, sueldoBase, comision){
        super(nombre, sueldoBase);
        this.#comision = comision;
    }
    calcularSueldo(){
        return super.calcularSueldo() + this.#comision;
    };
};
