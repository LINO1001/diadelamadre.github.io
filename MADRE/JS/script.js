// Obtener todas las imágenes
const photos = document.querySelectorAll(".photo");

// Función para asignar animaciones aleatorias a las fotos
function animatePhotos() {
  photos.forEach((photo) => {
    const delay = Math.random() * 5; // Retraso aleatorio entre 0 y 5 segundos
    photo.style.animationDelay = `${delay}s`;
  });
}

// Función para generar corazones animados
function generateHearts() {
  const heartContainer = document.querySelector(".heart-container");
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heartContainer.appendChild(heart);
  }
}

// Llamamos a las funciones
animatePhotos();
generateHearts();
