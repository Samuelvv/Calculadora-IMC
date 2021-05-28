const calcular = document.getElementById("calcular");

function IMC() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;

    const resultado = document.getElementById("resultado");


if (nome !== "" && altura !== "" && peso !== "") {

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificao = "";

    if (valorIMC < 18.5) {
        classificao = "o peso um pouco baixo do que deveria.";
    }else if (valorIMC < 25) {
        classificao = "o peso ideal, parabéns, continue assim.";
    }else if (valorIMC < 30) {
        classificao = "o peso um pouco acima do que deveria.";
    }else if (valorIMC < 35) {
        classificao = "obesidade grau 1. Cuidado! Tua saúde é valiosa cuide dela.";
    }else if (valorIMC < 40) {
        classificao = "obesidade grau 2. Fique atento e procure ajuda médica.";
    }else {
        classificao = "obesidade grau 3. Tua saúde precisa de cuidados! Procure um médico.";
    }
    resultado.textContent = `${nome}, seu IMC é: ${valorIMC}. segundo dados, você tem ${classificao}`;
}
}
calcular.addEventListener("click", IMC);