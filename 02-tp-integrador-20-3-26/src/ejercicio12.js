const crearAcumulador = (inicial) => (x) => inicial + x;

export const ejercicio12 = () => {
  const acum1 = crearAcumulador(10);
  const acum2 = crearAcumulador(20);

  console.log(acum1(5));
  console.log(acum2(10));
};
