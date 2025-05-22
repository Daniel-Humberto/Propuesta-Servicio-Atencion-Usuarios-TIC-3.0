// Agrega interactividad a las filas de la tabla
document.querySelectorAll('.table tbody tr').forEach(row => {
    row.addEventListener('click', () => {
        alert(`Detalles del ticket ${row.querySelector('td').textContent}`);
    });
});