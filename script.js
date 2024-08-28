const input = document.querySelector("#input-texto");
const btnCriptografar = document.querySelector("#btn-criptografar");
const btnDescriptografar = document.querySelector("#btn-descriptografar");
const mensagem = document.querySelector("#mensagem");
const btnCopiar = document.querySelector("#btn-copiar");

document.getElementById("div-aparece").style.display = 'none';
inputverificar();

document.getElementById('btn-criptografar').onclick = (e) => {
  e.preventDefault();
  const textoCodificado = encriptar(input.value.toLowerCase());
  mensagem.value = textoCodificado;
  input.value = "";
  aparece()
}

document.getElementById('btn-descriptografar').onclick = (e) => {
  e.preventDefault();
  const textoDecodificado = decodificar(input.value);
  mensagem.value = textoDecodificado;
  input.value = "";
  aparece()
}

document.getElementById('btn-copiar').onclick = (e) => {
  e.preventDefault();
  const mensagem = document.querySelector("#mensagem");
  mensagem.select();
  navigator.clipboard.writeText(mensagem.value)
  mensagem.value = "";
}

function encriptar(stringCodificada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringCodificada = stringCodificada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringCodificada.includes(matrixCode[i][0])) {
      stringCodificada = stringCodificada.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }
  }
  return stringCodificada
}

function decodificar(stringDecodificada) {
  let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  stringDecodificada = stringDecodificada.toLowerCase()
  for (let i = 0; i < matrixCode.length; i++) {
    if (stringDecodificada.includes(matrixCode[i][1])) {
      stringDecodificada = stringDecodificada.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }
  }
  return stringDecodificada
}

function aparece() {
  document.getElementById("div-desaparece").style.display = 'none';
  document.getElementById("div-aparece").style.display = 'block';
}

function home() {
  document.getElementById("div-aparece").style.display = 'none';
  document.getElementById("div-desaparece").style.display = 'block';
}

function inputverificar() {
  var inputPalavra = document.querySelector("#input-texto");
  inputPalavra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}