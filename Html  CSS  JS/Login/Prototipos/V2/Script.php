<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "uaslp_login";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// Process login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['usuario'];
    $password = $_POST['contraseña'];

    // Hash the password for security (in real apps, use password_hash())
    $hashed_password = md5($password); // Note: MD5 is insecure; use password_hash() in production

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email AND password = :password");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $hashed_password);
    $stmt->execute();

    if ($stmt->rowCount() == 1) {
        // Successful login
        session_start();
        $_SESSION['user'] = $email;
        header("Location: dashboard.php"); // Redirect to a dashboard
    } else {
        echo "Correo o contraseña incorrectos. <a href='index.html'>Intentar de nuevo</a>";
    }
}
?>