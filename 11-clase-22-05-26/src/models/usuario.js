class Usuario {
    #password
    constructor(nombre, apellido, email, password, estado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.#password = password;
        this.estado = estado;
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
    consultarEstado = () => this.estado;
}

module.exports = { Usuario };