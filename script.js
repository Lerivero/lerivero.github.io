const entrada = document.querySelector(".entrada-texto");
const mensaje = document.querySelector(".mensaje");

/* 
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

// FUNCION PARA ENCRIPTAR

function botonEncriptar() {
  const textoEncriptado = encriptar(entrada.value);
  mensaje.value = textoEncriptado;
  //mensaje.style.backgroundImage = "none";
  entrada.value = "";
  //btnCopy.style.display = "block";
}

function encriptar(stringEncriptada) {
  let matrizLlaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizLlaves.length; i++) {
    if (stringEncriptada.includes(matrizLlaves[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizLlaves[i][0],
        matrizLlaves[i][1]
      );
    }
  }

  return stringEncriptada;
}

// FUNCION PARA DESENCRIPTAR

function botonDesencriptar() {
  const textoDesencriptado = desencriptar(entrada.value);
  mensaje.value = textoDesencriptado;
  //mensaje.style.backgroundImage = "none";
  entrada.value = "";
  //btnCopy.style.display = "block";
}

function desencriptar(stringDesencriptada) {
  let matrizLlaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizLlaves.length; i++) {
    if (stringDesencriptada.includes(matrizLlaves[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizLlaves[i][1],
        matrizLlaves[i][0]
      );
    }
  }

  return stringDesencriptada;
}

// FUNCION PARA COPIAR

function botonCopiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";

  alert("Texto copiado");
}
