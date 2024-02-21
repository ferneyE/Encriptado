let texEntrada = document.getElementById("textoIngresado");
let texSalida = document.getElementById("textoEncriptado");
let mensajeInicial = document.getElementById("mensajeInicial");
let boton = document.getElementById("copiar");




// Encripta un texto ingresado
function encriptar() {
    let texEncriptado = texEntrada.value;
    
    texEncriptado = texEncriptado.replace(/e/mg, "enter");
    texEncriptado = texEncriptado.replace(/i/mg, "imes");
    texEncriptado = texEncriptado.replace(/o/mg, "ober");
    texEncriptado = texEncriptado.replace(/u/mg, "ufat");  
    texEncriptado = texEncriptado.replace(/a/mg, "ai");   
 
    mensajeInicial.remove();
    boton.style.display = "block";
    texSalida.style.display = "block";    
    texSalida.innerHTML = texEncriptado; 
    
}


//Desencripta un texto encriptado
function desencriptar() {  

    let texDesencriptar =  texEntrada.value;   
    
    texDesencriptar = texDesencriptar.replace(/enter/mg, "e");
    texDesencriptar = texDesencriptar.replace(/imes/mg, "i");
    texDesencriptar = texDesencriptar.replace(/ober/mg, "o");
    texDesencriptar = texDesencriptar.replace(/ufat/mg, "u");  
    texDesencriptar = texDesencriptar.replace(/ai/mg, "a");
    
    mensajeInicial.remove();
    boton.style.display = "block";
    texSalida.style.display = "block";
    texSalida.innerHTML = texDesencriptar;
  
}   

//Copia un texto encriptado


    //const copyButton = document.querySelector(".copiarContenido");

    boton.addEventListener("click", () => {
    const mensajeValue = texSalida.value;
    const copyText = mensajeValue;

    navigator.clipboard.writeText(copyText)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch((error) => {
            console.error('Error al copiar el texto: ', error);
        });

});




//Pega un texto encrptado en enciptar()

//limpia el campo de ingreso

