document.addEventListener('DOMContentLoaded', function() {
    // Current date tracking
    let currentDate = new Date();
    let currentWeekStart = getWeekStart(currentDate);

    // DOM Elements
    const monthlyCalendarGrid = document.getElementById('monthly-calendar-grid');
    const weeklyCalendarGrid = document.getElementById('weekly-calendar-grid');
    const currentMonthDisplay = document.getElementById('current-month');
    const currentWeekDisplay = document.getElementById('current-week');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const prevWeekBtn = document.getElementById('prev-week');
    const nextWeekBtn = document.getElementById('next-week');
    const addEventBtn = document.querySelector('.add-event-btn');
    const bookingModal = document.getElementById('booking-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const cancelBtn = document.querySelector('.cancel-btn');
    const bookingForm = document.getElementById('booking-form');
    const resourceCategorySelect = document.getElementById('resource-category');
    const resourceNameSelect = document.getElementById('resource-name');

    // Sample data for events/bookings
    const bookings = [
        {
            id: 1001,
            title: 'Capacitación SIIA',
            start: new Date(2025, 2, 5, 10, 0), // March 5, 2025, 10:00 AM
            end: new Date(2025, 2, 5, 12, 0),
            type: 'training',
            resource: 'Salón A-101',
            responsible: 'Juan Pérez'
        },
        {
            id: 1002,
            title: 'Préstamo de Proyector HD',
            start: new Date(2025, 2, 6, 9, 0), // March 6, 2025, 9:00 AM
            end: new Date(2025, 2, 8, 18, 0),
            type: 'equipment',
            resource: 'Proyector HD',
            responsible: 'María González'
        },
        {
            id: 1003,
            title: 'Conferencia Agenda Ambiental',
            start: new Date(2025, 2, 7, 14, 0), // March 7, 2025, 2:00 PM
            end: new Date(2025, 2, 7, 16, 0),
            type: 'room',
            resource: 'Auditorio Principal',
            responsible: 'Carlos Sánchez'
        },
        {
            id: 1004,
            title: 'Taller de Inventarios',
            start: new Date(2025, 2, 8, 9, 0), // March 8, 2025, 9:00 AM
            end: new Date(2025, 2, 8, 13, 0),
            type: 'training',
            resource: 'Laboratorio C',
            responsible: 'Ana López'
        },
        {
            id: 1005,
            title: 'Préstamo de Laptop Dell XPS',
            start: new Date(2025, 2, 10, 11, 0), // March 10, 2025, 11:00 AM
            end: new Date(2025, 2, 14, 17, 0),
            type: 'equipment',
            resource: 'Laptop Dell XPS',
            responsible: 'Roberto Martínez'
        },
        {
            id: 1006,
            title: 'Reunión de Coordinación',
            start: new Date(2025, 2, 12, 10, 0), // March 12, 2025, 10:00 AM
            end: new Date(2025, 2, 12, 11, 30),
            type: 'room',
            resource: 'Sala de Juntas',
            responsible: 'Laura Hernández'
        },
        {
            id: 1007,
            title: 'Capacitación Control de Inventarios',
            start: new Date(2025, 2, 15, 9, 0), // March 15, 2025, 9:00 AM
            end: new Date(2025, 2, 15, 14, 0),
            type: 'training',
            resource: 'Aula B-203',
            responsible: 'Pedro Ramírez'
        }
    ];

    // Sample resource data
    const resources = {
        room: ['Salón A-101', 'Salón A-102', 'Auditorio Principal', 'Laboratorio C', 'Sala de Juntas', 'Aula B-203'],
        equipment: ['Proyector HD', 'Laptop Dell XPS', 'Cámara de Video', 'Sistema de Audio', 'Pantalla Inteligente'],
        training: ['Capacitación SIIA', 'Taller de Inventarios', 'Control de Inventarios', 'Gestión Ambiental']
    };

    // Initialize calendars
    renderMonthlyCalendar(currentDate);
    renderWeeklyCalendar(currentWeekStart);
    updateMonthDisplay(currentDate);
    updateWeekDisplay(currentWeekStart);

    // Event Listeners
    prevMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderMonthlyCalendar(currentDate);
        updateMonthDisplay(currentDate);
    });

    nextMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderMonthlyCalendar(currentDate);
        updateMonthDisplay(currentDate);
    });

    prevWeekBtn.addEventListener('click', function() {
        currentWeekStart.setDate(currentWeekStart.getDate() - 7);
        renderWeeklyCalendar(currentWeek