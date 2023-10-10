function obtenerLongitudPalabras() {
    let oracion = document.getElementById("oracion").value;

    if (oracion === "") {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese una oración";
        return;
    }

    let palabras = oracion.split(" ");
    let longitudPalabras = "";

    for (let i = 0; i < palabras.length; i++) {
        longitudPalabras += palabras[i].length + " ";
    }

    document.getElementById("resultado").innerHTML = "Longitud de palabras: " + longitudPalabras.trim();
}