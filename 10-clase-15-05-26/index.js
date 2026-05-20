import { Empleado } from './src/empleado.js';
import { EmpleadoComision } from './src/empleadoComision.js';
import { EmpleadoHora } from './src/empleadoHora.js';

const empleado1 = new Empleado('Juan', 1100);
const empleado2 = new EmpleadoHora('Maria', 150, 40000);
const empleado3 = new EmpleadoComision('Pedro', 880000, 200000);

console.log(empleado1.calcularSueldo());
console.log(empleado2.calcularSueldo());
console.log(empleado3.calcularSueldo());

const arregloEmpleados = [empleado1, empleado2, empleado3];

for (let i=0; i < arregloEmpleados.length; i++){
    console.log(arregloEmpleados[i].calcularSueldo());
};