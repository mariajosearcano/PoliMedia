document.addEventListener("DOMContentLoaded", function() {
    const colorToggleBtn = document.getElementById("color-toggle-btn");
    const navContent = document.getElementById("navbar");
    const asideContent = document.getElementById("aside-content");
    const calendarContent = document.getElementById("calendarH");
    const calendarBContent = document.getElementById("margenes");
    const MainContent = document.getElementById("main-content");
    const acorContent = document.getElementById("accordionExample");
    const btnContent = document.getElementById("btn1");
    const btn1Content = document.getElementById("btn2");
    const btn2Content = document.getElementById("btn3");
    const eeeContent = document.getElementById("comments-table");
    const textContent = document.getElementsByClassName("a");
    const pieContent = document.getElementById("pie");


    
    


  
    colorToggleBtn.addEventListener("click", function() {

       
      // Verificar la clase actual del main
      if (navContent.classList.contains("dark")) {
        // Cambiar a color claro
        navContent.classList.remove("dark");
      } else {
        // Cambiar a color oscuro
        navContent.classList.add("dark");
      }

      if (navContent.classList.contains("dark")) {
        // Cambiar a color claro
        pieContent.classList.add("Pdark");
      } else {
        // Cambiar a color oscuro
        pieContent.classList.remove("Pdark");
      }

      if (eeeContent.classList.contains("dark4")) {
        // Cambiar a color claro
        eeeContent.classList.remove("dark4");
      } else {
        // Cambiar a color oscuro
        eeeContent.classList.add("dark4");
      }
      

      if (acorContent.classList.contains("darkAc")) {
        // Cambiar a color claro
        acorContent.classList.remove("darkAc");
        for (var i = 0; i < textContent.length; i++) {
            var paragraph = textContent[i];
            paragraph.classList.remove("dark4");
        
        }        
      } else {
        // Cambiar a color oscuro
        acorContent.classList.add("darkAc");
        for (var i = 0; i < textContent.length; i++) {
            var paragraph = textContent[i];
            paragraph.classList.add("dark4");
        }
      }

      if (MainContent.classList.contains("dark4")) {
        // Cambiar a color claro
        MainContent.classList.remove("dark4");
      } else {
        // Cambiar a color oscuro
        MainContent.classList.add("dark4");
      }

      if (asideContent.classList.contains("dark1")) {
        // Cambiar a color claro
        asideContent.classList.remove("dark1");
      } else {
        // Cambiar a color oscuro
        asideContent.classList.add("dark1");
      }

      if (calendarContent.classList.contains("dark2")) {
        // Cambiar a color claro
        calendarBContent.classList.remove("dark4");
        calendarContent.classList.remove("dark2");
      } else {
        // Cambiar a color oscuro
        calendarBContent.classList.add("dark4");
        calendarContent.classList.add("dark2");
      }

      if (btnContent.classList.contains("DbtnD")) {
        // Cambiar a color claro
        btnContent.classList.remove("DbtnD");
        btn1Content.classList.remove("DbtnD");
        btn2Content.classList.remove("DbtnD");


      } else {
        // Cambiar a color oscuro
        btnContent.classList.add("DbtnD");
        btn2Content.classList.add("DbtnD");
        btn1Content.classList.add("DbtnD");
      }
    });
  });
  