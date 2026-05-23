const { Usuario } = require("./usuario");

class Estudiante extends Usuario{
    constructor(nombre, apellido, email, password, estado){
        super(nombre, apellido, email, password, estado);
        
    }
}

module.exports = { Estudiante };