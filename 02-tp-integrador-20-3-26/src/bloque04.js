const saludar = (nombre) => `Hola ${nombre}`;

const generarSaludo = saludar;

export const bloque04 = () => {
  console.log(saludar('Pablo'));
  console.log(generarSaludo('Roberto'));
};
