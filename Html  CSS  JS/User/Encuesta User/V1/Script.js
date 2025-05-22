document.addEventListener('DOMContentLoaded', function() {
    // Update current date
    updateCurrentDate();

    // Setup form validation
    setupFormValidation();
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
    const form = document.getElementById('satisfaction-form');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Validate name
        const nombre = document.getElementById('nombre');
        if (!nombre.value.trim()) {
            markInvalid(nombre, 'El nombre es obligatorio');
            isValid = false;
        } else {
            markValid(nombre);
        }

        // Validate email
        const correo = document.getElementById('correo');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correo.value.trim() || !emailRegex.test(correo.value)) {
            markInvalid(correo, 'Ingrese un correo electrónico válido');
            isValid = false;
        } else {
            markValid(correo);
        }

        // Validate service
        const servicio = document.getElementById('servicio');
        if (servicio.value === '') {
            markInvalid(servicio, 'Debe seleccionar un servicio');
            isValid = false;
        } else {
            markValid(servicio);
        }

        // Validate service date
        const fechaServicio = document.getElementById('fecha-servicio');
        if (!fechaServicio.value) {
            markInvalid(fechaServicio, 'Debe seleccionar una fecha');
            isValid = false;
        } else {
            markValid(fechaServicio);
        }

        // Validate satisfaction rating
        const satisfaccionRadios = document.getElementsByName('satisfaccion');
        const satisfaccionSelected = Array.from(satisfaccionRadios).some(radio => radio.checked);
        if (!satisfaccionSelected) {
            markInvalidRadio(satisfaccionRadios[0], 'Debe seleccionar un nivel de satisfacción');
            isValid = false;
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

// Function to mark radio button group as invalid
function markInvalidRadio(element, message) {
    const parentContainer = element.closest('.form-group');

    // Remove existing error message
    const existingError = parentContainer.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Create error message
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.style.color = '#ef4444';
    errorMessage.style.fontSize = '12px';
    errorMessage.style.marginTop = '4px';
    errorMessage.textContent = message;

    parentContainer.appendChild(errorMessage);
}

// Function to mark field as valid
function markValid(element) {
    element.classList.remove('error');

    // Remove error message if exists
    const errorMessage = element.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
        errorMessage.remove();
    }
}