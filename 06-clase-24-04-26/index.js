// OBJETOS Y ARRAYS DE OBJETOS EN JAVA SCRIPT
//_______________________________________________ 1 _______________________________________________
// const persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 30
// }

// console.log(persona);
// console.log("Edad de la persona: " + persona.edad);
// persona.edad = 45
// console.log("Edad de la persona: " + persona["edad"]);

//_______________________________________________ 2 _______________________________________________

// Obtener del array de numeros el minimo y el maximo de la lista en una sola pasada, retornando un objeto {min, max}

// const nums = [4, 1, 2, 4, 5 , 8, 7, 6, 9, 10];

// const resultado = nums.reduce(
//     (acc, n)=>{
//         console.log("--------------------------------------------------");
//         console.log("Se analiza el numero:", n);
//         console.log("Estado anterior del acumulador:", acc);
        
//         if(n < acc.min) acc.min = n;
//         if(n > acc.max) acc.max = n;
//         return acc
//     }, {min: Infinity, max:-Infinity}
// );

// console.log("El resultado del calculo maximo y minimo es: .....");
// console.log(resultado);

//_______________________________________________ 3 _______________________________________________

// Nos piden contar la cantidad de ocurrencias que hay en una lista de frutas.
// const arr = ["pera", "manzana", "pera", "uva"]

// const ocurrencias = arr.reduce(
//     (acc, v)=>{
//         acc[v] = (acc[v] || 0) + 1;   // si (undefined || 0) + 1
//         return acc;
//     },{}       // objeto vacio!
// )
// console.log(ocurrencias);


// Salida esperada:
// {
//     "pera": 2,
//     "manzana": 1,
//     "uava": 1
// }


//_______________________________________________ 4 _______________________________________________

// Dado un texto se pide contar las palabras que aparecen en el texto.
// const cadena = "En la educación, el docente propone un proyecto breve: con tecnología y datos, " 
//                + "las estudiantes y los estudiantes analizan un problema real. El docente guía "
//                + "la práctica, revisan el código, miden resultados y discuten una evaluación formativa. "
//                + "El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, "
//                + "el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";

// const palabras = cadena.split(/\s+/)

// const contarPalabras = palabras.reduce(
//     (acc,v)=>{
//         acc[v]=(acc[v] || 0)+1;
//         return acc;

//     },{}
// )

// console.log(contarPalabras)


//_______________________________________________ 5 _______________________________________________
// Dada un lista de numeros separar por un lado los numeros pares y por otro los numeros impares en
// una sola pasada.
// const listNums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// const sepNums = listNums.reduce(
//     (acc, n)=>{
//         //!(n%2) ? acc.pares.push(n) : acc.impares.push(n);
//         ((n % 2 === 0) ? acc.pares : acc.impares).push(n);
//         return acc;
//     }, {  pares:[], impares:[] }
// )

// // console.log(sepNums)
// console.log(sepNums.impares)


//_______________________________________________ 6 _______________________________________________
// Contar la cantidad discriminando por caracteres que tiene el texto.

const texto = "En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes "
              + " y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, "
              + "miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, "
              + "mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y "
              + "la tecnología potencia la práctica y la evaluación";

// Opcion 1 (la preferida!)
// const sumarCaracter = [...texto].reduce(
//     (acc, v) => {
//         acc[v] = (acc[v] || 0) + 1;
//         return acc;
//     }, {}
// )
// console.log(sumarCaracter)

// Opcion 2
// const caracteres = texto.toLowerCase().replaceAll(" ", "").split("").reduce ((acc, caracter) => {
//     acc[caracter] = (acc[caracter] || 0) + 1;
//     return acc;
//     }, {}
// );
// console.log(caracteres);

// Opcion 3
// const es=[...texto]
// const pala = es.reduce(
//     (acc,v)=>{
//         acc[v]=(acc[v] || 0)+1;
//         return acc;

//     },{}
// )

//_______________________________________________ 7 _______________________________________________

/* 


=== CONCEPTO DESESTRUCTURACION ===


*/


// const producto = {
//     descripcion: "Teclado",
//     precio: 25000,
//     stock: 8
// }

// const { descripcion, precio, stock } = producto;    // analogia const precio = producto.precio

// console.log(descripcion)
// console.log(precio)
// console.log(stock)

// // Enunciado: me piden obtener los totales por categoria.
// const productos = [
//     { c: "libro" , p: 100},
//     { c: "juguetes" , p: 200},
//     { c: "libro" , p: 50},
// ] 

// // foma normal
// const resul = productos.reduce(
//     (acc, e)=>{
//         acc[e.c] = (acc[e.c] || 0) + e.p;
//         return acc;
//     }, {}
// )
// console.log(resul)

// // forma desestructurada
// const resul2 = productos.reduce(
//     (acc, {c,p})=>{
//         acc[c] = (acc[c] || 0) + p;
//         return acc;
//     }, {}
// )
// console.log(resul2)


//_______________________________________________ 8 _______________________________________________
// Data una lista de notas {curso, nota}, devolver {curso: promedio} sin recorrer dos veces 
// (acumula sumas y conteos y conteos en el mismo reduce)

// const Lista = [
//     {c: "A", n:8},
//     {c: "B", n:6},
//     {c: "A", n:10}
// ]

// const notas = Lista.reduce(
//     (acc, {c,n} )=>{
//         // condicion 
//         if (! acc[c]) acc[c] = { sum: 0, count:0, promedio:0 }
//         //operaciones
//         acc[c].sum += n;
//         acc[c].count +=1;
//         acc[c].promedio = acc[c].sum / acc[c].count;
//         // retorno el objeto
//         return acc;
//     }, {}

// )
// console.log(notas)

//_______________________________________________ 9 _______________________________________________

const registroPersona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    genero: "masculido",
    estadoCivil: "soltero",
    direccion: {
        calle: "Leandro N. Alem",
        ciudad: "Jose C. Paz",
        pais: "Argentina"
    },
    hobbies: ["futbol", "programacion", "leer"],
    fn: (s) => console.log(`Hola, mi nombre es ${s}`)
}

console.log(
    {
        "DATOS DEL GENERO": registroPersona.genero,
        "DATOS DE LA CIUDAD":registroPersona.direccion.ciudad,
        "DATOS DE ACTIVIDAD": registroPersona.hobbies[1]
    }
)

registroPersona.fn("Leandro")