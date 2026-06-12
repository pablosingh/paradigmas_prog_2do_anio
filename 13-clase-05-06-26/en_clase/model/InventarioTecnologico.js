// == Clase contenedora ==

class InventarioTecnologico {

    #equipos

    constructor(equipos = []){
        this.#equipos = equipos;
    }

    agregarEquipo(equipo){
        this.#equipos.push(equipo);
    }


    // Requerimientos funcionales de la clase contenedora 

    potenciaTotal(){
        return this.#equipos.reduce(
            (total, equipo) => total + equipo.potenciaTrabajo()
            ,0
        )
    }

    cantidadOperativos(){
        return this.#equipos.filter(
            equipo => equipo.estaOperativo()
        ).length
    }

    todosDisponibles(){
        return this.#equipos.every(
            equipo => equipo.estaDisponible()
        )
    }

    hayMantenimientoPendiente(){
        return this.#equipos.some(
            equipo => equipo.hacerMantenimiento()
        )
    }

    codigosEquipos(){
        return this.#equipos.map(
            equipo => equipo.obtenerCodigo()
        )
    }

    buscarPorCodigo(codigo){
        const encontrado = this.#equipos.find(
            equipo => equipo.obtenerCodigo() === codigo
        );
        return (encontrado) ? encontrado.imprimirInformacion() : "No hallado"
    }

    costoTotalMantenimiento(){
        return this.#equipos.reduce(
            (total, equipo) => total + equipo.costoMantenimiento()
            ,0
        )
    }

    realizarMantenimiento(){
        this.#equipos.forEach(
            equipo => equipo.hacerMantenimiento()
        )
    }

}

module.exports = InventarioTecnologico