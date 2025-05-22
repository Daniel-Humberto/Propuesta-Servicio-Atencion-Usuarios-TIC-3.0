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
    const resourceTypeFilter = document.getElementById('resource-type');

    function getWeekStart(date) {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
        return new Date(date.setDate(diff));
    }

    function updateMonthDisplay() {
        currentMonthDisplay.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    }

    function updateWeekDisplay() {
        let weekEnd = new Date(currentWeekStart);
        weekEnd.setDate(weekEnd.getDate() + 6);
        currentWeekDisplay.textContent = `${currentWeekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`;
    }

    function renderMonthlyCalendar() {
        monthlyCalendarGrid.innerHTML = '';
        let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        let lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        for (let i = 1; i <= lastDay.getDate(); i++) {
            let dayDiv = document.createElement('div');
            dayDiv.classList.add('calendar-day');
            dayDiv.textContent = i;
            monthlyCalendarGrid.appendChild(dayDiv);
        }
    }

    function renderWeeklyCalendar() {
        weeklyCalendarGrid.innerHTML = '';
        for (let i = 0; i < 7; i++) {
            let day = new Date(currentWeekStart);
            day.setDate(currentWeekStart.getDate() + i);
            let dayDiv = document.createElement('div');
            dayDiv.classList.add('calendar-day');
            dayDiv.textContent = day.toDateString();
            weeklyCalendarGrid.appendChild(dayDiv);
        }
    }

    prevMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateMonthDisplay();
        renderMonthlyCalendar();
    });

    nextMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateMonthDisplay();
        renderMonthlyCalendar();
    });

    prevWeekBtn.addEventListener('click', function() {
        currentWeekStart.setDate(currentWeekStart.getDate() - 7);
        updateWeekDisplay();
        renderWeeklyCalendar();
    });

    nextWeekBtn.addEventListener('click', function() {
        currentWeekStart.setDate(currentWeekStart.getDate() + 7);
        updateWeekDisplay();
        renderWeeklyCalendar();
    });

    addEventBtn.addEventListener('click', function() {
        bookingModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        bookingModal.style.display = 'none';
    });

    cancelBtn.addEventListener('click', function() {
        bookingModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === bookingModal) {
            bookingModal.style.display = 'none';
        }
    });

    // Initial rendering
    updateMonthDisplay();
    updateWeekDisplay();
    renderMonthlyCalendar();
    renderWeeklyCalendar();
});

