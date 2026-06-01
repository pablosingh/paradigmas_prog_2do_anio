
// Una formacion corresponde a un Tren

class Formacion {

    // Array de vagones (estructura)
    #vagones

    constructor(vagones = []){    
        this.#vagones = vagones
    }

    agregarVagon(vagon){
        this.#vagones.push(vagon)
    }

    //1. Indicar hasta cuántos pasajeros puede llevar en total (Cantidad total de pasajeros entre todos los vagones)
    cantidadTotalPasajeros(){
        return this.#vagones.reduce(
            (total, vagon) => total + vagon.cantidadMaximaPasajeros()
            ,0
        )
    }

    //2. Indicar cuántos vagones populares tiene. Un vagón es popular si puede llevar más de 50 pasajeros.
    cantidadVagonesPopulares(){
         return this.#vagones.filter(
            vagon => vagon.cantidadMaximaPasajeros() > 50
         ).length
    }

    //3. Indicar si es una formación carguera. Una formación es carguera si todos sus vagones pueden transportar al menos 1000 kg de carga.
    esCarguera(){
        return this.#vagones.every(
            vagon => vagon.cargaMaxima() >= 1000
        )
    }

    //4. Calcular la dispersión de pesos. La dispersión se obtiene restando el peso máximo del vagón más liviano 
    // al peso máximo del vagón más pesado.
    dispersionDePesos(){
        // Trasnformamos un array de objetos (vagones) a un array con (cantidades que representan los pesos)
        // Ej.: [10300, 6080, 6300, 7120]
        const pesos = this.#vagones.map(
            vagon => vagon.pesoMaximo()
        )
        const pesoMayor = Math.max(...pesos)
        const pesoMenor = Math.min(...pesos)
        return pesoMayor - pesoMenor
    }

    //5. Indicar cuántos baños tiene la formación. Se considera que cada vagón con baño tiene un único baño.
    cantidadBanios(){
        return this.#vagones.reduce(
            (total, vagon) => vagon.tieneBanio() ? total + 1 : total
            ,0
        )
    }

    //6. Realizar mantenimiento sobre todos sus vagones.
    hacerMantenimiento(){
        this.#vagones.forEach(
            vagon => vagon.hacerMantenimiento()
        )
    }

    // 7. Indicar si está equilibrada en pasajeros. 
    // Para esto se consideran solamente los vagones que transportan pasajeros. 
    // La formación está equilibrada si la diferencia entre el vagón que más pasajeros 
    // lleva y el que menos pasajeros lleva no supera los 20 pasajeros.
    estaEquilibradaEnPasajeros(){

        // termino teniendo un nuevo array (objetos) solamente con aquellos objetos que tienen pasajeros.
        const vagonesConPasajeros = this.#vagones.filter(
            vagon => vagon.cantidadMaximaPasajeros() > 0
        )

        // control
        if(vagonesConPasajeros.length <= 1){
            return true
        }

        // termino teniendo un array (numerico) solamente con cantidades, no objetos!
        const cantidadesPasajeros = vagonesConPasajeros.map(
            vagon => vagon.cantidadMaximaPasajeros()
        )

        const mayorCantidad = Math.max(...cantidadesPasajeros)
        const menorCantidad = Math.min(...cantidadesPasajeros)

        return mayorCantidad - menorCantidad <= 20
    }

}

module.exports = Formacion