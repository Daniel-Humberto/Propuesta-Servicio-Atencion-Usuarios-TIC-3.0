// Variables globales
let currentDate = new Date();
let currentView = 'month';
let events = [];

// Datos de ejemplo para eventos
const sampleEvents = [
    {
        id: 1,
        title: 'Mantenimiento Servidor Principal',
        date: '2024-03-20',
        time: '10:00',
        type: 'maintenance',
        description: 'Actualización de software y respaldo de datos',
        status: 'pending'
    },
    {
        id: 2,
        title: 'Reunión Equipo TI',
        date: '2024-03-20',
        time: '14:00',
        type: 'meeting',
        description: 'Revisión de proyectos en curso',
        status: 'confirmed'
    },
    {
        id: 3,
        title: 'Capacitación Windows 11',
        date: '2024-03-21',
        time: '09:00',
        type: 'task',
        description: 'Sesión de capacitación para personal administrativo',
        status: 'confirmed'
    },
    {
        id: 4,
        title: 'Backup Semanal',
        date: '2024-03-22',
        time: '23:00',
        type: 'maintenance',
        description: 'Respaldo automático de bases de datos',
        status: 'pending'
    },
    {
        id: 5,
        title: 'Revisión de Tickets',
        date: '2024-03-23',
        time: '11:00',
        type: 'task',
        description: 'Análisis y asignación de tickets pendientes',
        status: 'confirmed'
    }
];

// Cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar datos
    events = [...sampleEvents];
    
    // Inicializar calendario
    initializeCalendar();
    
    // Configurar eventos
    setupEventListeners();
    
    // Actualizar vista inicial
    updateView();
});

// Inicializar calendario
function initializeCalendar() {
    updateMonthYear();
    generateCalendarGrid();
    updateEventList();
}

// Actualizar el mes y año mostrados
function updateMonthYear() {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    document.getElementById('currentMonthYear').textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
}

// Generar la cuadrícula del calendario
function generateCalendarGrid() {
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';

    // Agregar encabezados de días
    const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    weekDays.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });

    // Obtener el primer día del mes
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    // Ajustar el primer día para que la semana comience en lunes
    let firstDayIndex = firstDay.getDay() - 1;
    if (firstDayIndex === -1) firstDayIndex = 6;

    // Agregar días del mes anterior
    const prevMonthDays = firstDayIndex;
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    for (let i = prevMonthDays - 1; i >= 0; i--) {
        const dayElement = createDayElement(prevMonth.getDate() - i, 'other-month');
        calendarGrid.appendChild(dayElement);
    }

    // Agregar días del mes actual
    const today = new Date();
    for (let i = 1; i <= lastDay.getDate(); i++) {
        const isToday = today.getDate() === i && 
                       today.getMonth() === currentDate.getMonth() && 
                       today.getFullYear() === currentDate.getFullYear();
        const dayElement = createDayElement(i, isToday ? 'today' : '');
        calendarGrid.appendChild(dayElement);
    }

    // Agregar días del mes siguiente
    const remainingDays = 42 - (prevMonthDays + lastDay.getDate());
    for (let i = 1; i <= remainingDays; i++) {
        const dayElement = createDayElement(i, 'other-month');
        calendarGrid.appendChild(dayElement);
    }
}

// Crear elemento de día
function createDayElement(dayNumber, className = '') {
    const dayElement = document.createElement('div');
    dayElement.className = `calendar-day ${className}`;
    
    const dayNumberElement = document.createElement('div');
    dayNumberElement.className = 'day-number';
    dayNumberElement.textContent = dayNumber;
    dayElement.appendChild(dayNumberElement);

    // Agregar eventos del día si existen
    const dayEvents = getEventsForDay(dayNumber);
    dayEvents.forEach(event => {
        const eventElement = createEventElement(event);
        dayElement.appendChild(eventElement);
    });

    return dayElement;
}

// Crear elemento de evento
function createEventElement(event) {
    const eventElement = document.createElement('div');
    eventElement.className = `event-item ${event.type}`;
    eventElement.innerHTML = `
        <i class="fas ${getEventIcon(event.type)}"></i>
        <span>${event.time} - ${event.title}</span>
    `;
    eventElement.addEventListener('click', () => showEventDetails(event));
    return eventElement;
}

// Obtener eventos para un día específico
function getEventsForDay(day) {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const dateString = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateString);
}

// Obtener icono según el tipo de evento
function getEventIcon(type) {
    switch (type) {
        case 'meeting': return 'fa-users';
        case 'task': return 'fa-tasks';
        case 'reminder': return 'fa-bell';
        case 'maintenance': return 'fa-tools';
        default: return 'fa-calendar';
    }
}

// Actualizar lista de eventos
function updateEventList() {
    const eventList = document.getElementById('eventList');
    const today = new Date();
    const upcomingEvents = events
        .filter(event => new Date(`${event.date} ${event.time}`) >= today)
        .sort((a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`))
        .slice(0, 5);

    eventList.innerHTML = upcomingEvents.map(event => `
        <div class="event-item">
            <div class="event-icon ${event.type}">
                <i class="fas ${getEventIcon(event.type)}"></i>
            </div>
            <div class="event-content">
                <div class="event-title">${event.title}</div>
                <div class="event-time">${formatDate(event.date)} ${event.time}</div>
            </div>
        </div>
    `).join('');
}

// Formatear fecha
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
        day: 'numeric',
        month: 'short'
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Navegación del calendario
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateView();
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateView();
    });

    document.getElementById('todayBtn').addEventListener('click', () => {
        currentDate = new Date();
        updateView();
    });

    // Selector de vista
    document.querySelectorAll('.view-selector button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.view-selector .active').classList.remove('active');
            button.classList.add('active');
            currentView = button.dataset.view;
            updateView();
        });
    });

    // Botón de nuevo evento
    document.getElementById('addEventBtn').addEventListener('click', () => {
        showEventModal();
    });

    // Modal de evento
    document.getElementById('closeModal').addEventListener('click', () => {
        hideEventModal();
    });

    document.getElementById('cancelEvent').addEventListener('click', () => {
        hideEventModal();
    });

    document.getElementById('saveEvent').addEventListener('click', () => {
        saveEvent();
    });
}

// Actualizar vista
function updateView() {
    updateMonthYear();
    generateCalendarGrid();
    updateEventList();
}

// Mostrar modal de evento
function showEventModal(event = null) {
    const modal = document.getElementById('eventModal');
    const form = document.getElementById('eventForm');
    
    if (event) {
        // Modo edición
        form.elements.eventTitle.value = event.title;
        form.elements.eventDate.value = event.date;
        form.elements.eventTime.value = event.time;
        form.elements.eventType.value = event.type;
        form.elements.eventDescription.value = event.description;
    } else {
        // Modo nuevo evento
        form.reset();
    }
    
    modal.style.display = 'block';
}

// Ocultar modal de evento
function hideEventModal() {
    const modal = document.getElementById('eventModal');
    modal.style.display = 'none';
}

// Guardar evento
function saveEvent() {
    const form = document.getElementById('eventForm');
    
    const newEvent = {
        id: events.length + 1,
        title: form.elements.eventTitle.value,
        date: form.elements.eventDate.value,
        time: form.elements.eventTime.value,
        type: form.elements.eventType.value,
        description: form.elements.eventDescription.value,
        status: 'pending'
    };

    events.push(newEvent);
    hideEventModal();
    updateView();
}

// Mostrar detalles del evento
function showEventDetails(event) {
    // Aquí se implementaría la lógica para mostrar los detalles del evento
    console.log('Detalles del evento:', event);
}

