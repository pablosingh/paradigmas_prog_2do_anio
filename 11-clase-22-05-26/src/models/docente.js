const { Usuario } = require("./usuario");

class Docente extends Usuario{
    constructor(nombre, apellido, email, password, estado){
        super(nombre, apellido, email, password, estado);

    }
}
module.exports = { Docente };