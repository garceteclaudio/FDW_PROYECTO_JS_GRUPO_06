function calcularIMC() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = peso / (altura*altura);

    let calculo;
    if (imc < 18.5) {
        calculo = "Estás delgado/a.";
    } else if (imc >= 18.5 && imc < 24.9) {
        calculo = "Estás en el peso ideal.";
    } else if (imc >= 25 && imc < 29.9) {
        calculo = "Estás por sobre la media.";
    } else {
        calculo = "Estás obeso/a.";
    }

    const resultado = `
        Tu IMC es: ${imc}
        <br>
        Recomendación: ${calculo}
    `;
    document.getElementById("resultado").innerHTML = resultado;
}
