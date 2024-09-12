function calcularIMC() {

    
    let apellido = document.getElementById("apellido").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let nombre = document.getElementById("nombre").value;
    let altura = parseFloat(document.getElementById("altura").value);

    var imc = peso / (altura*altura);

    let calculo;

    if(nombre==""){
        calculo= "Campo nombre obligatorio";
        imc=-999999;
    }else if(peso<3 || altura <0.30){
        calculo = "Peso y altura incorrectos";
        imc=-999999;
    }else if (imc < 18.5) {
        calculo = "Estás delgado/a.";
    } else if (imc >= 18.5 && imc < 24.9) {
        calculo = "Estás en el peso ideal.";
    } else if (imc >= 25 && imc < 29.9) {
        calculo = "Tienes sobrepeso.";
    } else if (imc >29.9){
        calculo = "Tienes obesidad. Haz dieta.";
    } 

    const resultado = `
        Paciente: ${nombre+ "  "+apellido}
        <br>
        Tu IMC es: ${imc}
        <br>
        Observación: ${calculo}
    `;
    document.getElementById("resultado").innerHTML = resultado;
}
