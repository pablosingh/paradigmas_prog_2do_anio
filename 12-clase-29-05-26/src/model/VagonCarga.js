const Vagon = require("./Vagon")

class VagonCarga extends Vagon {

    #cargaMaximaIdeal
    #maderasSueltas

    constructor(cargaMaximaIdeal, maderasSueltas){
        super()
        this.#cargaMaximaIdeal = cargaMaximaIdeal
        this.#maderasSueltas = maderasSueltas
    }

    cantidadMaximaPasajeros(){
        return 0
    }

    cargaMaxima(){
        return this.#cargaMaximaIdeal - (400 * this.#maderasSueltas)
    }

    pesoMaximo(){
        return 1500 + this.cargaMaxima()
    }   
    
    tieneBanio(){
        return false
    }

    hacerMantenimiento(){
        this.#maderasSueltas = Math.max(0,  this.#maderasSueltas  - 2) 
    }    

}


module.exports = VagonCarga