<?php
/*
 *      /* 
 *      
 *      login_v1.1.php
 *      
 *      v1.1 Noviembre 2011 Guillermo Canto
 * 		---------------------------------------
 *      
 *      login_v1.0.php
 *      
 *      V1.0 Julio 2011 Guillermo Canto <guillermo.canto@uaslp.mx>
 *      
 * 		---------------------------------------
 
 * 		**Libre para Modificaci髇 y distribuci髇.(GPL)
 * 
 * 		---NO MODIFICAR ESTE ARCHIVO SI SE ENCUENTRA EN PRODUCCION ---
 * 
 *  	Procurar quitar permisos de ejecuci髇 y de apertura por cualquier 
 * 		usuario en el servidor - por motivos de seguridad -.
 * 		El objetivo del archivo es que solo sea accesible desde el mismo 
 * 		servidor y no desde el cliente.
 *      
 *      Clase para la implementaci髇 del cliente de autentificaci髇
 * 		institucional de la UASLP- Versi贸n para PHP 5.
 * 
 * 		La Clase hace uso del archivo login_param.inc, deben permancer
 * 		en la misma carpeta.
 * 
 * 		Incluir este archivo en los proyectos que requieran 
 * 		autentificaci贸n. Utilizar instrucci髇 "require" o "include"
 *      preferentemente.    
 *      
 * EJEMPLO DE MODO DE USO:
 * 
 * 		require('login_param.inc');
 *		include("login_v1.1.inc");
 *		//Verificaci贸n libre de usuario autentificado. Ej: Sesiones.
 * 		if(!isset($_SESION['user']) && &_SESION['auth'] != true)
 *		{
 *			// Creaci贸n de objeto y llamada al metodo para iniciar 
 * 			// proceso de autentificaci贸n.
 * 			$cliente_login = new login_client($serviceUrl,$serviceLoginFormUrl,
 * 											  $serviceClientId,$serviceReturnURL);
 *			$cliente_login->autentificar();
 *		}
 * 		else
 * 		{  //Flujo normal de aplicaci贸n ya con la autentificaci贸n exitosa. }
 */

//Clase pricipal.
/*Login_client:
 * Objeto que realiza la conexi髇 al servicuio de autentificaci髇 en el dominio de la UASLP.
 * Utiliza los parametos establoecidos en el archivo login_param.inc
 * 
 * NOTAS:
 * Utilizar el m閠odo autentificar.
 * Editar el m閠odo _iniciaSesionContinua
 * */
class login_client
{
	private $_svc_url;
	private $_svc_id;
	private $_svc_return;
	private $_svc_instance;
	private $_svc_form_url;
	
	public $mensaje  = 'Vacio';
	public $succesfull_login = false;
	public $data = null;
	
	public function __construct($serviceUrl,$serviceLoginFormUrl,$serviceClientId,$serviceReturnURL)
	{
		$this->_svc_url = $serviceUrl; //URL de Servicio para consumir
		$this->_svc_id = $serviceClientId; //Id de la app
		$this->_svc_return = $serviceReturnURL; //URL de regreso
		$this->_svc_form_url = $serviceLoginFormUrl; //Url con formulario de login
		$this->_svc_instance = new SoapClient($serviceUrl, array('soap_version'=> SOAP_1_1));
	}
	
	
	//--Modificable para creacion de la sesion o manipulaci髇 de datos.--//
	private function _iniciaSesionContinua()
	{
		//Ejemplo Autentificaci髇 exitosa: Redireccion a URL de Inicio 	
		//Enviando parametros.
		// En este ejemplo se utiliza valores GET para validar.
		//----------------------------------------------- 
		// NO DEBE USARSE EN ENTORNOS DE PRODUCCI覰.!!!!!
		//-----------------------------------------------
		// Preferible utilizar sesiones, Ej: if(!isset($_SESION['user']))..etc
		header('Location: '.$this->_svc_return."?usuario=".$this->data['Usuario']."&tipo=".$this->data['Tipo']);
	}
	
