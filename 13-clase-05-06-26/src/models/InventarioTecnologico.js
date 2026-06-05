class InventarioTecnologico {
  #equipos;
  constructor(equipos = []) {
      this.#equipos = equipos;
  }
  agregarEquipo(equipo) {
      this.#equipos.push(equipo);
  }
  potenciaTotal() {}

  cantidadOperativos() {}

  todosDisponibles() {}

  hayMantenimientoPendiente() {}

  codigosEquipos() {}

  buscarPorCodigo() {}

  costoTotalMantenimiento() {}

  realizarMantenimiento() {}
}

module.exports = InventarioTecnologico;