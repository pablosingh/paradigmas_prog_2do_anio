// Análisis del ejercicio propuesto.
const notas = [8, 4, 7, 3, 10];

// Con valor inicial (0)
const aprobadosConInicial = notas.reduce((acum, nota) => {
  return nota >= 6 ? acum + 1 : acum;
}, 0);

console.log("Resultado con inicial:", aprobadosConInicial);

// Sin valor inicial
// Primera vuelta: acum = 8, nota = 4. Como nota < 6, acum queda en 8.
const aprobadosSinInicial = notas.reduce((acum, nota) => {
  return nota >= 6 ? acum + 1 : acum;
});

console.log("Resultado sin inicial:", aprobadosSinInicial);

// RECURSOS PARA UTILIZAR EN CLASE

const nums = [4, 1, 2, 4, 5 , 8, 7, 6, 9, 10];
// Recurso - Array de Frases

    const frases = [
    "La tecnología cambia el mundo",
    "Programar es crear soluciones",
    "Aprender haciendo es aprender mejor",
    "JavaScript es flexible y poderoso"
    ];
 
// Recurso - Strings
    const cadena =
    "En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";
 
// Recurso - Array de Números
 const listNums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 
// Repaso con estructuras de datos Simples
/* Se tiene como estructura de datos un array numerico */
// const nums = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10];
 
/* 1)  Calcular la suma de los cuadrados de los números impares.
2) Teniendo en cuenta la siguiente lista de frases, deberás encontrar la frase más larga.  
  const frases = [ "La tecnología cambia el mundo", "Programar es crear soluciones", "Aprender haciendo es aprender mejor", "JavaScript es flexible y poderoso" ];
OPERACIONES CON EL OPERADOR SPREAD
 
El operador Spread Permite “desempaquetar \ expande”  elementos de un  iterable (array, string) o  propiedades de un objeto.
 
Veamos un ejemplo muy simple: */
 
    const sumaParametros = (a, b, c) => { return a + b + c; }
    const numeros = [1, 2, 3];
    console.log("La suma de los parámetros recibidos es: " + sumaParametros(...numeros)); // 6
 
// 3) Dado el número de DNI ( 20385978 ) de una persona, se pide calcular la suma de sus números.