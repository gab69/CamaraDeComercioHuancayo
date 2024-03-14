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
      popupMessage: 'Bienvenid@ ¿desea alguna Asesoria?',
      message: "Escriba su consulta a este campo",
      showPopup: true,
      showOnIE: false,
      headerTitle: 'Welcome!',
      headerColor: '#25D366',
      backgroundColor: 'white',
      buttonImage: '<img src="img/whatsapp_1.svg" />',
      size: '60px', 
      position: "right", 
      avatar: 'https://static.vecteezy.com/system/resources/previews/000/495/253/original/vector-support-agent-line-black-icon.jpg', // URL imagen avatar
      avatarName: 'Pedro', 
      avatarRole: 'Soporte',
    
      zIndex: '11111',
  });
});


// PReguntas frecuentes

class Accordion {
  constructor(el) {
    this.el = el;
    this.summary = el.querySelector('summary');
    this.content = el.querySelector('.faq-content');
    this.expandIcon = this.summary.querySelector('.expand-icon')
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.summary.addEventListener('click', (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();
    this.el.style.overflow = 'hidden';

    if (this.isClosing || !this.el.open) {
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;

    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }
    
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => {
      this.expandIcon.setAttribute('src', '/img/plus.svg');
      return this.onAnimationFinish(false);
    }
    this.animation.oncancel = () => {
      this.expandIcon.setAttribute('src', '/img/plus.svg');
      return this.isClosing = false;
    }
  }

  open() {
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;

    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + 
                         this.content.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }
    
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 350,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => {
      this.expandIcon.setAttribute(
          'src',
          '/img/minus.svg'
      );
      return this.onAnimationFinish(true);
    }
    this.animation.oncancel = () => {
      this.expandIcon.setAttribute(
          'src',
          '/img/minus.svg'
      );
      return this.isExpanding = false;
    }
  }

  onAnimationFinish(open) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = this.el.style.overflow = '';
  }
}

document.querySelectorAll('details').forEach((el) => {
  new Accordion(el);
});

