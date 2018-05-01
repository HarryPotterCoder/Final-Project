$(document).ready(function() {
 // jQuery UI Widgets

  $(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 });
