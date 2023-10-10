function esAnagrama() {
    let tex1 = document.getElementById("tex1").value.toLowerCase();
    let tex2 = document.getElementById("tex2").value.toLowerCase();
    tex1 = tex1.replace(/\s/g, "");
    tex2 = tex2.replace(/\s/g, "");
    if (tex1.length !== tex2.length) {
        document.getElementById("resultado").innerHTML = "No son anagramas";
        return;
    }          
    let arreglo1 = tex1.split("").sort();
    let arreglo2 = tex2.split("").sort();
    if (arreglo1.join("") === arreglo2.join("")) {
        document.getElementById("resultado").innerHTML = "Son anagramas";
    } else {
        document.getElementById("resultado").innerHTML = "No son anagramas";
    }
}