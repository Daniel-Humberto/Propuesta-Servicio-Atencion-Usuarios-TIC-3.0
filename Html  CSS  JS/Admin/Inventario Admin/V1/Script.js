// Variables globales
let currentModule = 'bienes';
let inventarioData = [];

// Cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar eventos para los botones y elementos interactivos
    initEvents();

    // Cargar datos iniciales
    cargarDatosIniciales();

    // Inicializar tooltips
    initTooltips();
});



// Inicializar eventos
function initEvents() {
    // Agregar interactividad a las filas de la tabla
    document.querySelectorAll('#tablaInventario tbody tr').forEach(row => {
        row.addEventListener('click', function(e) {
            // Si se hizo clic en un botón de acción, no seleccionar la fila
            if (e.target.closest('.btn-icon') || e.target.closest('.action-buttons')) {
                return;
            }

            // Obtener el código de inventario (primera celda)
            const codigo = this.querySelector('td').textContent;
            mostrarDetalleInventario(codigo);
        });
    });

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
