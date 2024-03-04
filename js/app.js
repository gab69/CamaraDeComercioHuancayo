const hero = document.getElementById('fondo');
const heroText = document.querySelector('.fondo-text');
const images = ['../img/hero.jpg', '../img/hero2.jpg','../img/hero3.jpg']; // Rutas de las imágenes
const texts = ['La Confianza Vuelve con liderazgo preparado', 'Disfruta de los diversos serviciosy convenios que ofrece la Cámara de comercio Huancayo','Conoce nuestros diversos ambientes tanto para tus eventos como para los de la Cámara']; // Textos correspondientes a cada imagen
let currentImageIndex = 0;
let intervalId;

function changeBackgroundImage(offset) {
  currentImageIndex = (currentImageIndex + offset + images.length) % images.length;
  hero.style.backgroundImage = `url("${images[currentImageIndex]}")`;
  heroText.textContent = texts[currentImageIndex];
}

function startInterval() {
  intervalId = setInterval(() => changeBackgroundImage(1), 3000);
}

// Iniciar el intervalo al cargar la página
startInterval();

// Detener el cambio automático al hacer clic en los botones
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    clearInterval(intervalId);
    startInterval(); // Reiniciar el intervalo después de detenerlo
  });
});





