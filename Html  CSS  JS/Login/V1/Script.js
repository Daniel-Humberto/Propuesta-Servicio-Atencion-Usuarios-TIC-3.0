    document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita la recarga de la página

        const formData = new FormData(loginForm);

        fetch("Script.php", {
            method: "POST",
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = "IndexTickets.html"; // Redirige si el login es exitoso
                } else {
                    alert(data.message); // Muestra mensaje de error
                }
            })
            .catch(error => {
                console.error("Error en la petición:", error);
            });
    });
});
