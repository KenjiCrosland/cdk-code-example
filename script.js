$(document).ready(
  function(){
    $('.buttons li').click(function(){
      $(this).addClass('dark');
      $(this).prevAll().addClass('dark');
      $(this).nextAll().removeClass('dark');
    })
  }
)
