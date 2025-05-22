<?php
	//##Mensaje de Debug.
	if(isset($_COOKIE['SC']))
		echo "<p>Aviso: Se encontro la cookie:".$_COOKIE['SC']."</p> No debería Existir. Hay un error en el prceso.";
	else
		echo "<p>Cookie eliminada exitosamente!</p>";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Usuario <?php echo $_GET["user"]?> Autentificado</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<meta name="generator" content="Geany 0.20" />
</head>

<body>
	
	<h2>P&aacute;gina de Demostraci&oacute;n Login institucional UASLP</h2>
	<p>
		Se ha realizado la autentificación de manera exitosa. Esta es una 
		página visible tras la autentificación.
	</p>
	
	<h3 style="color:navy">  Datos de Usuario </h3>
	<p>clave: <?php echo $_GET["user"]?></p>
	<p>tipo: <?php echo $_GET["type"]?></p>
	
</body>

</html>
