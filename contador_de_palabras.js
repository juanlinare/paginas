function contarPalabras() {
    let frase = document.getElementById("frase").value.trim();
    let palabras = frase.split(" ");

    if (frase === "") {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese una frase";
    } else {
        document.getElementById("resultado").innerHTML = "Número de palabras: " + palabras.length;
    }
}