$(document).ready(function(){
  /*Ponemos un scrool animado que nos permita ir al pixel 0 de nuestra pagina*/
	$('.subir').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 1200);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.subir').slideDown(1200);
		} else {
			$('.subir').slideUp(1200);
		}
	});


  //SELECTOR DE TEMAS
  var theme = $("#tema");
  $("#rosa").click(function(){
    theme.attr("href","css/estilos.css")
  });
  $("#rojo").click(function(){
    theme.attr("href","css/tema1.css")
  });
  $("#cafe").click(function(){
    theme.attr("href","css/tema2.css")
  });


});