	public function autentificar()
	{
		//Verifica si existe un tiket 
		if(isset($_GET["Ticket"]))
		{
			//Verifica existencia de la cookie.
			if(isset($_COOKIE["SC"]))
			{	
				$this->_verificarTicket();
				if((bool)$this->succesfull_login)
					//Autentificaci贸n Exitosa, regresa a aplicaci贸n.
					$this->_iniciaSesionContinua();
				else
					echo "Fallo:".$this->mensaje;
			}
			else
			{
				//##Mensaje de Debug.
				echo  "No se encontr贸 cookie.";
				//Se Redirecciona a p谩gina inicial para iniciar proceso de login.
				header('Location: '.$this->_svc_return);
			}	
		}
		//No existe tiket. Se crea nuevo y se envia a pantalla de login.
		else
		{	
			$this->_crearNuevoTicket();
		}
	}
	
	private function _crearNuevoTicket()
	{
		//EDIT version 1.1 
		/*
		 * Se quita la llamada al m閠odo sin URL de regreso explicito.
		 * Se utiliza solo llamada a m閠odo de servicio con el parametro de ReturnURL
		 * - por problemas con redirecci髇 del lado de servidor -
		 * */
//		if(isset($_GET["ReturnUrl"]))
		{		
			$parametros = array ('idAplicacion' => $this->_svc_id, 'ReturnUrl' => $this->_svc_return);
			$Respuesta = $this->_svc_instance->NuevaSesionConUrlRetorno($parametros);	
			$xmlObject = simplexml_load_string($Respuesta->NuevaSesionConUrlRetornoResult);	
		}
//		else
//		{
//			$parametros = array ('idAplicacion' => $this->_svc_id);
//			$Respuesta = $this->_svc_instance->NuevaSesion($parametros);								
//			$xmlObject = simplexml_load_string($Respuesta->NuevaSesionResult);	
//		}	
		//##Mensaje de Debug.	
		print_r($xmlObject);
		//Se obtiene Ticket de autentifcaci贸n
		$ticket = (int)$xmlObject['Ticket'];
		$sesionId = (string)$xmlObject['ClaveSesion'];
		//Se crea la cookie de autentificaci贸n.
		setcookie("SC",$sesionId,time()+600);
		//Se redirige a pantalla de Login institucional
		header('Location: '.$this->_svc_form_url.'?Ticket='.$ticket);
	}

	private function _verificarTicket()
	{
		//##Mensaje de Debug.
		echo "Se encontro la cookie:".$_COOKIE['SC'];
		//Verificar validez de COOKIE	
		$valido = -1;
		$clave = $_COOKIE["SC"];
		//Se elimina la cookie del sistema.
		setcookie("SC","",0);
		//Se establecen aprametros para servicio..
		$parametros = array ('Ticket' => $_GET["Ticket"], 'ClaveSesion' => $clave);
		//Validar cookie
		if ( $_GET["Ticket"] > 0 )
		{			
			$Respuesta = $this->_svc_instance->ValidaCliente($parametros);
			$valido = $Respuesta->ValidaClienteResult;	
		}
		//Analiza Resultado de la consulta
		switch($valido)
                    {
				case 0: // Cookie no es valida o expiro Ticket.
					 $this->mensaje = "ERROR: Inicio de Sesi贸n no valido.";
					 break; 
				case 1: // Ok  Cookie Valida!                                
						//Obtener Resultado                           
						$Respuesta = $this->_svc_instance->EstadoUsuario($parametros);
						$xmlObject = simplexml_load_string($Respuesta->EstadoUsuarioResult);
						
						//##Mensaje de Debug.
						print_r($xmlObject);					
						if($xmlObject->attributes()->count() !== 0)
						{     
							//Verificar que no exista un error                                         
							 if (!isset($xmlObject['TextoError']))
							 {
								 //Si esta autentificado Autentificar por programaci贸n la sesion local.								 
								 if ((bool)$xmlObject['Autenticado'])
								 {
									 $this->succesfull_login = true;
									 $this->data = $xmlObject;
								 }
								 else 
									$this->mensaje =  "<p>Error: El Usuario no esta autentificado.</p>";								                                        
							 }
							 else
								$this->mensaje =  "<p>Error:Se agoto el tiempo.</p>";                                    
						}
						else 
						{                                    
							$this->mensaje =  "<p>Error:El Ticket Expiro.</p>";
						}
					break;
				case -1: // Error al conectar, no se pudo validar cookie!                               
					   $this->mensaje =  "<p>No se pudo validar, Intentelo de nuevo.</p>";
					break; 
			}
	}	
}

?>
