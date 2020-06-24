$(document).ready(function(){

  //PARTE DEL SLIDER FOTOS GALERIA
  $(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 800
  });
});



    //PARTE DEL LOS POST DONDE CREAREMOS LOS ARTICULOS
    var posts = [
      {
        title: 'bxslider y moment.js',
        date: 'Publicado el dia '+moment().day()+" de "+ moment().format('LL'),
        content: '<strong>Uso de libreria de bxslider y la libreria de moment.js<br>Esta web fue hecha por floats<br></strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur quibusdam nostrum possimus dolorum aperiam ut repudiandae laudantium, nihil ducimus soluta fugit tenetur at perferendis earum assumenda delectus quaerat illo? Lorem'
      },
      {title: 'El formulario fue hecho por ajax',
      date: moment().format("MMMM dddd YYYY"),
      content: '<strong>solo funciona el registro pero necesitas la base de datos </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur quibusdam nostrum possimus dolorum aperiam ut repudiandae laudantium, nihil ducimus soluta fugit tenetur at perferendis earum assumenda delectus quaerat illo? Lorem'
      },
      {title: 'Este articulo fue hecho por un llamado de json en js',
      date: 'Publicado el dia '+moment().day()+" de "+ moment().format('LL'),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur quibusdam nostrum possimus dolorum aperiam ut repudiandae laudantium, nihil ducimus soluta fugit tenetur at perferendis earum assumenda delectus quaerat illo? Lorem'
    },
      {title: 'Usamos la libreria de ui-jquery',
      date:  moment().subtract(6, 'day').calendar(),
      content: 'Para darle ejecto al jquery de acordion. <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur quibusdam nostrum possimus dolorum aperiam ut repudiandae laudantium, nihil ducimus soluta fugit tenetur at perferendis earum assumenda delectus quaerat illo? Lorem'
    },
    ];

// CREACION DEL LOS ARTICULOS POR EL ID posts
    posts.forEach ((item, index) =>{
      var post = '<article class="post"><h3>'
      +item.title+
      '</h3><span class="fecha">'
      +item.date+
      '</span><p>'
      +item.content+
      '</p><a class="btnleer">Leer mas...</a></article>';
      $("#posts").append(post);
  });


});
