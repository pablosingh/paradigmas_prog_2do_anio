// const total = numeros.reduce( (acum, n)=> acum + n );
// console.log(total);

// Ej2
const notas = [8, 4, 7, 3, 10]

// Con valor inicial (0)
const aprobadosConInicial = notas.reduce( (acum, nota) => {
  return nota >= 6 ? acum + 1 : acum;
}, 0);
console.log(aprobadosConInicial);

// Sin valor inicial ()
const aprobadosSinInicial = notas.reduce( (acum, nota) => {
  return nota >= 6 ? acum + 1 : acum;
});
console.log(aprobadosSinInicial);