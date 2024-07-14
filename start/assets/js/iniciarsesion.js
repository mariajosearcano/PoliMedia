$('#iniciar').click(function (event) {
    var enteredvalue=$('#usuario').val();           
    $('.nombre').text(enteredvalue);
    window.location.href = "../PoliMedia/home/home.html";
})