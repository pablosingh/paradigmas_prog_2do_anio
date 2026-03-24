const aplicarDosVeces = (fn, x) => fn(fn(x));

export const ejercicio06 = () => {
  console.log(aplicarDosVeces((n) => n + 5, 10));
  console.log(aplicarDosVeces((n) => n + 5, 5));
  console.log(aplicarDosVeces((texto) => texto + '!', 'Hola'));
};
