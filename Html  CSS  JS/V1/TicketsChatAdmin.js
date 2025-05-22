document.addEventListener('DOMContentLoaded', function() {

    const actionButtons = document.querySelectorAll('.actions button');

    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();

            switch(action) {
                case 'Reabrir Ticket':
                    alert('Reabriendo ticket #12345...');
                    break;
                case 'Imprimir Ticket':
                    window.print();
                    break;
                case 'Exportar a PDF':
                    alert('Exportando ticket #12345 a PDF...');
                    break;
            }
        });
    });


        // Evento para Tickets Relacionados
    const relatedTickets = document.querySelectorAll('.ticket-link');

    relatedTickets.forEach(ticket => {
        ticket.addEventListener('click', function(e) {
            e.preventDefault();
            const ticketId = this.textContent.trim();
            alert(`Navegando al ticket ${ticketId}...`);
        });
    });
});