$(document).ready(function() {
  $('.img-hold').hover(
    function(){
    $(this).addClass('animated pulse');},
    function(){
    $(this).removeClass('animated pulse')
    });
});
