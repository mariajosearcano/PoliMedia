$(document).ready(function() {
  var fotoPerfilUrl = localStorage.getItem('fotoPerfil');

  // Mostrar la foto de perfil en el elemento de imagen
  if (fotoPerfilUrl) {
    $('.perfil-usuario-avatar img').attr('src', fotoPerfilUrl);
  }

  // Escuchar el evento submit del formulario
  $('#formulario').submit(function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores ingresados en los campos de texto
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    var email = $('#email').val();

    // Guardar los valores en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('email', email)

    window.location.href = 'home.html';
  });
  $('#guardar').click(function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = $('#nombre').val();
    var carrera = $('#carrera').val();
    var email = $('#email').val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingrese una dirección de correo electrónico válida.');
      return;
    }

    // Verificar la terminación del correo electrónico
    if (email.substr(email.indexOf('@')) !== '@elpoli.edu.co') {
      alert('Por favor, ingrese una dirección de correo electrónico terminada en "@elpoli.edu.co".');
      return;
    }
    // Guardar los valores en el Local Storage
    if (email.substr(email.indexOf('@')) !== '@elpoli.edu.co') {
      alert('Por favor, ingrese una dirección de correo electrónico terminada en "@elpoli.edu.co".');
      return;
    }
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('carrera', carrera);
    localStorage.setItem('email', email);

    // Actualizar los elementos en la sección perfil-usuario-bio
    $('.nombre').text(nombre);
    $('.correo').text(email);
    $('.carrera').text(carrera);

    // Mostrar mensaje de éxito
    alert('¡Perfil actualizado con éxito!');

    // Redirigir a la página de inicio
    window.location.href = 'home.html';
  });

  if (localStorage.getItem('nombre')) {
    var nombre = localStorage.getItem('nombre');
    $('#nombre').val(nombre);
    $('.nombre').text(nombre);
  }
  if (localStorage.getItem('carrera')) {
    var carrera = localStorage.getItem('carrera');
    $('#carrera').val(carrera);
    $('.carrera').text(carrera);
  }
  if (localStorage.getItem('email')) {
    var email = localStorage.getItem('email');
    $('#email').val(email);
    $('.correo').text(email);
  }
   
      $('#cambiarfoto').click(function() {

        var input = $('<input type="file">');
        input.on('change', function(event) {
          var file = event.target.files[0];
          if (file && file.type.startsWith('image/')) {
            var reader = new FileReader();
            reader.onload = function(event) {
              var nuevaFotoUrl = event.target.result;
              localStorage.setItem('fotoPerfil', nuevaFotoUrl);

              $('.perfil-usuario-avatar img').attr('src', nuevaFotoUrl);

              alert('Foto de perfil actualizada correctamente');
              Cambiarperfil;
            };
            reader.readAsDataURL(file);
          } else {
            alert('Por favor, seleccione un archivo de imagen válido');
          }
        });
        input.click();
      });

      if (localStorage.getItem('fotoPerfil')) {
        var fotoPerfilUrl = localStorage.getItem('fotoPerfil');
        $('.perfil-usuario-avatar img').attr('src', fotoPerfilUrl);
        
      }

      function Cambiarperfil() {
        const newImageURL = localStorage.getItem('fotoPerfil');
        if (newImageURL) {
          $('#foto').attr('src', newImageURL);
        }
      }

      Cambiarperfil();
     
     
  });
  
   