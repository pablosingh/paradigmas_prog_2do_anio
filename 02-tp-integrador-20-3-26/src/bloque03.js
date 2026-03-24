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

const normalizarTexto = (texto) => {
  let textoTrimeado = miTrim(texto);
  textoTrimeado = textoTrimeado.toLowerCase();
  let nuevoTexto = '';
  let repetido = false;
  for (let i = 0; i < textoTrimeado.length; i++) {
    if (i == 0) {
      nuevoTexto = nuevoTexto + textoTrimeado.charAt(0).toUpperCase();
      continue;
    }
    if (textoTrimeado[i] != ' ') {
      nuevoTexto = nuevoTexto + textoTrimeado[i];
      repetido = false;
    } else if (textoTrimeado[i] === ' ' && repetido == false) {
      repetido = true;
      nuevoTexto = nuevoTexto + textoTrimeado[i];
    } else if (repetido == true) {
      continue;
    }
  }
  console.log('Caracteres : ' + nuevoTexto.length);
  return nuevoTexto;
};

export const bloque03 = () => {
  console.log(normalizarTexto('    hola  sd   SDFSDE    a   1    '));
  console.log(normalizarTexto('    1 2 3 4    5 678   9    '));
  console.log(normalizarTexto('      a  '));
  console.log(normalizarTexto('    1234567890      '));
  console.log(normalizarTexto('    a     '));
  console.log(normalizarTexto('    JUaN   '));
  console.log(normalizarTexto('    mARIA    '));
};
