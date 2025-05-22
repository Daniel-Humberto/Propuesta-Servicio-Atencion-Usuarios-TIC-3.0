// Variables globales
let currentModule = 'bienes';
let inventarioData = [];
let currentPage = 1;
const itemsPerPage = 10;
let filteredData = [];

// Cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    initializeInventory();

    // Inicializar tooltips
    initTooltips();
});

// Datos de ejemplo para el inventario
const inventoryData = [
    {
        id: 'INV-2024-001',
        name: 'Escritorio ejecutivo',
        category: 'Mobiliario',
        location: 'Oficina 201',
        status: 'Activo',
        value: 12500,
        lastUpdate: '2024-01-15'
    },

    {
        id: 'INV-2024-011',
        name: 'Access Point Ubiquiti',
        category: 'Equipamiento de Red',
        location: 'Piso 2',
        status: 'Activo',
        value: 3800,
        lastUpdate: '2024-03-12'
    },
    {
        id: 'INV-2024-012',
        name: 'Microsoft Office 365',
        category: 'Software',
        location: 'N/A',
        status: 'Activo',
        value: 2800,
        lastUpdate: '2024-03-15'
    },
    {
        id: 'INV-2024-013',
        name: 'UPS APC 3000VA',
        category: 'Hardware',
        location: 'Sala de Servidores',
        status: 'Activo',
        value: 28000,
        lastUpdate: '2024-03-18'
    },
    {
        id: 'INV-2024-014',
        name: 'Mesa de juntas',
        category: 'Mobiliario',
        location: 'Sala de Conferencias',
        status: 'Baja',
        value: 15000,
        lastUpdate: '2024-03-20'
    },
    {
        id: 'INV-2024-015',
        name: 'Firewall Fortinet',
        category: 'Equipamiento de Red',
        location: 'Sala de Servidores',
        status: 'Activo',
        value: 45000,
        lastUpdate: '2024-03-22'
    }
];

// Datos de ejemplo para actividad reciente
const recentActivity = [
    {
        type: 'add',
        title: 'Nuevo equipo registrado',
        description: 'Se agregó Computadora Dell Latitude al inventario',
        time: '2 horas atrás'
    },
    {
        type: 'update',
        title: 'Actualización de estado',
        description: 'Switch Cisco cambió a estado Mantenimiento',
        time: '4 horas atrás'
    },
    {
        type: 'move',
        title: 'Cambio de ubicación',
        description: 'Escritorio ejecutivo movido a Oficina 201',
        time: '1 día atrás'
    }
];

// Inicializar el inventario
function initializeInventory() {
    console.log('Initializing inventory');
    // Inicializar datos
    filteredData = [...inventoryData];
    
    // Inicializar tabla
    updateTableContent();
    updatePagination();

    // Configurar eventos
    setupEventListeners();
}

// Actualizar el contenido de la tabla
function updateTableContent() {
    console.log('Updating table content');
    const tableBody = document.getElementById('inventoryTableBody');
    if (!tableBody) {
        console.error('Table body element not found');
        return;
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = filteredData.slice(start, end);

    console.log('Page data:', pageData);

    tableBody.innerHTML = pageData.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.location}</td>
            <td><span class="badge badge-${getStatusBadgeClass(item.status)}">${item.status}</span></td>
            <td>$${item.value.toLocaleString()}</td>
            <td>
                <button class="btn btn-icon" onclick="editItem('${item.id}')" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-icon" onclick="viewHistory('${item.id}')" title="Historial">
                    <i class="fas fa-history"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Actualizar la paginación
function updatePagination() {
    console.log('Updating pagination');
    const currentPageElement = document.getElementById('currentPage');
    const totalPagesElement = document.getElementById('totalPages');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    if (!currentPageElement || !totalPagesElement || !prevPageButton || !nextPageButton) {
        console.error('Pagination elements not found');
        return;
    }

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    currentPageElement.textContent = currentPage;
    totalPagesElement.textContent = totalPages;

    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;
}

// Inicializar el gráfico de categorías
function initializeCategoryChart() {
    const ctx = document.getElementById('categoryChart').getContext('2d');
    
    // Calcular datos por categoría
    const categoryData = inventoryData.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
    }, {});

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(categoryData),
            datasets: [{
                data: Object.values(categoryData),
                backgroundColor: [
                    'rgba(16, 185, 129, 0.7)',  // Verde
                    'rgba(59, 130, 246, 0.7)',  // Azul
                    'rgba(245, 158, 11, 0.7)',  // Ámbar
                    'rgba(99, 102, 241, 0.7)'   // Índigo
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Inicializar la lista de actividad reciente
function initializeRecentActivity() {
    const activityList = document.getElementById('recentActivity');
    
    activityList.innerHTML = recentActivity.map(activity => `
        <div class="activity-item">
            <div class="activity-icon ${getActivityIconClass(activity.type)}">
                <i class="fas ${getActivityIcon(activity.type)}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-description">${activity.description}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        </div>
    `).join('');
}

// Configurar event listeners
function setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filteredData = inventoryData.filter(item => 
                item.name.toLowerCase().includes(searchTerm) ||
                item.id.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm)
            );
            currentPage = 1;
            updateTableContent();
            updatePagination();
        });
    }

    // Paginación
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    if (prevPageButton) {
        prevPageButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updateTableContent();
                updatePagination();
            }
        });
    }

    if (nextPageButton) {
        nextPageButton.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredData.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                updateTableContent();
                updatePagination();
            }
        });
    }

    // Evento para filtrar por tipo
    const filtroTipo = document.getElementById('filtroTipo');
    if (filtroTipo) {
        filtroTipo.addEventListener('change', function() {
            filtrarInventarioPorTipo(this.value);
        });
    }

    // Eventos para el modal
    const btnNuevoBien = document.getElementById('btnNuevoBien');
    if (btnNuevoBien) {
        btnNuevoBien.addEventListener('click', function() {
            abrirModalNuevoBien();
        });
    }

    // Cerrar modal con el botón X
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            cerrarModal('modalNuevoBien');
        });
    }

    // Cerrar modal con el botón cancelar
    const btnCancelar = document.getElementById('btnCancelar');
    if (btnCancelar) {
        btnCancelar.addEventListener('click', function() {
            cerrarModal('modalNuevoBien');
        });
    }
}

// Funciones auxiliares
function getStatusBadgeClass(status) {
    switch (status) {
        case 'Activo': return 'success';
        case 'Mantenimiento': return 'warning';
        case 'Baja': return 'danger';
        default: return 'info';
    }
}

function getActivityIconClass(type) {
    switch (type) {
        case 'add': return 'success';
        case 'update': return 'info';
        case 'move': return 'warning';
        default: return 'primary';
    }
}

function getActivityIcon(type) {
    switch (type) {
        case 'add': return 'fa-plus';
        case 'update': return 'fa-sync';
        case 'move': return 'fa-arrows-alt';
        default: return 'fa-info';
    }
}

// Funciones de acción
function editItem(id) {
    console.log('Editar item:', id);
    // Implementar lógica de edición
}

function viewHistory(id) {
    console.log('Ver historial:', id);
    // Implementar lógica para ver historial
}

// Exportar funciones para uso global
window.editItem = editItem;
window.viewHistory = viewHistory;
