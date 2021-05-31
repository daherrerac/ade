$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
    $('.slider-main').slick({
        dots: true,        
        speed: 300,
        slidesToShow: 1,
          
    });

    //Formulario

    var formsList = [
        "formv1"
    ];

    if(document.getElementById("formv1")){
        for(let i of formsList){
            $(`#${i}`).validate({
                rules: {                     
                    nombre: {
                        required: true,
                        minlength: 3,
                        maxlength: 25,
                        lettersonly: true
                    },     
                    apellido: {
                        required: true,
                        minlength: 4,
                        maxlength: 25,
                        lettersonly: true
                    },                               
                    email: {
                        required: true,
                        email: true,
                        minlength: 4,
                        maxlength: 35
                    },
                    doc: {
                        required: true,                    
                        digits:true
                    }                                          
                },
                submitHandler: function(){
                    var popup     = $('.overlay'); 
                    var closebtn  = $('#closebtn');
    
                    popup.css('display', 'flex');
                    
                    // close buttom
                    closebtn.on('click', (e) =>{
                        e.preventDefault();
                        popup.css('display', 'none');
                    });
                    // close listener key
                    $(document).keyup(function(e) {
                        if (e.key === "Escape") { 
                            popup.css('display', 'none');
                        }
                    });                
    
                    return false;
                }	            		
            });
        }
    }
    
    if(document.getElementById("formv1")){
        // Extra methods validate
        jQuery.validator.addMethod("lettersonly", function (value, element){
            return this.optional(element) || /^[a-z _.,]+$/i.test(value);
        }, "Solo se permiten letras");
        
        jQuery.extend(jQuery.validator.messages, {
            maxlength: jQuery.validator.format("Máximo {0} caracteres."),
            minlength: jQuery.validator.format("Mínimo {0} caracteres."),
            required:  jQuery.validator.format("Campo Obligatorio."),
            email:     jQuery.validator.format("Ingrese un E-mail válido."),
            digits:    jQuery.validator.format("Ingrese solo números."),
            apellido:  jQuery.validator.format("Ingrese el apellido"),
            nombre:    jQuery.validator.format("Ingrese el nombre"),
        }); 
    }      

});

window.onscroll = function() {myFunction();};
        
    var navbar  = document.getElementById("navigation");
    var navbarM = document.getElementById("navigation-mobile");
    var sticky  = navbar.offsetTop;
    
function myFunction() {
    if (window.pageYOffset >= 0) {
        navbar.classList.add("white");
        navbarM.classList.add("white");
        document.getElementById("buscar").src = "img/home/icon_BUSCAR-VERDE-mobile.svg";
        document.getElementById("afiliados").src = "img/home/icon_INGRESO-AFILIADO-VERDE_mobile.svg";
        document.getElementById("menu").src = "img/home/icon_MENU-GRIS_mobile.svg";
    } 
    if (window.pageYOffset === 0) {
        navbar.classList.remove("white");
        navbarM.classList.remove("white");
        document.getElementById("buscar").src = "img/home/menu-buscar-mobile.svg";
        document.getElementById("afiliados").src = "img/home/menu-acceso-afiliado-mobile.svg";
        document.getElementById("menu").src = "img/home/menu-hamburguesa-mobile.svg";
    } 
}

 /* Slick needs no get Reinitialized on window Resize after it was destroyed */
 $(window).on('load resize orientationchange', function() {
    $('.blog-slider').each(function(){
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 992) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                    mobileFirst: true                    
                });
            }
        }
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //document.getElementById("main").style.marginRight = "250px";
    //document.getElementById("sidenav-layer").style.display ="block";
}
function openSearch() {
    document.getElementById("search-mobile").style.display ="block";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.getElementById("sidenav-layer").style.display ="none";
}
function closeSearch() {
    document.getElementById("search-mobile").style.display ="none";
}
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
  });
}

function showMore() {
    var adicional  = document.getElementById("segunda");
    adicional.classList.remove("d-none");
    adicional.classList.remove("d-lg-block");
}

function changeHeight(){
    document.getElementById('masInfo').style.height = "auto";
    document.getElementById('datosA').style.height = "250px";    
}

function changeHeightEMI(){
    if(!(document.getElementById('anchor-emi').classList.contains("abierto"))){
        document.getElementById('emi').style.height = "auto";
        document.getElementById('emi-add').style.display = "block";  
        document.getElementById('anchor-emi').innerHTML="Cerrar";
        document.getElementById('anchor-emi').classList.add("abierto");
    }else{
        document.getElementById('emi-add').style.display = "none";  
        document.getElementById('emi').style.height = "290px";
        document.getElementById('anchor-emi').innerHTML="Conoce más";
        document.getElementById('anchor-emi').classList.remove("abierto");
    }
    
}

