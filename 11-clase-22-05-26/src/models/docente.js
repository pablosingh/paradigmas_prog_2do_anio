const { Usuario } = require("./usuario");
const verificar = require('../tools/Validaciones.js');

class Docente extends Usuario{
    constructor(nombre, apellido, email, password, estado, materia, verificar){
        super(nombre, apellido, email, password, estado);
        this.materia = materia;

    }
}
module.exports = { Docente };