<?php
session_start();
header("Content-Type: application/json");

// Configuración de la base de datos
$host = "localhost:3306";
$dbname = "uaslp";
$username = "root";  // Cambiar si tienes otra configuración
$password = "root";      // Cambiar si tienes otra configuración

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Error de conexión a la base de datos"]);
    exit();
}

// Obtener los datos del formulario
$email = $_POST["username"] ?? "";
$password = $_POST["password"] ?? "";

if (empty($email) || empty($password)) {
    echo json_encode(["success" => false, "message" => "Todos los campos son obligatorios"]);
    exit();
}

// Consultar usuario en la base de datos
$stmt = $pdo->prepare("SELECT id, email, password FROM users WHERE email = :email");
$stmt->bindParam(":email", $email);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && md5($password) === $user["password"]) {
    $_SESSION["user_id"] = $user["id"];
    $_SESSION["email"] = $user["email"];

    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Credenciales incorrectas"]);
}
?>
