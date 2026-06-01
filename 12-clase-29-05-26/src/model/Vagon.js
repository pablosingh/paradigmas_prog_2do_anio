// Clase Base - Abstracta simulada..

class Vagon {

    constructor(){
        if(this.constructor === Vagon){
            throw new Error("No se puede instanciar objetos de la clase, debe ser mediante las clases hijas!")
        }
    }

    //cantidad máxima de pasajeros, su carga máxima, peso máximo, si tiene o no baño y si se le debe o no hacer mantenimiento
    cantidadMaximaPasajeros(){
        throw new Error("El metodo cantidadMaximaPasajeros() debe ser redefinido en una clase hija!")
    }

    cargaMaxima(){
        throw new Error("El metodo cargaMaxima() debe ser redefinido en una clase hija!")
    }

    pesoMaximo(){
        throw new Error("El metodo pesoMaximo() debe ser redefinido en una clase hija!")
    }   
    
    tieneBanio(){
        throw new Error("El metodo tieneBanio() debe ser redefinido en una clase hija!")
    }

    hacerMantenimiento(){
        throw new Error("El metodo hacerMantenimiento() debe ser redefinido en una clase hija!")
    }

}

module.exports = Vagon