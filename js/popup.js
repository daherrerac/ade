function openModal(popUpOpen){
    switch (popUpOpen) {
        case 1:
            pop1.style.display = "flex";
        break;
        case 2:
            pop1.style.display = "flex";
        break;
        case 3:
            pop3.style.display = "flex";
        break;
        case 4:
            pop4.style.display = "flex";
        break;
        case 5:
            pop5.style.display = "flex";
        break;
        case 6:
            pop6.style.display = "flex";
        break;
                            
        default:
          
          
    }

}
function closeModal(popUpClose){
    switch (popUpClose) {
        case 1:
            pop1.style.display = "none";
        break;
        case 2:
            pop2.style.display = "none";
        break;
        case 3:
            pop3.style.display = "none";
        break;
        case 4:
            pop4.style.display = "none";
        break;
        case 5:
            pop5.style.display = "none";
        break;
        case 6:
            pop6.style.display = "none";
        break;
                                    
        default:          
          
    }
}


function mostrar_buscador(){

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}