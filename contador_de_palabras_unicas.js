function contarPalabrasUnicas() {
    let parrafo = document.getElementById("parrafo").value;
    let palabras = parrafo.toLowerCase().split(" ");
    let palabrasUnicas = [];

    for (let i = 0; i < palabras.length; i++) {
        if (!palabrasUnicas.includes(palabras[i])) {
            palabrasUnicas.push(palabras[i]);
        }
    }
    document.getElementById("resultado").innerHTML = "Número de palabras únicas: " + palabrasUnicas.length;
}