const Notebook = require("../model/Notebook")
const Proyector = require("../model/Proyector")
const InventarioTecnologico = require("../model/InventarioTecnologico")


describe("Prueba del inventario tecnologico", ()=>{

    const crearInventario = () => new InventarioTecnologico([
        new Notebook("N-01", 8, 5, true,1),
        new Notebook("N-02", 4, 3, true,3),
        new Proyector("P-01", 3000, 650, true,false),
        new Proyector("P-02", 2500, 400, false,true)
    ]);


    test("Prueba de todos los metodos" , ()=>{

        const inventario = crearInventario();

        expect(inventario.potenciaTotal()).toBe(119)
        expect(inventario.cantidadOperativos()).toBe(2)
        
    })

})