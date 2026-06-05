
class EquipoTecnologico {
  
  #codigo;
  #disponible;
  constructor(codigo, disponible) { 
    if (this.#codigo === EquipoTecnologico) {
      throw new Error('No se puede instanciar la clase abstracta EquipoTecnologico');
    }
    this.#codigo = codigo;
    this.#disponible = disponible;
  }
  obtenerCodigo() {
    return this.#codigo;
  }
  estaDisponible() {
    return this.#disponible;
  }
  potenciaDeTrabajo() {
    
  }
}
