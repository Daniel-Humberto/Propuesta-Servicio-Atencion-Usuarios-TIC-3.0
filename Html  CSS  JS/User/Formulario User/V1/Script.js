document.addEventListener('DOMContentLoaded', function() {
    // Actualizar la fecha actual
    updateCurrentDate();
    
    // Configurar validación del formulario
    setupFormValidation();
    
    // Configurar dependencia entre unidad y subunidad
    setupDependentDropdowns();
});

// Función para actualizar la fecha actual
function updateCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    
    // Arreglos para los nombres de días y meses en español
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    // Formatear la fecha como "Día, DD de Mes de AAAA"
    const diaSemana = diasSemana[now.getDay()];
    const dia = now.getDate();
    const mes = meses[now.getMonth()];
    const anio = now.getFullYear();
    
    const fechaFormateada = `${diaSemana}, ${dia} de ${mes} de ${anio}`;
    dateElement.textContent = fechaFormateada;
}

// Función para configurar la validación del formulario
function setupFormValidation() {
    const form = document.getElementById('ticket-form');
    
    form.addEventListener('submit', function(event) {
        let isValid = true;
        
        // Validar el campo de asunto
        const asunto = document.getElementById('asunto');
        if (!asunto.value.trim()) {
            markInvalid(asunto, 'El asunto es obligatorio');
            isValid = false;
        } else {
            markValid(asunto);
        }
        
        // Validar el campo de detalle
        const detalle = document.getElementById('detalle');
        if (!detalle.value.trim()) {
            markInvalid(detalle, 'El detalle de la solicitud es obligatorio');
            isValid = false;
        } else {
            markValid(detalle);
        }
        
        // Validar el campo de servicio
        const servicio = document.getElementById('servicio');
        if (servicio.value === '') {
            markInvalid(servicio, 'Debe seleccionar un servicio');
            isValid = false;
        } else {
            markValid(servicio);
        }
        
        // Si no es válido, prevenir el envío del formulario
        if (!isValid) {
            event.preventDefault();
        }
    });
}

// Función para marcar un campo como inválido
function markInvalid(element, message) {
    element.style.borderColor = 'red';
    
    // Crear o actualizar mensaje de error
    let errorMessage = element.nextElementSibling;
    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
        errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '12px';
        errorMessage.style.marginTop = '3px';
        element.parentNode.insertBefore(errorMessage, element.nextSibling);
    }
    
    errorMessage.textContent = message;
}

// Función para marcar un campo como válido
function markValid(element) {
    element.style.borderColor = '';
    
    // Eliminar mensaje de error si existe
    const errorMessage = element.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
        errorMessage.remove();
    }
}

// Función para configurar la dependencia entre unidad y subunidad
function setupDependentDropdowns() {
    const unidadSelect = document.getElementById('unidad');
    const subunidadSelect = document.getElementById('subunidad');
    
    // Datos de ejemplo para las subunidades por unidad
    const subunidadesPorUnidad = {
        '1': [
            { id: '1', nombre: 'AGENDA AMBIENTAL DE LA UASLP' },
            { id: '2', nombre: 'OTRA SUBUNIDAD DE AGENDA AMBIENTAL' }
        ],
        '2': [
            { id: '3', nombre: 'DEPARTAMENTO DE SISTEMAS' },
            { id: '4', nombre: 'DEPARTAMENTO DE CIVIL' }
        ],
        '3': [
            { id: '5', nombre: 'DEPARTAMENTO DE ANATOMÍA' },
            { id: '6', nombre: 'DEPARTAMENTO DE FISIOLOGÍA' }
        ],
        '4': [
            { id: '7', nombre: 'DEPARTAMENTO DE DERECHO CIVIL' },
            { id: '8', nombre: 'DEPARTAMENTO DE DERECHO PENAL' }
        ]
    };
    
    // Función para actualizar las subunidades basadas en la unidad seleccionada
    function actualizarSubunidades() {
        const unidadId = unidadSelect.value;
        const subunidades = subunidadesPorUnidad[unidadId] || [];
        
        // Limpiar opciones actuales
        subunidadSelect.innerHTML = '';
        
        // Agregar nuevas opciones
        subunidades.forEach(subunidad => {
            const option = document.createElement('option');
            option.value = subunidad.id;
            option.textContent = subunidad.nombre;
            subunidadSelect.appendChild(option);
        });
    }
    
    // Actualizar subunidades cuando cambie la unidad
    unidadSelect.addEventListener('change', actualizarSubunidades);
    
    // Inicializar subunidades con la unidad actual
    actualizarSubunidades();
}