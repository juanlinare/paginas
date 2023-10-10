function buscarEnCadena() {
    let cadena = document.getElementById("cadena").value.toLowerCase();
    let palabraClave = document.getElementById("palabraClave").value.toLowerCase();

    if (cadena.includes(palabraClave)) {
        document.getElementById("resultado").innerHTML = "La palabra si esta en la cadena";
    } else {
        document.getElementById("resultado").innerHTML = "La palabra no esta en la cadena";
    }
}