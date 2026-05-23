const { Usuario } = require("./usuario");
const verificar = require('../tools/Validaciones.js');

class Administrador extends Usuario{
    constructor(nombre, apellido, email, password, estado, nivelDeAcceso, verificar){
        super(nombre, apellido, email, password, estado);
        this.nivelDeAcceso = nivelDeAcceso;
        //  this.cumpleCriteriosDeValidacionDePassword();
    }
}

module.exports = { Administrador };