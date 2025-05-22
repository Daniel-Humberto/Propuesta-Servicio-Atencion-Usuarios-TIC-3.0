document.addEventListener('DOMContentLoaded', function() {

// Funcionalidad de las pestañas
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    
// Cuadro de estado de los Tickets
    const ticketStatusCtx = document.getElementById('ticketStatusChart').getContext('2d');
    const ticketStatusChart = new Chart(ticketStatusCtx, {
        type: 'bar',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            datasets: [
                {
                    label: 'Resueltos',
                    data: [124, 145, 162, 139, 152, 137, 148, 156, 165, 159, 142, 132],
                    backgroundColor: 'rgb(0, 170, 0, 0.6)',
                    borderColor: 'rgb(0, 170, 0, 0.75)',
                    borderWidth: 1
                },
                {
                    label: 'Pendientes',
                    data: [12, 15, 8, 10, 14, 18, 16, 12, 9, 11, 13, 42],
                    backgroundColor: 'rgb(252, 187, 47, 0.6)',
                    borderColor: 'rgb(252, 187, 47, 0.75)',
                    borderWidth: 1
                },
                {
                    label: 'Cancelados',
                    data: [4, 6, 5, 3, 7, 4, 5, 6, 4, 5, 3, 8],
                    backgroundColor: 'rgba(200, 0, 0, 0.6)',
                    borderColor: 'rgb(125, 0, 0, 0.75)',
                    borderWidth: 1
                },
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            }
        }
    });
    

// Gráfico de tiempo de respuesta
    const responseTimeCtx = document.getElementById('responseTimeChart').getContext('2d');
    const responseTimeChart = new Chart(responseTimeCtx, {
        type: 'line',
        data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            datasets: [{
                label: 'Tiempo (días)',
                data: [1.2, 1.1, 1.3, 1.0, 0.9, 1.4, 1.6],
                fill: true,
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderColor: 'rgba(59, 130, 246, 1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Tiempo (días)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    
// Evento de clic a las filas de la tabla para navegar a los detalles del billete
    const tableRows = document.querySelectorAll('.table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', () => {
            window.location.href = 'Ticket.html';
        });
        row.style.cursor = 'pointer';
    });
});