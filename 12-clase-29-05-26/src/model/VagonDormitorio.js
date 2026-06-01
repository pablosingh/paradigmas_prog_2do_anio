const Vagon = require("./Vagon")

class VagonDormitorio extends Vagon {

    #cantidadCompartimento
    #camasPorCompartimento

    constructor(cantidadCompartimento,camasPorCompartimento){
        super()
        this.#cantidadCompartimento = cantidadCompartimento
        this.#camasPorCompartimento = camasPorCompartimento
    }

    cantidadMaximaPasajeros(){
        return this.#cantidadCompartimento * this.#camasPorCompartimento
    }

    cargaMaxima(){
        return 1200
    }

    pesoMaximo(){
        return 4000 + ( 80 * this.cantidadMaximaPasajeros() ) + this.cargaMaxima()
    }   
    
    tieneBanio(){
        return true
    }

    hacerMantenimiento(){
        // Para este modelo no hace falta retornar algun valor especifico.
    }    

}


module.exports = VagonDormitorio