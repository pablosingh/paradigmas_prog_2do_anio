const { Usuario } = require("./usuario");


class Administrador extends Usuario{
    constructor(nombre, apellido, email, password, estado){
        super(nombre, apellido, email, password, estado);
        
    }
}

module.exports = { Administrador };