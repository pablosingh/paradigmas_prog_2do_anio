const miTrim = (texto) => {
  let nuevoTexto = '';
  let paraRetorno = '';
  let bandera = false;
  for (let i = 0; i < texto.length; i++) {
    if (bandera) nuevoTexto = nuevoTexto + texto[i];
    else if (texto[i] === ' ' && !bandera) continue;
    else if (texto[i] != ' ' && !bandera) {
      nuevoTexto = nuevoTexto + texto[i];
      bandera = true;
    }
  }
  bandera = false;
  for (let i = nuevoTexto.length - 1; i >= 0; i--) {
    if (nuevoTexto[i] === ' ' && !bandera) continue;
    else if (nuevoTexto[i] != ' ' && !bandera) {
      paraRetorno = nuevoTexto[i] + paraRetorno;
      bandera = true;
    } else if (bandera) paraRetorno = nuevoTexto[i] + paraRetorno;
  }
  return paraRetorno;
};

export const ponerMayusculas = (texto) => {
  if (typeof texto === 'string') return texto.charAt(0).toUpperCase() + texto.slice(1);
  else return texto;
};

export const quitarEspaciosInternos = (texto) => {
  let nuevoTexto = '';
  let repetido = false;
  if (typeof texto === 'string') {
    for (let i = 0; i < texto.length; i++) {
      // if (i == 0) {
      //   nuevoTexto = nuevoTexto + texto.charAt(0).toUpperCase();
      //   continue;
      // }
      if (texto[i] != ' ') {
        nuevoTexto = nuevoTexto + texto[i];
        repetido = false;
      } else if (texto[i] === ' ' && repetido == false) {
        repetido = true;
        nuevoTexto = nuevoTexto + texto[i];
      } else if (repetido == true) {
        continue;
      }
    }
    return nuevoTexto;
  } else return texto;
};

export const normalizarTexto = (texto) => {
  let textoTrimeado = miTrim(texto);
  textoTrimeado = textoTrimeado.toLowerCase();
  textoTrimeado = ponerMayusculas(textoTrimeado);
  textoTrimeado = quitarEspaciosInternos(textoTrimeado);

  console.log('Caracteres : ' + textoTrimeado.length);
  return textoTrimeado;
};

export const ejercicio03 = () => {
  console.log(normalizarTexto('    hola  sd   SDFSDE    a   1    '));
  console.log(normalizarTexto('    1 2 3 4    5 678   9    '));
  console.log(normalizarTexto('      a  '));
  console.log(normalizarTexto('    1234567890      '));
  console.log(normalizarTexto('    a     '));
  console.log(normalizarTexto('    JUaN   '));
  console.log(normalizarTexto('    mARIA    '));
};
