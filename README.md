# Servicio-Atencion-Usuarios-TIC-3.0

Este proyecto es una aplicación web desarrollada como parte del servicio social en la Agenda Ambiental. Su objetivo es mejorar la gestión de recursos, servicios técnicos y solicitudes de usuarios mediante un sistema integral y automatizado.

---

## 📌 Resumen

La aplicación permite a usuarios registrar solicitudes (tickets) según su perfil. Los tickets se gestionan con un sistema de mensajería directa entre usuarios y administradores, y se cierran mediante una confirmación mutua. Posteriormente, se solicita al usuario una encuesta de satisfacción. También se incluye un buzón anónimo de sugerencias.

---

## 🛠️ Estructura del Sistema

* **Jerarquía funcional:**
  * **Procesos** → agrupan uno o más **Servicios**
  * **Servicios** → pueden requerir **Infraestructura**
* **Gestión por perfiles de usuario:**
  Roles definidos por permisos booleanos en la base de datos (`TipoUsuario`), adaptables a múltiples combinaciones por usuario.

---

## 🧠 Características Principales

* Solicitud de servicios mediante tickets
* Sistema de mensajería interna en cada ticket
* Evaluación post-servicio vía encuesta de satisfacción
* Buzón anónimo de sugerencias
* Asignación automática de tickets según carga de trabajo y permisos
* Panel de administración para gestión de procesos, servicios e infraestructura

---

## 🗃️ Base de Datos

Diseñada en MySQL con relaciones normalizadas para:

* Gestión de usuarios y roles (`Usuarios`, `TipoUsuario`)
* Control de accesos (`Permisos`)
* Asignación granular de administradores
* Ciclo completo de tickets y comunicación (`Tickets`, `ChatTicket`)
* Evaluación del servicio (`EncuestaSatisfaccion`)
* Canal abierto de retroalimentación (`BuzonSugerencias`)

<div align="center">
  <h3>📊 Modelo de Base de Datos</h3>
  <img src="Imagenes/Diagramas/DataBase.png" alt="Diagrama de Base de Datos" width="80%">
  <p><em>Estructura completa de la base de datos con todas las relaciones y entidades del sistema</em></p>
</div>

<div align="center">
  <h3>🔄 Diagrama de Flujo del Sistema</h3>
  <img src="Imagenes/Diagramas/Diagrama.png" alt="Diagrama de Flujo General" width="80%">
  <p><em>Flujo de procesos y arquitectura general del sistema de atención a usuarios</em></p>
</div>

---

## 💻 FrontEnd

Se contemplan tres enfoques de desarrollo:

1. **Laravel + HTML/CSS/JS** (Enfoque clásico)
   Simple, rápido y con buen rendimiento.

2. **Laravel Blade + React + ShadCN UI + Tailwind CSS** (Enfoque híbrido)
   Balance entre interactividad moderna y renderizado tradicional.

3. **Laravel + Next.js + React + ShadCN UI + Tailwind CSS** (SPA desacoplada)
   Arquitectura escalable y modular con experiencia fluida.

---

## 🖼️ Interfaces del Sistema

### 🔐 Pantalla de Acceso

<div align="center">
  <h4>Inicio de Sesión</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/Login.png" alt="Pantalla de Login" width="70%">
  <p><em>Interfaz principal para el acceso al sistema con autenticación segura</em></p>
</div>

---

### 👨‍💼 Panel de Administrador - Versión HTML/CSS/JS

<div align="center">
  <h4>Dashboard Principal</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/Admin/1.png" alt="Dashboard Admin 1" width="70%">
  <p><em>Vista general del panel administrativo con métricas y estadísticas</em></p>
</div>

<div align="center">
  <h4>Dashboard - Análisis de Rendimiento</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/Admin/2.png" alt="Dashboard Admin 2" width="70%">
  <p><em>Análisis detallado de rendimiento y KPIs del sistema</em></p>
</div>

<div align="center">
  <h4>Dashboard - Resumen Ejecutivo</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/Admin/3.png" alt="Dashboard Admin 3" width="70%">
  <p><em>Resumen ejecutivo con indicadores clave y tendencias</em></p>
</div>

<div align="center">
  <h4>Gestión de Tickets</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/Admin/4.png" alt="Tickets Admin" width="70%">
  <p><em>Panel de administración de tickets con filtros y estados en tiempo real</em></p>
