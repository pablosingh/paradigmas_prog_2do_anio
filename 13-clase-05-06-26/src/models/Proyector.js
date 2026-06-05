const EquipoTecnologico = require("./EquipoTecnologico");
class Proyector extends EquipoTecnologico {
  #lumenes
  #horasUso
  #lamparaDaniada
  constructor(codigo, disponible, lumenes, horasUso, lamparaDaniada) {
    super(codigo, disponible);
    this.#lumenes = lumenes;
    this.#horasUso = horasUso;
    this.#lamparaDaniada = lamparaDaniada;
  }
  potenciaTrabajo() {
    return this.#lumenes /100;
  }
  estaOperativo() {
    return this.estaDisponible() && !this.#lamparaDaniada;
  }
  requieremantenimiento() {
    return this.#lamparaDaniada || this.#horasUso > 600;
  }
  costoMantenimiento() {
    if(this.#lamparaDaniada) {
      return 25000;
    }
    return this.#horasUso > 600 ? 8000 : 0;
  }
  hacerMantenimiento() {
    this.#lamparaDaniada = false;
    this.#horasUso = Math.max(0, this.#horasUso - 100);
  }
  imprimirInformacion() {
    return {
      tipo: 'Equipo Proyector',
      codigo: this.obtenerCodigo(),
      lumenes: `${this.#lumenes} lumenes`,
      horasUso: `${this.#horasUso} horas`,
      disponible: this.estaDisponible(),
      lamparaDaniada: this.#lamparaDaniada
    }
  }
}
module.exports = Proyector;