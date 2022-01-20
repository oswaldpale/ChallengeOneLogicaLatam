
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();    
    var inputNombre = document.getElementById("msg");
    inputNombre.value = encriptar();
    limpiarEntrada();
});

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();    
    var inputNombre = document.getElementById("msg");
    inputNombre.value = desencriptar();
    limpiarEntrada();
});

function encriptar() {
    var CadenaEncriptada=''; 
    var arrayCadena =  document.getElementById("input-texto").value.split('');
    
    for(const caracter of arrayCadena) {
        if (caracter=='e'  || caracter=='i' || caracter=='a' || caracter=='o' || caracter=='u' ) {
            CadenaEncriptada = caracter =='e'?CadenaEncriptada + 'enter':CadenaEncriptada+'';
            CadenaEncriptada = caracter =='i'?CadenaEncriptada + 'imes':CadenaEncriptada+'';
            CadenaEncriptada = caracter =='a'?CadenaEncriptada + 'ai':CadenaEncriptada+'';
            CadenaEncriptada = caracter =='o'?CadenaEncriptada + 'ober':CadenaEncriptada+'';
            CadenaEncriptada = caracter =='u'?CadenaEncriptada + 'ufat':CadenaEncriptada+'';
        } else {
           CadenaEncriptada = CadenaEncriptada + caracter; 
        }
    };
    return CadenaEncriptada;
}
function desencriptar() {
    const desencriptar = document.getElementById('input-texto').value;
    const desencriptado = desencriptar.replace(/(enter)/gi, 'e')
                                      .replace(/(imes)/gi, 'i')
                                      .replace(/(ai)/gi, 'a')
                                      .replace(/(ober)/gi, 'o')
                                      .replace(/(ufat)/gi, 'u');
    return desencriptado;
}

 function copy() {
    var copyText = document.getElementById("msg");
    copyText.select();
    document.execCommand("copy");
    alert('Texto copia al portapapeles de windows');
}
function limpiarEntrada(){
    var entrada = document.getElementById("input-texto");
    entrada.value='';
}

