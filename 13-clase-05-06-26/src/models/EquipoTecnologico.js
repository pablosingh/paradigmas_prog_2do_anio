
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
  potenciaTrabajo() {
    throw new Error('El método potenciaTrabajo() debe ser implementado por las subclases');
  }
  estaOperativo() {
    throw new Error('El método estaOperativo() debe ser implementado por las subclases');
  }
  costoMantenimiento() {
    throw new Error('El método costoMantenimiento() debe ser implementado por las subclases');
  }
  hacerMantenimiento() {
    throw new Error('El método hacerMantenimiento() debe ser implementado por las subclases');
  }
  imprimirInformacion() {
    throw new Error('El método imprimirInformacion() debe ser implementado por las subclases');
  }
}

module.exports = EquipoTecnologico;