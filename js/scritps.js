$(document).ready(function () {
    // Toggle para mostrar/ocultar información de los usuarios
    $('.card').click(function() {
        $(this).find('.card-body').slideToggle();
    });
});