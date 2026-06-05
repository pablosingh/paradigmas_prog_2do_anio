const EquipoTecnologico = require("./EquipoTecnologico");
class Notebook extends EquipoTecnologico {
  #ramGB
  #bateriaHoras
  #fallasReportadas
  constructor(codigo, disponible, ramGB, bateriaHoras, fallasReportadas) {
    super(codigo, disponible);
    this.#ramGB = ramGB;
    this.#bateriaHoras = bateriaHoras;
    this.#fallasReportadas = fallasReportadas;
  }
  potenciaTrabajo() {
    return this.#ramGB * 2 + this.#bateriaHoras * 5;
  }
  estaOperativo() {
    return this.estaDisponible() && this.#fallasReportadas <= 2;
  }
  requieremantenimiento() {
    return this.#fallasReportadas > 0;
  }
  costoMantenimiento() {
    return this.#fallasReportadas * 12000;
  }
  hacerMantenimiento() {
    this.#fallasReportadas = Math.max(0, this.#fallasReportadas - 1);
  }
  imprimirInformacion() {
    return {
      tipo: 'Notebook',
      codigo: this.obtenerCodigo(),
      ramGB: `${this.#ramGB}GB`,
      bateriaHora: `${this.#bateriaHoras} horas`,
      disponible: this.estaDisponible(),
      fallasReportadas: this.#fallasReportadas
    }
  }
}
module.exports = Notebook;