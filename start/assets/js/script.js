
ScrollReveal().reveal('.reveal',{delay: 500});

//ready: esta funcion se ejecutara cuando ya todo se halla cargado
$(document).ready(function() {
    var navbarContainer = $(".navbar-container");
    var prevScrollPos = $(window).scrollTop(); //$(window).scrollTop(): devuelve la posición actual del scroll vertical en píxeles.
  
    // Función para ocultar el navbar
    function hideNavbar() {
      navbarContainer.addClass("hide");
    }
  
    // Función para mostrar el navbar
    function showNavbar() {
      navbarContainer.removeClass("hide");
    }
  
    // Evento para ocultar o mostrar el navbar según la dirección del scroll
    $(window).scroll(function() {
      var currentScrollPos = $(window).scrollTop();
  
      if (currentScrollPos > prevScrollPos) {
        // Scroll hacia abajo
        hideNavbar();
      } else {
        // Scroll hacia arriba
        showNavbar();
      }
  
      prevScrollPos = currentScrollPos;
    });
});
  
  