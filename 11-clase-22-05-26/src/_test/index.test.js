
const { Usuario } = require("../src/models/usuario.js"); 
const { Administrador } = require("../src/models/administrador.js"); 
const { Docente } = require("../src/models/docente.js"); 
const { Estudiante } = require("../src/models/estudiante.js"); 


describe("# Pruebas de Validacion de claves #", () => {
    test("Debe cambiar la contraseña si coincide", () => {
        const u1 = new Usuario("Pablo", "Singh", "pablo@mail.com", "clave", true);
        const resultado = u1.cambiarPassword("clave", "nueva-clave");
        expect(resultado).toBe();
    });
})