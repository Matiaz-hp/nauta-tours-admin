# Panel Administrativo – Nauta Tours

Este repositorio contiene el **panel administrativo** del sistema web turístico **Nauta Tours**.

El panel administrativo permite al administrador gestionar la información que se muestra en la aplicación principal.

## 📌 Funcionalidades del panel admin

- Gestión de lugares turísticos
- Gestión de hospedajes
- Gestión de comidas típicas
- Gestión de bebidas típicas
- Moderación de comentarios
- Gestión de usuarios registrados

## 🧩 Arquitectura del sistema

El sistema **Nauta Tours** está dividido en dos aplicaciones independientes pero conectadas:

### 1. Aplicación principal (usuarios)
- Desarrollada en **Flutter Web (Dart)**
- Orientada a turistas y usuarios finales
- Repositorio:
  👉 https://github.com/Matiaz-hp/nauta-tours

### 2. Panel administrativo
- Desarrollado en **HTML, CSS y JavaScript**
- Uso exclusivo para administradores
- Este repositorio

Ambas aplicaciones utilizan el **mismo Firebase**, el cual actúa como backend compartido.

## 🔐 Acceso al panel administrativo

El acceso al panel administrativo está protegido mediante **Firebase Authentication**.  
Solo los usuarios con rol **administrador** pueden ingresar al sistema.

La aplicación principal incluye un botón o apartado que redirige a este panel administrativo.

## 🎓 Información académica

Proyecto académico – Entrega final  
Curso / Institución: _(opcional)_

---

© Nauta Tours
