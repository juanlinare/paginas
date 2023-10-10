let frutas = ["manzana", "plátano", "naranja", "uva", "mango", "sandía"];

function verificarFruta() {
    let frutaIngresada = document.getElementById("fruta").value.toLowerCase();

    if (frutaIngresada === "") {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese una fruta";
        return;
    }

    if (frutas.includes(frutaIngresada)) {
        document.getElementById("resultado").innerHTML = "La fruta está en el array";
    } else {
        document.getElementById("resultado").innerHTML = "La fruta no está en el array";
    }
}