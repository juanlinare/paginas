function convertirMayusculasMinisculas() {
    let palabras = document.getElementById("palabras").value.split("\n");

    let palabrasModificadas = palabras.map(function(palabra) {
        return palabra.split('').map(function(letra) {
            if (letra === letra.toUpperCase()) {
                return letra.toLowerCase();
            } else {
                return letra.toUpperCase();
            }
        }).join('');
    });

    document.getElementById("resultado").innerHTML = "Palabras modificadas:<br>" + palabrasModificadas.join("<br>");
}