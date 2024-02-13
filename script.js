function encriptar() {
    let textoEncriptar = document.getElementById("texto").value;

    let textoCifrado = textoEncriptar;
    textoEncriptar.replace(/a/gi, "ai");
    textoEncriptar.replace(/e/gi, "enter");
    textoEncriptar.replace(/i/gi, "imes");
    textoEncriptar.replace(/o/gi, "ober");
    textoEncriptar.replace(/u/gi, "ufat");
    return;
}

function desencriptar() {

}

