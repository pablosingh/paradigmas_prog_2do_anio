const VagonPasajero = require("../model/VagonPasajero")

describe("Primera Formacion - crear un Vagon", ()=>{

    test("Un vagón de pasajeros de 10 metros de largo por 4 metros de ancho, ordenado y con baño", ()=>{
        
        const vagon = new VagonPasajero(10,4,true, true)

        expect(vagon.cantidadMaximaPasajeros()).toBe(100)
        expect(vagon.pesoMaximo()).toBe(10300)
        expect(vagon.cargaMaxima()).toBe(300)
        expect(vagon.tieneBanio()).toBe(true)

    })

})