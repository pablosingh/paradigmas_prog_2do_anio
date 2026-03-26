import { separador } from './index.js';

const numeroAleatorio = () => {
  const numero = Math.floor(Math.random() * 101);
  console.log('Numero Aleatorio : ' + numero);
  return numero;
};

const sumarDos = (numero) => numero + 2;
const triplicar = (numero) => numero * 3;
const esPar = (numero) => numero % 2 === 0;

export const ejercicio01 = () => {
  separador('01');
  console.log('============================================');
  console.log('Suma Dos : ' + sumarDos(numeroAleatorio()));
  console.log('Suma Dos : ' + sumarDos(numeroAleatorio()));
  console.log('Suma Dos : ' + sumarDos(numeroAleatorio()));
  console.log('============================================');
  console.log('Triplica : ' + triplicar(numeroAleatorio()));
  console.log('Triplica : ' + triplicar(numeroAleatorio()));
  console.log('Triplica : ' + triplicar(numeroAleatorio()));
  console.log('============================================');
  console.log('Es Par ? : ' + esPar(numeroAleatorio()));
  console.log('Es Par ? : ' + esPar(numeroAleatorio()));
  console.log('Es Par ? : ' + esPar(numeroAleatorio()));
  console.log('============================================');
};
