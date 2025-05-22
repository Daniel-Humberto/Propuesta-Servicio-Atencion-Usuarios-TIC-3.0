<?php

/* v1.1 Noviembre 2011 Guillermo Canto
 * Julio 2011 Guillermo Canto <guillermo.canto@uaslp.mx>
 * 	-----------------------------------------------------	
 * Libre para Modificación y distribución.(GPL)
 * 
 * Archivo para incluir en proyecto de Log In.
 * 
 * --- MODIFICAR ESTE ARCHIVO Y NO "login_v1.0.inc" DIRECTAMENTE ---
 * 
 * .-Procurar quitar permisos de ejecución y de apertura por cualquier 
 * usuario, por motivos de seguridad.
 * El objetivo del archivo es que solo sea accesible desde el mismo 
 * servidor y no desde el cliente.
 * Culaquier parametro o variable necesarios para el servicio deben ser 
 * establecido en este archivo.-
 * Julio de 2011
 * */

//Parametros Necesarios. NO MODIFICAR.---
//Datos fijos modificables solo para mantenimiento o depuración del 
//servicio.

//URL del servicio para consumir. NO MODIFICAR.
$serviceUrl = "https://serviciosenlinea.uaslp.mx/LoginService/LoginService.svc?wsdl";

//URL de formulario para login. NO MODIFICAR.
$serviceLoginFormUrl = "https://serviciosenlinea.uaslp.mx/LoginGateway/Default.aspx";
//--------------------------------------------------------------------------------------------

//Parametros Necesarios . Modificar de acuerdo a la Aplicación
// y a datos proporcionados por Administrador.

// Id de aplicación cliente otorgadop or administrador del servicio.
$serviceClientId = 4;

//Dirección de página, modulo o sitio dondé será agregado el código.
$serviceReturnURL = "http://localhost/index.php";

?>
