const { transformarNumeros, transformarCadenas, contarSegun, suma, multiplicacion } = require('../src/funciones.js');

describe("Sumas", () => {
    test('Suma 2 + 3 : ', () => { 
        expect(suma(2,3)).toBe(5);
    });
    test('Suma -1 + 3 : ', () => { 
        expect(suma(-1, 3)).toBe(2);
    });
});

describe("Multiplicaciones", () => {
    test('Multiplicacion 2 * 3 : ', () => { 
        expect(multiplicacion(2,3)).toBe(6);
    });
    test('Multiplicacion -1 * 3 : ', () => { 
        expect(multiplicacion(-1, 3)).toBe(-3);
    });
});

describe("Transformadoras de Numeros", () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7];
    test(`Dobles de ${numeros} `, () => { 
        expect(transformarNumeros(numeros, n => n*2)).toEqual([2, 4, 6, 8, 10, 12, 14]);
    });
    test(`Desplazar +1 de ${numeros} `, () => { 
        expect(transformarNumeros(numeros, n => n+1)).toEqual([2, 3, 4, 5, 6, 7, 8]);
    });
});

