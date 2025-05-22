<?php
session_start();
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Prepared statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, hash('sha256', $password));
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        // Login successful
        $_SESSION['username'] = $username;
        header("Location: dashboard.php");
        exit();
    } else {
        // Login failed
        $error = "Credenciales inválidas. Intente nuevamente.";
    }
}
?>

<!DOCTYPE html>
<html>
<body>
<?php if(isset($error)) { ?>
    <div class="error"><?php echo $error; ?></div>
<?php } ?>
</body>
</html>