
const { Usuario } = require("../models/usuario.js"); 
const { Administrador } = require("../models/administrador.js"); 
const { Docente } = require("../models/docente.js"); 
const { Estudiante } = require("../models/estudiante.js"); 


describe("# Pruebas de Validacion de claves #", () => {
    test("Debe cambiar la contraseña si coincide", () => {
        const u1 = new Usuario("Pablo", "Singh", "pablo@mail.com", "clave", true);
        const resultado = u1.cambiarPassword("clave", "nueva-clave");
        expect(resultado).toBe();
    });
    test("Cumple con los criterios de la contraseña", () => {
        const u1 = new Usuario("Pablo", "Singh", "pablo@mail.com", "clave", true);
        const resultado = u1.cumpleCriteriosDeValidacionDePassword();
        expect(resultado).toBe("No Cumple");
    })
})