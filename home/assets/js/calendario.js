$(document).ready(function() {
    // Obtener el elemento del calendario
    var calendar = $('#calendar');
  
    // Obtener la fecha actual
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
  
    // Generar el calendario
    generateCalendar(currentMonth, currentYear);
  
    // Función para generar el calendario
    function generateCalendar(month, year) {
      // Limpiar el contenido anterior del calendario
      calendar.empty();
  
      // Generar el encabezado del calendario
      var header = $('<div class="header"></div>');
      header.append('<span class="prev-month">&#8249;</span>');
      header.append('<span class="month">' + getMonthName(month) + ' ' + year + '</span>');
      header.append('<span class="next-month">&#8250;</span>');
      calendar.append(header);
  
      // Generar la tabla del calendario
      var table = $('<table></table>');
      var weekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
      var thead = $('<thead></thead>');
      var tr = $('<tr></tr>');
  
      for (var i = 0; i < 7; i++) {
        tr.append('<th>' + weekdays[i] + '</th>');
      }
  
      thead.append(tr);
      table.append(thead);
      calendar.append(table);
  
      // Generar las celdas de los días del mes
      var tbody = $('<tbody></tbody>');
      var firstDay = new Date(year, month, 1).getDay();
      var lastDate = new Date(year, month + 1, 0).getDate();
  
      var dayCount = 1;
      var currentRow = $('<tr></tr>');
  
      for (var i = 0; i < firstDay; i++) {
        currentRow.append('<td></td>');
      }
  
      while (dayCount <= lastDate) {
        if (currentRow.children().length === 7) {
          tbody.append(currentRow);
          currentRow = $('<tr></tr>');
        }
  
        var cell = $('<td>' + dayCount + '</td>');
        currentRow.append(cell);
  
        dayCount++;
      }
  
      // Completar la última semana del mes con celdas vacías
      while (currentRow.children().length < 7) {
        currentRow.append('<td></td>');
      }
  
      tbody.append(currentRow);
      table.append(tbody);
  
      // Agregar eventos a las flechas de navegación
      $('.prev-month').click(function() {
        if (month === 0) {
          month = 11;
          year--;
        } else {
          month--;
        }
  
        generateCalendar(month, year);
      });
  
      $('.next-month').click(function() {
        if (month === 11) {
          month = 0;
          year++;
        } else {
          month++;
        }
  
        generateCalendar(month, year);
      });
    }
  
    // Función para obtener el nombre del mes
    function getMonthName(month) {
      var monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      return monthNames[month];
    }

    $('#add-button').click(function() {
        // Obtener los valores de los inputs
        var comment = $('#comment-input').val();
        var rating = $('#rating-input').val();
    
        // Validar que ambos campos estén llenos
        if (comment && rating) {
          // Crear una nueva fila en la tabla con los valores ingresados
          var newRow = $('<tr>');
          newRow.append($('<td>').text(comment));
          newRow.append($('<td>').text(rating));
    
          // Insertar la nueva fila en el tbody de la tabla
          $('#comments-table tbody').append(newRow);
    
          // Limpiar los inputs después de agregar la fila
          $('#comment-input').val('');
          $('#rating-input').val('');
        }
      });
  });
  