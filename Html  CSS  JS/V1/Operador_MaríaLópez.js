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

function guardarPreferencias() {
    const checkboxes = document.querySelectorAll('input[name="tipo"]:checked');
    const tiposSeleccionados = Array.from(checkboxes).map(cb => cb.value);

    const resultadoDiv = document.getElementById("resultado");

    if (tiposSeleccionados.length === 0) {
        resultadoDiv.style.color = "red";
        resultadoDiv.textContent = "Por favor, selecciona al menos un tipo de ticket.";
    } else {
        resultadoDiv.style.color = "green";
        resultadoDiv.textContent = "Preferencias guardadas: " + tiposSeleccionados.join(", ");
        // Aquí podrías hacer una petición a un backend para guardar las preferencias si lo deseas.
        console.log("Preferencias de María López:", tiposSeleccionados);
    }
}
