
// == Clase Base - Abstracta Simulada - Contrato ==

class EquipoTecnologico {

    #codigo
    #disponible

    constructor(codigo, disponible){
        if(this.constructor === EquipoTecnologico){
            throw new Error("No se puede instanciar la clase abstracta EquipoTecnologico...")
        }
        this.#codigo = codigo
        this.#disponible = disponible
    }

    // Metodos propios de la clase abstracta
    obtenerCodigo(){
        return this.#codigo;
    }

    estaDisponible(){
        return this.#disponible;
    }

    // Metodos Abstractos
    potenciaTrabajo(){
        throw new Error("El metodo potenciaTrabajo() debe ser implentado por una clase hija.")
    }

    estaOperativo(){
         throw new Error("El metodo estaOperativo() debe ser implentado por una clase hija.")       
    }

    requiereMantenimiento(){
          throw new Error("El metodo requiereMantenimiento() debe ser implentado por una clase hija.")        
    }

    costoMantenimiento(){
          throw new Error("El metodo costoMantenimiento() debe ser implentado por una clase hija.")          
    }

    hacerMantenimiento(){
          throw new Error("El metodo hacerMantenimiento() debe ser implentado por una clase hija.")          
    }

    imprimirInformacion(){
          throw new Error("El metodo imprimirInformacion() debe ser implentado por una clase hija.")         
    }
}

module.exports = EquipoTecnologico