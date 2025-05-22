// Redirige al perfil del operador (opcional)
document.querySelectorAll('.table tbody tr').forEach(row => {
    row.addEventListener('click', () => {
        const name = row.querySelector('td').textContent.trim();
        const formattedName = name.replace(/\s+/g, '');
        const link = `Operador_${formattedName}.html`; // Ejemplo: Operador_MariaLopez.html
        window.location.href = link;
    });
});