const boton=document.getElementById("btnnombre");
boton.addEventListener("click", ingresa);
function ingresa (){
    const  Text= (document.getElementById("nom"));
    const imprimirdivresultado=document.getElementById("divresultado");
    imprimirdivresultado.innerText=varresultado;
}

