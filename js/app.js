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

// Edicion del apartado Whatsapp
$(function () {
  $('#myButton').floatingWhatsApp({
      phone: '51965056239',
      popupMessage: 'Holaaaaaa',
      message: "Alguna consulta?",
      showPopup: true,
      showOnIE: false,
      headerTitle: 'Welcome!',
      headerColor: '#25D366',
      backgroundColor: 'white',
      buttonImage: '<img src="img/whatsapp_1.svg" />',
      size: '60px', // Tamaño del icono
      position: "right", // Posición del icono
      avatar: 'https://static.vecteezy.com/system/resources/previews/000/495/253/original/vector-support-agent-line-black-icon.jpg', // URL imagen avatar
      avatarName: 'Pedro', // Nombre del avatar
      avatarRole: 'Soporte', // Rol del avatar
      //autoOpenTimeout: 1000,
      zIndex: '11111',
  });
});


