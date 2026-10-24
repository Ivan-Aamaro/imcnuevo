/* Crear las referencias hacia los objetos */
const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const inputIMC = document.getElementById("imc");
const inputResultado = document.getElementById("resultado");

const botonCalcular = document.getElementById("botonCalcular");

botonCalcular.addEventListener("click", e => {
    e.preventDefault();

    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);

    if (inputPeso.value == "" || inputAltura.value == "" ||
        isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Ingresa un peso y una altura validos.");
        return;
    }

    let imc = peso / (altura * altura);

    inputIMC.value = imc.toFixed(2);

    if (imc < 18.5) {
        inputResultado.value = "Bajo Peso";
    }
    else if (imc >= 18.5 && imc <= 25) {
        inputResultado.value = "Peso Normal";
    }
    else {
        inputResultado.value = "Sin clasificación";
    }
});
