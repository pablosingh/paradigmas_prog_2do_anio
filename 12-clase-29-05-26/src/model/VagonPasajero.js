const Vagon = require("./Vagon")

class VagonPasajero extends Vagon {

    #largo
    #ancho
    #conBanio
    #ordenado    

    constructor(largo, ancho, conBanio, ordenado){
        super()
        this.#largo = largo
        this.#ancho = ancho
        this.#conBanio = conBanio
        this.#ordenado = ordenado
    }


    // Reglas de capacidad de pasajeros: 
    // si el ancho es hasta 3 metros, entran 8 pasajeros por cada metro de largo; 
    // si el ancho es mayor a 3 metros, entran 10 pasajeros por cada metro de largo; 
    // si el vagón no está ordenado, se deben restar 15 pasajeros a la capacidad calculada.     
    cantidadMaximaPasajeros(){
        let pasajerosPorMetro = this.#ancho <= 3 ? 8 : 10
        let cantidad = pasajerosPorMetro * this.#largo
        if( ! this.#ordenado ) cantidad-=15      
        return cantidad 
    }

    // Reglas de carga y peso máximo:
    // · si tiene baño, puede llevar hasta 300 kg de carga;
    // · si no tiene baño, puede llevar hasta 800 kg de carga;    
    cargaMaxima(){
        return this.#conBanio ? 300 : 800
    }

    // · su peso máximo es: 2000 kg + 80 kg por la cantidad máxima de pasajeros + carga máxima.
    pesoMaximo(){
        return 2000 + ( 80 * this.cantidadMaximaPasajeros() ) + this.cargaMaxima()
    }   
    
    tieneBanio(){
        return this.#conBanio
    }

    hacerMantenimiento(){
        this.#ordenado = true
    }

}


module.exports = VagonPasajero