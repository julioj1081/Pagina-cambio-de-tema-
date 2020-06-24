<?php
  $nombre = $_POST['nombre'];
  $email = $_POST['email'];
  $contra = $_POST['contra'];
  $conexion = mysqli_connect('localhost','root','','ajax_prueba2');
  $sql = "INSERT INTO usuario (nombre,email,contra)
        VALUES('$nombre','$email','$contra')";
    echo mysqli_query($conexion,$sql);
 ?>
