document.addEventListener('DOMContentLoaded', function() {
    // Update current date
    updateCurrentDate();

    // Setup form validation
    setupFormValidation();

    // Setup dependent dropdowns
    setupDependentDropdowns();
});

// Function to update current date
function updateCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const now = new Date();

    // Arrays for day and month names in Spanish
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    // Format date as "Día, DD de Mes de AAAA"
    const diaSemana = diasSemana[now.getDay()];
    const dia = now.getDate();
    const mes = meses[now.getMonth()];
    const anio = now.getFullYear();

    const fechaFormateada = `${diaSemana}, ${dia} de ${mes} de ${anio}`;
    dateElement.textContent = fechaFormateada;
}

// Function to setup form validation
function setupFormValidation() {
    const form = document.getElementById('ticket-form');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Validate subject
        const asunto = document.getElementById('asunto');
        if (!asunto.value.trim()) {
            markInvalid(asunto, 'El asunto es obligatorio');
            isValid = false;
        } else {
            markValid(asunto);
        }

        // Validate details
        const detalle = document.getElementById('detalle');
        if (!detalle.value.trim()) {
            markInvalid(detalle, 'El detalle de la solicitud es obligatorio');
            isValid = false;
        } else {
            markValid(detalle);
        }

        // Validate service
        const servicio = document.getElementById('servicio');
        if (servicio.value === '') {
            markInvalid(servicio, 'Debe seleccionar un servicio');
            isValid = false;
        } else {
            markValid(servicio);
        }

        // Prevent form submission if not valid
        if (!isValid) {
            event.preventDefault();
        }
    });
}

// Function to mark a field as invalid
function markInvalid(element, message) {
    element.classList.add('error');

    // Create or update error message
    let errorMessage = element.nextElementSibling;
    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
        errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.style.color = '#ef4444';
        errorMessage.style.fontSize = '12px';
        errorMessage.style.marginTop = '4px';
        element.parentNode.insertBefore(errorMessage, element.nextSibling);
    }

    errorMessage.textContent = message;
}
