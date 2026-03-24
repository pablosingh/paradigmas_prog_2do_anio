const factorial = (n) => {
  if (n > 1) return n * factorial(n - 1);
  else return n;
};

export const ejercicio14 = () => {
  console.log(factorial(5));
  console.log(factorial(8));
};
