function convertirCadena() {
    let cadena = document.getElementById("cadena").value;

    if (cadena === "") {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese una cadena";
        return;
    }

    let mayusculas = cadena.toUpperCase();
    let minusculas = cadena.toLowerCase();

    document.getElementById("resultado").innerHTML = "Mayúsculas: " + mayusculas + "<br>Minúsculas: " + minusculas;
}