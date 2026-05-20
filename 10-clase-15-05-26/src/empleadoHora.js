
import { Empleado } from './empleado.js';

export class EmpleadoHora extends Empleado {
    #horasTrabajadas;
    constructor (nombre, sueldoBase, horasTrabajadas){
        super(nombre, sueldoBase);
        this.#horasTrabajadas = horasTrabajadas;
    }
    calcularSueldo(){
        return super.calcularSueldo() * this.#horasTrabajadas;
    };
};
