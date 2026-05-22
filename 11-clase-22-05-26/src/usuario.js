class Usuario {
    constructor(nombre, apellido, email, password, estado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.estado = estado;
    }
}

module.exports = { Usuario };