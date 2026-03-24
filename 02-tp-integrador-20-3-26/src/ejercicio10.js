const crearMultiplicador = (factor) => (x) => factor * x;

export const ejercicio10 = () => {
  const por2 = crearMultiplicador(2);
  const por5 = crearMultiplicador(5);

  console.log('Por 2 : ' + por2(2));
  console.log('Por 2 : ' + por2(3));
  console.log('Por 5 : ' + por5(5));
  console.log('Por 5 : ' + por5(7));
};
