# 👠 Velvet Step - Zapatería Online Premium

¡Bienvenido a Velvet Step! Este proyecto es una aplicación web moderna y elegante para una zapatería de diseño artesanal. Ha sido desarrollado como proyecto práctico para un curso de programación, combinando un diseño visual cómodo con interactividad en el lado del cliente.

La interfaz destaca por un estilo de lujo relajado, estructurada con una paleta de colores cuidada (tonos crema y vino profundo `#5a1827`) y una tipografía estilizada (*Raleway*).

<p align="center">
<img src="image/favicon.ico" alt="AgeMetrics Preview" width="400">
</p>


## 🌐 Demo En Vivo

Puedes probar la aplicación en tiempo real ingresando al siguiente enlace:
👉 **[Ver App en GitHub Pages](https://WebsByJimenez.github.io/velvet-step-shoes/)**

---

## 🚀 Características principales

* **Diseño Totalmente Responsive:** Interfaz adaptada dinámicamente mediante Bootstrap para dispositivos móviles, tabletas y ordenadores de escritorio.
* **Carga Dinámica de Datos (Fetch API):** Contenido de colecciones y testimonios desacoplados en archivos JSON para una arquitectura modular y escalable.
* **Sección "Conócenos":** Presentación de marca con efectos visuales dinámicos de zoom integrados mediante CSS puro (`transform: scale`).
* **Catálogo de Colecciones:** Exhibición de líneas de calzado cargadas dinámicamente mediante tarjetas estéticas.
* **Carrusel Interactivo:** Sección de testimonios de clientes alimentada desde JSON con transiciones fluidas.
* **Bolsa de la Compra Interactiva:** Lógica con JavaScript para interactuar con el carrito del usuario.
* **Formulario de Contacto Operativo:** Validación nativa y control de envíos mediante eventos de JavaScript con respuestas amigables al usuario.
* **Footer Automatizado:** Actualización dinámica del año actual mediante manejo del DOM para evitar obsolescencia en el diseño.

---

## 🛠️ Tecnologías Utilizadas

El proyecto fue construido utilizando tecnologías estándar del desarrollo web frontend:

* **HTML5:** Estructura semántica avanzada (uso de etiquetas `<nav>`, `<section>`, `<article>`, `<footer>`, etc.) optimizada para SEO y accesibilidad.
* **CSS3 Personalizado:** Estilos a medida para tipografías locales (`@font-face`), transiciones fluidas de velocidad (`transition: all 0.3s ease`) y filtros adaptativos.
* **Bootstrap 5.3 & Icons:** Framework utilizado para asegurar la máxima velocidad, componentes dinámicos y rejilla responsive.
* **JavaScript (ES6+):** Programación asíncrona mediante `fetch()`, manipulación limpia del DOM basada en el evento `DOMContentLoaded` y gestión de formularios.
* **JSON:** Formato de almacenamiento ligero para los datos de colecciones y testimonios.

---

## 📂 Estructura del Proyecto

```text
WEB_ZAPATERIA/
├── css/
│   ├── bootstrap.min.css     # Framework CSS local
│   └── estilos.css           # Estilos personalizados (Fuentes, hover, colores)
├── data/
│   ├── colecciones.json      # Datos dinámicos del catálogo
│   └── testimonios.json      # Datos dinámicos de las opiniones
├── fonts/
│   ├── Raleway-Regular.ttf   # Tipografía corporativa normal
│   └── Raleway-Bold.ttf      # Tipografía corporativa negrita
├── image/
│   ├── Favicon.jpg           # Icono de pestaña
│   ├── Cabecera.jpg          # Imagen principal del banner
│   └── [imágenes_proyecto]   # Fotos de catálogo y avatares de testimonios
├── js/
│   ├── bootstrap.bundle.min.js # Scripts de comportamiento Bootstrap
│   └── main.js               # Lógica JS principal y consumo de JSON (Fetch API)
├── .gitignore                # Archivos e historiales excluidos de Git
├── index.html                # Archivo raíz principal
└── README.md                 # Documentación del proyecto
```

📝 Licencia
Este proyecto es de código abierto y está disponible bajo la licencia MIT.

🚀 Instalación y Uso Local
No requiere la instalación de dependencias ni servidores externos. Únicamente clona el repositorio u obtén los archivos y abre index.html en cualquier navegador web moderno.

## 👤 Autor

Desarrollado por **WebsByJimenez**



