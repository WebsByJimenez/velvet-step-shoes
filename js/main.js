/**
 * Velvet Step - Lógica principal de la aplicación
 */

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

/**
 * Inicializador global de la página
 */
function initApp() {
  cargarTestimonios();
  cargarColecciones();
  setupUIEvents();
  setCurrentYear();
}

/**
 * Obtiene y renderiza los testimonios desde el JSON
 */
async function cargarTestimonios() {
  const container = document.getElementById("testimonios-container");
  if (!container) return;

  try {
    // Aquí está la ruta hacia la carpeta data
    const response = await fetch("./data/testimonios.json");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const testimonios = await response.json();

    if (!Array.isArray(testimonios) || testimonios.length === 0) {
      mostrarError(container, "No hay testimonios disponibles.");
      return;
    }

    renderizarCarrusel(container, testimonios);
  } catch (error) {
    console.error("Error cargando los testimonios:", error);
    mostrarError(container, "No se pudieron cargar los testimonios de los clientes.");
  }
}

/**
 * Obtiene y renderiza las colecciones desde el JSON
 */
async function cargarColecciones() {
  const container = document.getElementById("colecciones-container");
  if (!container) return;

  try {
    // Aquí está la ruta hacia la carpeta data
    const response = await fetch("./data/colecciones.json");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const colecciones = await response.json();

    if (!Array.isArray(colecciones) || colecciones.length === 0) {
      mostrarError(container, "No hay colecciones disponibles.");
      return;
    }

    renderizarColecciones(container, colecciones);
  } catch (error) {
    console.error("Error cargando las colecciones:", error);
    mostrarError(container, "No se pudieron cargar las colecciones exclusivas.");
  }
}

/**
 * Renderiza los testimonios en el carrusel de Bootstrap
 */
function renderizarCarrusel(container, testimonios) {
  const htmlItems = testimonios
    .map((item, index) => {
      const isActive = index === 0 ? "active" : "";

      return `
      <div class="carousel-item ${isActive}">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-8">
            <article class="bg-white rounded-4 border text-center p-4 shadow-sm">
              <img
                src="${escapeHTML(item.avatar)}"
                alt="${escapeHTML(item.alt)}"
                height="80"
                width="80"
                loading="lazy"
                class="rounded-circle mb-3 shadow-sm object-fit-cover" />
              <h4 class="mb-1 h5">${escapeHTML(item.nombre)}. ${escapeHTML(item.ciudad)}</h4>
              <p class="text-dark">"${escapeHTML(item.comentario)}"</p>
            </article>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  container.innerHTML = htmlItems;
}

/**
 * Renderiza las tarjetas de la sección Colecciones
 */
function renderizarColecciones(container, colecciones) {
  const htmlCards = colecciones
    .map((col) => {
      return `
      <div class="col-md-4">
        <div class="card border-0 shadow-sm h-100">
          <img
            src="${escapeHTML(col.imagen)}"
            class="card-img-top rounded-top-4"
            alt="${escapeHTML(col.alt)}"
            loading="lazy" />
          <div class="card-body text-center">
            <h3 class="fw-bold h5">${escapeHTML(col.titulo)}</h3>
            <p class="card-text text-dark small">
              ${escapeHTML(col.descripcion)}
            </p>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  container.innerHTML = htmlCards;
}

/**
 * Muestra un mensaje amigable si ocurre un error de red
 */
function mostrarError(container, mensaje) {
  container.innerHTML = `
    <div class="alert alert-warning text-center my-4" role="alert">
      ${mensaje}
    </div>
  `;
}

/**
 * Eventos para botones e interacciones
 */
function setupUIEvents() {
  const btnBolsa = document.getElementById("btn-bolsa");
  if (btnBolsa) {
    btnBolsa.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Tu bolsa de la compra está vacía. ¡Explora nuestras colecciones!");
    });
  }

  const formulario = document.getElementById("form-contacto");
  if (formulario) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("¡Formulario enviado con éxito! Nos pondremos en contacto contigo lo antes posible.");
      formulario.reset();
    });
  }
}

/**
 * Coloca el año actual en el pie de página
 */
function setCurrentYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Previene vulnerabilidades de seguridad XSS
 */
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (match) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[match];
  });
}
