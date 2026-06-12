const Notebook = require("./model/Notebook")
const Proyector = require("./model/Proyector")
const InventarioTecnologico = require("./model/InventarioTecnologico")


const crearInventario = () => new InventarioTecnologico([
    new Notebook("N-01", 8, 5, true,1),
    new Notebook("N-02", 4, 3, true,3),
    new Proyector("P-01", 3000, 650, true,false),
    new Proyector("P-02", 2500, 400, false,true)
]);

const inventario = crearInventario();


console.log("== Contenido de mi inventario ==")

const mostrarInventario = {
    potenciaTotal: inventario.potenciaTotal(),
    cantidadOperativa: inventario.cantidadOperativos(),
    todosDisponibles: inventario.todosDisponibles(),
    hayMantenimientoPendiente: inventario.hayMantenimientoPendiente(),
    costoTotalMantenimiento: inventario.costoTotalMantenimiento(),
    codigosEquipos: inventario.codigosEquipos(),
    buscarPorCodigo: inventario.buscarPorCodigo("P-01")
}

console.log(mostrarInventario)

