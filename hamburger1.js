$(function(){
  $('#two-lines').click(function(){  
    if ($('header').hasClass('open')){
      $('header').removeClass('open');
    }
    else{
    $('header').addClass('open');
    }
  });
 
  $("#mask").click(function(){
    $('header').removeClass('open');
  });  
});