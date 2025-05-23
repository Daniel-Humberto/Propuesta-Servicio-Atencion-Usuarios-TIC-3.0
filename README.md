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




## 🖼️ Imágenes del Proyecto

A continuación se listan y describen las imágenes contenidas en las distintas carpetas del proyecto.


---


### 📌 1. Diagramas

Estas imágenes representan el modelo de datos y la arquitectura general del sistema.

- **`DataBase`**  
  ![DataBase](Imagenes/Diagramas/DataBase.png)  
  Diagrama de la base de datos utilizada en el sistema.

- **`Diagrama`**  
  ![Diagrama](Imagenes/Diagramas/Diagrama.png)  
  Vista del flujo general del sistema.


---


### 📌 2. Interfaz HTML - CSS - JS

#### 🔐 Login

- **`Login`**  
  ![Login](Imagenes/HTML%20-%20CSS%20-%20JS/Login.png)  
  Pantalla principal de inicio de sesión del sistema.


---


#### 👨‍💼 Módulo Administrador

Capturas de las diferentes vistas disponibles para el administrador del sistema.

| Vista | Imagen |
|-------|--------|
| Vista 1 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/Admin/1.png) |
| Vista 2 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/Admin/2.png) |
| Vista 3 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/Admin/3.png) |
| Vista 4 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/Admin/4.png) |
| Vista 5 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/Admin/5.png) |
| Vista 6 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/Admin/6.png) |
| Vista 7 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/Admin/7.png) |
| Vista 8 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/Admin/8.png) |
| Vista 9 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/Admin/9.png) |


---


#### 👤 Módulo Usuario

Capturas del panel del usuario final que reporta incidencias.

| Vista | Imagen |
|-------|--------|
| Vista 1 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/User/1.png) |
| Vista 2 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/User/2.png) |
| Vista 3 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/User/3.png) |
| Vista 4 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/User/4.png) |
| Vista 5 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/User/5.png) |
| Vista 6 | ![](Imagenes/HTML%20-%20CSS%20-%20JS/User/6.png) |


---


### ⚛️ 3. Interfaz en React

Capturas de una versión alternativa del sistema desarrollada con React.

| Vista | Imagen |
|-------|--------|
| Vista 1 | ![](Imagenes/React/1.png) |
| Vista 2 | ![](Imagenes/React/2.png) |
| Vista 3 | ![](Imagenes/React/3.png) |
| Vista 4 | ![](Imagenes/React/4.png) |
| Vista 5 | ![](Imagenes/React/5.png) |
| Vista 6 | ![](Imagenes/React/6.png) |


---
