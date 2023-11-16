<?php

// conexion con la base de datos y el servidor

$conexion =  mysqli_connect("localhost", "root","","", "amfotografia") or die ("<h2>No se encuentra el servisor</h2>");

insertar($conexion);


function insertar($conexion ){
// captura los datos de la base d datos 
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $fecha = $_POST['fecha'];
    $comentarios = $_POST['comentarios'];

    //consulta 
    $consulta = "INSERT INTO registro (id:usuario, nombre, correo, fecha, comentarios)
    VALUES ('$nombre', '$correo', '$fecha', '$comentarios')";

    mysqli_query($conexion ,  $consulta);
    mysqli_close($conexion);
}   


?>