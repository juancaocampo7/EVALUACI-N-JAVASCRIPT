let memoriaRam; 
let monitor;
let tarjetaVideo; 
let precio;

let imgs=["img/xiaomi.jpg","img/apple.jpeg"];
let computador1=[];
let computador2=[];

let sectioncards = document.getElementById("section-cards");
let numero =0
let sectioncomparacion = document.getElementById("section-comparacion");
let video = false;
let especificaciones = "";

var datos = function(){
    discoDuro = document.getElementById('discoDuro');
    memoriaRam = document.getElementById('memoriaRam');
    monitor = document.getElementById('monitor');
    tarjetaVideo = document.getElementById('tarjetaVideo');
    precio = document.getElementById('precio');
}


let botonEnviar =   document.getElementById('enviar')
let botonLimpiar =  document.getElementById('limpiar')
let botonComparar = document.getElementById('comparar');



botonLimpiar.addEventListener("click",function(){
    sectioncards.innerHTML="";
    sectioncomparacion.innerHTML="";
    numero = 0;
    datos();
    computador1 = [];
    computador2 = [];
    discoDuro.value="";
    memoriaRam.value="";
    monitor.value="";
    tarjetaVideo.value="";
    precio.value="";
})

botonComparar.addEventListener("click",function(){

    console.log("comparando");
    vistapccomporacion();
    comparacion();

})

botonEnviar.addEventListener("click", function(){
    datos();
    if(numero ==0){
        computador1=[discoDuro.value,memoriaRam.value,monitor.value,tarjetaVideo.value,precio.value];
    }else if (numero==1){
        computador2=[discoDuro.value,memoriaRam.value,monitor.value,tarjetaVideo.value,precio.value];
    }
    if( numero<2){
        
        sectioncards.innerHTML += cardfunction(discoDuro.value,memoriaRam.value,monitor.value,tarjetaVideo.value,precio.value);
    }else{
        alert("No se puede agregar mas productos");

    }
    numero++;
    console.log(computador1);
    console.log(computador2);
})

function vistapccomporacion(){
    
    let computadora1html = `<div class="card m-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Equipo 1</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Disco duro : ${computador1[0]} </li>
      <li class="list-group-item">ram: ${computador1[1]}</li>
      <li class="list-group-item">monitor :${computador1[2]}</li>
      <li class="list-group-item">video: ${computador1[3]}</li>
      <li class="list-group-item">Precio: ${computador1[4]}</li>
    </ul>
    
    </div>`;

    let computadora2html = `<div class="card m-3" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Equipo 2.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Disco duro : ${computador2[0]} </li>
      <li class="list-group-item">Memoria Ram: ${computador2[1]}</li>
      <li class="list-group-item">Monitor :${computador2[2]}</li>
      <li class="list-group-item">Tarjeta Video: ${computador2[3]}</li>
      <li class="list-group-item">Precio: ${computador2[4]}</li>
    </ul>
    
    </div>`;
    

    let elemento=document.createElement("div");
    let img =document.createElement("img");
    let informacion = document.createElement("div");
    informacion.innerHTML =computadora1html;
    img.setAttribute("src",imgs[0]);
    img.style.width="80px";
    elemento.append(img);
    elemento.append(informacion);

    sectioncomparacion.innerHTML += elemento.innerHTML

    
    let elemento2=document.createElement("div");
    let img2 =document.createElement("img");
    let informacion2 = document.createElement("div");
    informacion2.innerHTML =computadora2html;
    img2.setAttribute("src",imgs[1]);
    img2.style.width="80px";
    elemento2.append(img);
    elemento2.append(informacion2);

    sectioncomparacion.innerHTML += elemento2.innerHTML


}

function comparacion(){
    var puntos1 = 0;
    var puntos2 = 0;
    if (computador1[0]>computador2[0]){
        puntos1++;

    }else{
        puntos2++;
    }
    if (computador1[1]>computador2[1]){
        puntos1++;

    }else{
        puntos2++;
    }
    if (computador1[2]>computador2[2]){
        puntos1++;

    }else{
        puntos2++;
    }
    if (computador1[3]!=""){
        puntos1++;

    }
    if(computador2[3] != ""){
        puntos2++;
    }
    if (computador1[4]>computador2[4]){
        puntos1++;

    }else{
        puntos2++;
    }

    if (puntos1 > puntos2){
        especificaciones = "El equipo 1 tiene mejores especificaciones";
    
    }else{
        especificaciones = "El equipo 2 tiene mejores especificaciones";
    }
    alert(especificaciones);
   
}

function cardfunction (discoDuro,memoriaRam,monitor,tarjetaVideo,precio){
    cardhtml = `<div class="card m-3" style="width: 18rem;">
    <img src="img/xiaomi.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Computadora.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> Disco Duro : ${discoDuro} </li>
      <li class="list-group-item"> Memoria Ram: ${memoriaRam}</li>
      <li class="list-group-item"> Monitor :${monitor}</li>
      <li class="list-group-item"> Tarjeta Video: ${tarjetaVideo}</li>
      <li class="list-group-item"> Precio: ${precio}</li>
    </ul>
    
    </div>`;
    return cardhtml;
}