function abrirMenu(){
    let menu = document.getElementById("menuPrincipal");
    let divNav2 = document.getElementById("div-nav2");

    if(divNav2.style.display ="none"){
        divNav2.style.animation = "1s bajarmenu linear"
         divNav2.style.display = "block"
        menu.style.transform = "rotateZ(90deg)"
        menu.style.opacity = "0"
    }
}
 function cerrarMenu(){
     let menu = document.getElementById("menuPrincipal");
     let divNav2 = document.getElementById("div-nav2");
    
     if(divNav2.style.display > "100px"){
        divNav2.style.animation = "1s subirmenu linear"

        divNav2.style.display = "none"
         divNav2.style.transition = "1s";
         menu.style.transform = "rotateZ(0deg)"
         menu.style.opacity = "1"
     }

 }



function abrir(){
    let boton = document.getElementById("boton");
    let bocadillo = document.getElementById("bocadillo");
    let cierreBoton = document.getElementById("cierreBoton");
    
    if(bocadillo.style.display = "none"){
        bocadillo.style.display = "flex";
        boton.style.opacity = "0"
    }
    
}
function cerrar(){
    let boton = document.getElementById("boton");
    let bocadillo = document.getElementById("bocadillo");
    let cierreBoton = document.getElementById("cierreBoton");
    
    boton.style.opacity = 1;
    boton.style.transition = "1s";
    bocadillo.style.transition = "1s";
        bocadillo.style.display = "none";
    
// --------------------kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
}


function abrir2(){
    boton2 = document.getElementById("boton2");
    metodologia = document.getElementById("metodologia")

    if(metodologia.style.display = "none"){
        metodologia.style.display = "block"
        boton2.style.opacity = "0"
    }
}
function cierre(){
    cierreBoton2 = document.getElementById("cierreBoton2");
    metodologia = document.getElementById("metodologia");


    boton2.style.opacity = 1;

    if(metodologia.style.display = "block"){
        metodologia.style.display = "none";
    }
    


}