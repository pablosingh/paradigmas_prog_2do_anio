const saludar = (nombre) => `Hola ${nombre}`;

const generarSaludo = saludar;

export const ejercicio04 = () => {
  console.log(saludar('Pablo'));
  console.log(generarSaludo('Roberto'));
};