</div>

<div align="center">
  <h4>Sistema de Chat por Ticket</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/Admin/5.png" alt="Chat Ticket Admin" width="70%">
  <p><em>Interfaz de comunicación directa con usuarios para resolución de incidencias</em></p>
</div>

<div align="center">
  <h4>Gestión de Operadores</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/Admin/6.png" alt="Operadores Admin" width="70%">
  <p><em>Panel de administración de personal técnico y asignación de roles</em></p>
</div>

<div align="center">
  <h4>Detalles de Operador</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/Admin/7.png" alt="Detalles Operador Admin" width="70%">
  <p><em>Vista detallada del perfil y rendimiento individual de cada operador</em></p>
</div>

<div align="center">
  <h4>Control de Inventario</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/Admin/8.png" alt="Inventario Admin" width="70%">
  <p><em>Sistema de gestión de recursos e infraestructura tecnológica</em></p>
</div>

<div align="center">
  <h4>Calendario de Actividades</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/Admin/9.png" alt="Calendario Admin" width="70%">
  <p><em>Planificación y seguimiento de mantenimientos y servicios programados</em></p>
</div>

---

### 👤 Panel de Usuario - Versión HTML/CSS/JS

<div align="center">
  <h4>Dashboard del Usuario</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/User/1.png" alt="Dashboard Usuario" width="70%">
  <p><em>Panel principal del usuario con acceso rápido a servicios y estado de solicitudes</em></p>
</div>

<div align="center">
  <h4>Formulario de Solicitudes</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/User/2.png" alt="Formulario Solicitudes" width="70%">
  <p><em>Interfaz intuitiva para la creación de nuevas solicitudes de servicio técnico</em></p>
</div>

<div align="center">
  <h4>Solicitud de Instalaciones</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/User/3.png" alt="Solicitud Instalaciones" width="70%">
  <p><em>Formulario especializado para solicitudes de instalación de equipos e infraestructura</em></p>
</div>

<div align="center">
  <h4>Mis Tickets</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/User/4.png" alt="Tickets Usuario" width="70%">
  <p><em>Vista de todas las solicitudes del usuario con seguimiento de estado en tiempo real</em></p>
</div>

<div align="center">
  <h4>Chat de Soporte</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/User/5.png" alt="Chat Ticket Usuario" width="70%">
  <p><em>Sistema de mensajería directa con el personal técnico asignado</em></p>
</div>

<div align="center">
  <h4>Encuesta de Satisfacción</h4>
  <img src="Imagenes/HTML%20-%20CSS%20-%20JS/User/6.png" alt="Encuesta Satisfacción" width="70%">
  <p><em>Evaluación del servicio recibido para mejora continua del sistema</em></p>
</div>

---

### ⚛️ Panel de Administrador - Versión React

<div align="center">
  <h4>Dashboard Moderno</h4>
  <img src="Imagenes/React/1.png" alt="Dashboard React" width="70%">
  <p><em>Interfaz moderna desarrollada en React con componentes interactivos y responsivos</em></p>
</div>

<div align="center">
  <h4>Gestión de Tickets Avanzada</h4>
  <img src="Imagenes/React/2.png" alt="Tickets React" width="70%">
  <p><em>Panel avanzado de tickets con filtros dinámicos y actualizaciones en tiempo real</em></p>
</div>

<div align="center">
  <h4>Lista de Conversaciones</h4>
  <img src="Imagenes/React/3.png" alt="Chats Ticket React" width="70%">
  <p><em>Vista organizada de todas las conversaciones activas con usuarios</em></p>
</div>

<div align="center">
  <h4>Chat Individual</h4>
  <img src="Imagenes/React/4.png" alt="Chat Ticket React" width="70%">
  <p><em>Interfaz de chat moderna con historial completo y funciones avanzadas</em></p>
</div>

<div align="center">
  <h4>Inventario Digital</h4>
  <img src="Imagenes/React/5.png" alt="Inventario React" width="70%">
  <p><em>Sistema digital de inventario con búsqueda avanzada y categorización automática</em></p>
</div>

<div align="center">
  <h4>Calendario Interactivo</h4>
  <img src="Imagenes/React/6.png" alt="Calendario React" width="70%">
  <p><em>Calendario interactivo con gestión de eventos y recordatorios automáticos</em></p>
</div>

---
