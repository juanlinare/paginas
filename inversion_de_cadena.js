function invertirCadena(cadena) {
    let cadenaInvertida = "";

    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena.charAt(i);
    }

    return cadenaInvertida;
}

function invertirTexto() {
    let texto = document.getElementById("texto").value;

    if (texto === "") {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese un texto";
    } else {
        let textoInvertido = invertirCadena(texto);
        document.getElementById("resultado").innerHTML = "Texto invertido: " + textoInvertido;
    }
}