const verificar = require('../tools/Validaciones.js');

class Usuario {

    #password
    #verificador  // Para inyectar una dependencia

    constructor(nombre, apellido, email, password, estado, verificar){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.#password = password;
        this.estado = estado;
        this.#verificador = verificar; // Espero una funcion inyectada ...
    }
    cumpleCriteriosDeValidacionDePassword() {
        if (typeof(this.#verificador) !== "function" )
            return "No se puede validar, no se inyecto una funcion!"
        return this.#verificador(this.#password) ? "Cumple" : "No Cumple"; 
    }

    mostrarInformacion(){
        const obj = {
            "Nombre" : this.nombre,
            "Apellido": this.apellido,
            "Email": this.email,
            "Estado": this.estado
        }
        console.log(obj);
    }
    
    cambiarPassword(passwActual, nuevaPassw){
        if(this.#password === passwActual){
            this.#password = nuevaPassw;
            return true;
        }else return false; 
    }

    consultarEstado = () => this.estado ? "Activo" : "Inactivo";
}

module.exports = { Usuario };