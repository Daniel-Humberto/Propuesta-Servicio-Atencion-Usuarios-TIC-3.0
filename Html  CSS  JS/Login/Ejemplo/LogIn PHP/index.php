<?php
/*
 * Archivo de ejemplo para uso de la clase "cliente_login".     
 * index.php
 *        
 */
 require('login_param.inc');
 include("login_v1.1.inc");
		
		// En este ejemplo se utiliza valores GET para validar.
		//----------------------------------------------- 
		// NO DEBE USARSE EN ENTORNOS DE PRODUCCIÓN.!!!!!
		//-----------------------------------------------
		// Preferible utilizar sesiones, Ej: if(!isset($_SESION['user']))..etc
		
 		//Si no existe sesión de Usuario
		if(!isset($_GET['usuario']) && !isset($_GET['tipo']) )
		{
			$cliente_login = new login_client($serviceUrl,$serviceLoginFormUrl,$serviceClientId,$serviceReturnURL);
			$cliente_login->autentificar();
			echo($cliente_login->mensaje);
		}
		//Si existe la Sesión de Usuario.
		else
		{
			header('Location: '."http://localhost/inicio.php?user=".$_GET['usuario']."&type=".$_GET['tipo']);
		}
?>

