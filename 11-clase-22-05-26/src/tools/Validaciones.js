const fns = [
    {
        name: "Longitud minima de 8",
        fn: (passw) => passw >= passw.length
    },
    {
        name: "Sin Blanco",
        fn: (passw) => !passw.includes(" ")
    },
    {
        name: "Con caracteres especiales",
        fn: (passw) => ["#", "&", "$", "!"].some( caracter => passw.includes(caracter)) 
    },
    {
        name: "Con digitos",
        fn: passw => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].some( caracter => passw.includes(caracter))
    }
];

const verificar = (password) => fns.every( f => f.fn(password) );