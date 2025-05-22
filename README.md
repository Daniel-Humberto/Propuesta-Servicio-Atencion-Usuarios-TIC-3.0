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
