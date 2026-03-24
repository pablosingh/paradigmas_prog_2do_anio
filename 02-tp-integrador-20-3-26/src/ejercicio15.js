const potencia = (base, exponente) => {
  if (exponente > 1) return base * potencia(base, exponente - 1);
  else return base;
};

export const ejercicio15 = () => {
  console.log(potencia(2, 5));
  console.log(potencia(2, 10));
};
