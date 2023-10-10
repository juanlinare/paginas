function duplicarElementos() {
    let numeros = document.getElementById("numeros").value.split(",").map(Number);

    let duplicados = numeros.map(function(numero) {
        return numero * 2;
    });

    document.getElementById("resultado").innerHTML = "Array duplicado: " + duplicados;
}