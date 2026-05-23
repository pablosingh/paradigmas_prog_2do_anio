const { Usuario } = require("./usuario");
const verificar = require('../tools/Validaciones.js');

class Estudiante extends Usuario{
    constructor(nombre, apellido, email, password, estado, verificar){
        super(nombre, apellido, email, password, estado);
        
    }
}

module.exports = { Estudiante };