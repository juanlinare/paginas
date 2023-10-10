function validarContrasena() {
    let contrasena = document.getElementById("contrasena").value;

    if (contrasena.length < 8 || !/[A-Z]/.test(contrasena) || !/\d/.test(contrasena) || /\s/.test(contrasena)) {
        document.getElementById("resultado").innerHTML = "La contraseña no cumple con los criterios";
        return;
    }

    document.getElementById("resultado").innerHTML = "La contraseña es válida";
}