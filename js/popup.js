fndpop = document.getElementById("fnd-pop")
openma = document.getElementById("open-modala");
openmb = document.getElementById("open-modalb");
openmc = document.getElementById("open-modalc");
openmd = document.getElementById("open-modald");
openme = document.getElementById("open-modale");
openmf = document.getElementById("open-modalf");
btncerrar = document.getElementById("btn-cerrar");


openma.addEventListener("click", abrir);
btncerrar.addEventListener("click", cerrar);

openmb.addEventListener("click", abrir);
openmc.addEventListener("click", abrir);
openmd.addEventListener("click", abrir);
openme.addEventListener("click", abrir);
openmf.addEventListener("click", abrir);



function abrir() {
   fndpop.style.display = "flex";
}

function cerrar() {
    fndpop.style.display = "none";
}


function mostrar_buscador(){

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}