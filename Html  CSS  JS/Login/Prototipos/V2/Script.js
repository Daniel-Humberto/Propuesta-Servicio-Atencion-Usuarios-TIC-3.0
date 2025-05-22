document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('usuario').value;
    const password = document.getElementById('contraseña').value;

    if (!email.includes('@uaslp.mx')) {
        alert('Por favor, ingrese un correo institucional válido (terminado en @uaslp.mx)');
        return;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    // Submit the form if validation passes
    this.submit();
});