// Agrega interactividad a las filas de la tabla
document.querySelectorAll('.table tbody tr').forEach(row => {
    row.addEventListener('click', () => {
        const ticketNumber = row.querySelector('td').textContent.trim();
        const link = `TicketChat${ticketNumber}.html`;
        window.location.href = link;
    });
});
