inputSearchc = document.getElementById("inputSearchc");
box_searchc =  document.getElementById("box-searchc");


//Creando filtrado de busqueda

document.getElementById("inputSearchc").addEventListener("keyup", buscador_internoc);

function buscador_internoc(){


    filter = inputSearchc.value.toUpperCase();
    li = box_searchc.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValuec = a.textContent || a.innerText;

        if(textValuec.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_searchc.style.display = "block";

            if (inputSearchc.value === ""){
                box_searchc.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }



}


