# Frontend Almazara - Catálogo de Productos Artesanales 🏺🌾

![License](https://img.shields.io/badge/Licencia-CC%20BY--NC%204.0-lightgrey.svg)
![React](https://img.shields.io/badge/React-18.0.0-61DAFB?logo=react)
![Less](https://img.shields.io/badge/Less-4.2.2-1D365D?logo=less)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker)

Una aplicación web frontend desarrollada en React que muestra un catálogo de productos artesanales tradicionales. Diseñada para preservar y compartir recetas de productos que han formado parte de nuestra cultura gastronómica a lo largo del tiempo.

---

## Descripción 📌

Este proyecto frontend presenta **Almazara**, una plataforma web dedicada a mostrar productos artesanales en formato de lista, con el objetivo de:

- **React** como framework principal para la interfaz de usuario
- **Less** para el preprocesamiento y organización de estilos CSS
- **Vite** como herramienta de desarrollo y build
- **Docker** para la containerización y despliegue

Especialmente enfocado en:
- Preservación del patrimonio gastronómico tradicional
- Aprendizaje y práctica de tecnologías frontend modernas
- Implementación de arquitectura de componentes reutilizables
- Experiencia de usuario intuitiva para la navegación de productos

---

## Funcionalidades clave 🔑

- 📱 **Interfaz responsive** desarrollada con React y Bootstrap
- 🎨 **Estilos personalizados** con Less y sistema de variables
- 📋 **Listado de productos** con componentes modulares
- 🔍 **Páginas de contenido** para mostrar detalles y recetas
- 🚀 **Build optimizado** con Vite para desarrollo rápido
- 🐳 **Containerización** con Docker para despliegue sencillo
- ⚡ **Hot Module Replacement** para desarrollo en tiempo real

---

## Stack Tecnológico 🛠️

**Frontend Core:**
- React 18.0.0
- React Router DOM para navegación
- React Bootstrap para componentes UI

**Estilos y UI:**
- Less 4.2.2 para preprocesamiento CSS
- Material-UI (MUI) para iconos y componentes adicionales
- Bootstrap 5.3.3 para el sistema de grid

**Herramientas de Desarrollo:**
- Vite 6.1.0 como bundler y servidor de desarrollo
- Gulp 5.0.0 para automatización de tareas Less
- ESLint para linting y calidad de código
- Concurrently para ejecutar múltiples procesos

---

## Estructura del Proyecto 📁
```
src/
├── components/ # Componentes reutilizables
│ ├── itemList/ # Componentes para listas de productos
│ ├── navbar/ # Barra de navegación
│ └── textArea/ # Componentes de texto
├── pages/ # Páginas principales
│ ├── Content/ # Páginas de contenido y productos
│ ├── Login/ # Sistema de autenticación
│ └── StatusPages/ # Páginas de estado (404, etc.)
├── Styles/ # Estilos organizados
│ ├── less/ # Archivos fuente Less
│ └── css/ # CSS compilado
└── context/ # Context API de React
```

---

## Configuración y Uso 🚀

### **Desarrollo Local**
Instalar dependencias
npm install

Ejecutar en modo desarrollo (React + Gulp simultáneo)
npm run dev

Solo compilación de estilos Less
npm run gulp


### **Build y Despliegue**

Crear build de producción
npm run build

Vista previa del build
npm run preview

### **Docker**

Construir imagen Docker
docker build -t almazara-frontend .

Ejecutar contenedor
docker run -p 3000:3000 almazara-frontend

---

## Características Técnicas ⚙️

- **Automatización de estilos**: Gulp compila automáticamente archivos Less a CSS
- **Desarrollo concurrente**: Vite y Gulp funcionan simultáneamente para desarrollo fluido
- **Arquitectura modular**: Componentes organizados por funcionalidad
- **Sistema de variables**: Less permite mantener consistencia visual
- **Containerización completa**: Dockerfile optimizado para producción
- **Linting automatizado**: ESLint configurado para mantener calidad de código

---

## Licencia 📜

Este proyecto se distribuye bajo **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**:
- ✅ Permite uso privado, modificaciones y aprendizaje
- ✅ Puedes compartir y adaptar el código
- ❌ Prohibido uso comercial o lucrativo
- ⚖️ [Ver licencia completa](https://creativecommons.org/licenses/by-nc/4.0/deed.es)

---

## Autor 👨💻

**Antonio Mallen**  
[![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?logo=github)](https://github.com/AntonioMallen)

*¿Preguntas o sugerencias?* ¡Abre un *issue* o contribuye al proyecto!

