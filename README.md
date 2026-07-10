# 👠 Velvet Step - Zapatería Online Premium

¡Bienvenido a **Velvet Step**! Este proyecto es una aplicación web moderna y elegante para una zapatería de diseño artesanal. Ha sido desarrollado como el proyecto final/práctico para un curso de programación, combinando un diseño visual sofisticado con interactividad en el lado del cliente.

La interfaz destaca por un estilo de lujo relajado, estructurada con una paleta de colores cuidada (tonos crema y vino profundo `#5a1827`) y una tipografía estilizada (_Raleway_).

---

## 🚀 Características Principales

- **Diseño Totalmente Responsive:** Interfaz adaptada dinámicamente mediante Bootstrap para dispositivos móviles, tabletas y ordenadores de escritorio.
- **Sección "Conócenos":** Presentación de marca con efectos visuales dinámicos de zoom integrados mediante CSS puro (`transform: scale`).
- **Catálogo de Colecciones:** Exhibición de líneas de calzado (_Línea Ejecutiva, Urban Style y Edición Confort_) estructuradas mediante tarjetas estéticas.
- **carrusel interactivo:** Sección de testimonios de clientes con transiciones fluidas a través de componentes nativos de Bootstrap.
- **Bolsa de la Compra Interactiva:** Lógica con JavaScript para interactuar con el carrito del usuario.
- **Formulario de Contacto Operativo:** Validación nativa y control de envíos mediante eventos de JavaScript con respuestas amigables al usuario.
- **Footer Automatizado:** Actualización dinámica del año actual mediante manejo del DOM para evitar obsolescencia en el diseño.

---

## 🛠️ Tecnologías Utilizadas

El proyecto fue construido utilizando tecnologías estándar del desarrollo web frontend:

- **HTML5:** Estructura semántica avanzada (uso de etiquetas `nav`, `section`, `article`, `footer`, etc.) optimizada para SEO y accesibilidad.
- **CSS3 Personalizado:** Estilos a medida para tipografías locales (`@font-face`), transiciones fluidas de velocidad (`transition: all 0.3s ease`) y filtros de brillo adaptativos.
- **Bootstrap 5.3 & Icons:** Framework utilizado de forma local (archivos optimizados `.min.css` y bundles JS incluidos en el proyecto) para asegurar la máxima velocidad y rejilla responsive.
- **JavaScript (ES6+):** Programación asíncrona y estructurada basada en el evento `DOMContentLoaded` para la manipulación limpia del DOM y gestión de formularios.

---

## 📂 Estructura del Proyecto

El repositorio mantiene una arquitectura de carpetas limpia y estándar:

```text
├── css/
│   ├── bootstrap.min.css     # Framework CSS local
│   ├── bootstrap-icons.css   # Biblioteca de iconos de Bootstrap
│   └── estilos.css           # Estilos personalizados (Fuentes, HOVER, Colores)
├── fonts/
│   ├── Raleway-Regular.ttf   # Tipografía corporativa normal
│   └── Raleway-Bold.ttf      # Tipografía corporativa negrita
├── image/
│   ├── favicon.ico           # Icono de pestaña personalizado
│   └── [imágenes_proyecto]   # Recursos gráficos del catálogo y testimonios
├── js/
│   ├── bootstrap.bundle.min.js # Scripts de comportamiento Bootstrap
│   └── archivo.js            # Lógica JS personalizada de la aplicación
├── index.html                # Archivo raíz principal
└── README.md                 # Documentación del proyecto

Autor
WebsByJimenez

[🔗 Haz clic aquí para ver la aplicación en vivo](https://websbyjimenez.github.io/WEB_ZAPATERIA/)

```
