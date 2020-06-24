//Registro con ajax
$(document).ready(function(){
  $("#btnregistrar").click(function(){
    var datos = $("#formulario").serialize();
    /*para comprobar
    alert(datos);
    return false;
    */
      $.ajax({
        type: "POST",
        url: "php/altas.php",
        data: datos,
        success:function(r){
            if(r==1){
              alert("Se a agregado con exito");
            }else{
              alert("Fallo el server");
            }
        }
      });
      return false;
  });  
});
