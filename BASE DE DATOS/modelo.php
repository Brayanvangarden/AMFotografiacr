<?php

// conexión con la base de datos y el servidor
$conexion = mysqli_connect("localhost", "root", "", "amfotografia") or die("<h2>No se encuentra el servidor</h2>");

insertar($conexion);

function insertar($conexion)
{
    // captura los datos del formulario
    $nombre = $_POST['nombre'];

    // consulta
    $consulta = "INSERT INTO nombre_tabla (nombre_columna) VALUES ('$nombre')";

    // ejecutar consulta
    mysqli_query($conexion, $consulta) or die("Error en la inserción: " . mysqli_error($conexion));

    // cerrar conexión
    mysqli_close($conexion);
}

?>
