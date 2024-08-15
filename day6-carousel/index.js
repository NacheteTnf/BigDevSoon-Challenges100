document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnail img");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  let currentIndex = 0;

  // Actualizar la imagen principal
  function updateMainImage(index) {
    mainImage.src = thumbnails[index].src;
    mainImage.classList.add("main-image"); // Reaplica la clase para asegurar que los estilos se mantienen
  }

  // Agregar evento de clic a las miniaturas
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      currentIndex = index;
      updateMainImage(currentIndex);
    });
  });

  // Evento para el botón de siguiente
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateMainImage(currentIndex);
  });

  // Evento para el botón de anterior
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateMainImage(currentIndex);
  });
});
