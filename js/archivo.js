/* Funcionalidades que se ejecutan cuando el DOM está completamente cargado */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Comportamiento del botón premium "Mi Bolsa"
  const botonBolsa = document.getElementById("btn-bolsa");
  if (botonBolsa) {
    botonBolsa.addEventListener("click", (e) => {
      e.preventDefault();
      alert(
        "Tu bolsa de la compra está vacía. ¡Explora nuestras colecciones para añadir tus zapatos favoritos!",
      );
    });
  }

  // Para que se actualice el año automáticamente en el footer
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }
});

/* Comportamiento del formulario de contacto */
const formulario = document.getElementById("form-contacto");
if (formulario) {
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("¡Formulario enviado con éxito! Nos pondremos en contacto contigo lo antes posible.");
    formulario.reset();
  });
}
