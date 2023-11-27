const angle = 20;
const rotateCard = window;

const lerp = (start, end, amount) => {
  return (1 - amount) * start + amount * end;
};

const remap = (value, oldMax, newMax) => {
  const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
  return Math.min(Math.max(newValue, -newMax), newMax);
};

window.addEventListener("DOMContentLoaded", (event) => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((e) => {
    e.addEventListener("mousemove", (event) => {
      const rect = e.getBoundingClientRect();
      const centerX = (rect.left + rect.right) / 2;
      const centerY = (rect.top + rect.bottom) / 2;
      const posX = event.pageX - centerX;
      const posY = event.pageY - centerY;
      const x = remap(posX, rect.width / 2, angle);
      const y = remap(posY, rect.height / 2, angle);
      e.dataset.rotateX = x;
      e.dataset.rotateY = -y;
    });

    e.addEventListener("mouseout", (event) => {
      e.dataset.rotateX = 0;
      e.dataset.rotateY = 0;
    });
  });

  const update = () => {
    cards.forEach((e) => {
      let currentX = parseFloat(
        e.style.getPropertyValue("--rotateY").slice(0, -1)
      );
      let currentY = parseFloat(
        e.style.getPropertyValue("--rotateX").slice(0, -1)
      );
      if (isNaN(currentX)) currentX = 0;
      if (isNaN(currentY)) currentY = 0;
      const x = lerp(currentX, e.dataset.rotateX, 0.05);
      const y = lerp(currentY, e.dataset.rotateY, 0.05);
      e.style.setProperty("--rotateY", x + "deg");
      e.style.setProperty("--rotateX", y + "deg");
    });
  };
  setInterval(update, 1000 / 60);
});

class miNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<header>
		<!-- Barra de navegacion -->
		<nav class="navbar navbar-expand-md navbar-ligth">
		  <div class="container-fluid">
			<button
			  class="navbar-toggler"
			  type="button"
			  data-bs-toggle="collapse"
			  data-bs-target="#navbar-toggler"
			  aria-controls="navbarTogglerDemo01"
			  aria-expanded="false"
			  aria-label="Toggle navigation"
			>
			  <span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbar-toggler">
			  <a class="navbar-brand" href="#">
				<img
				  src="img/Logos/logo.jpg"
				  width="210"
				  alt="Logo AM Fotografía"
				/>
			  </a>
			  <ul
				class="navbar-nav d-flex justify-content-center align-items-center"
			  >
				<li class="nav-item">
				  <a class="nav-link active" aria-current="page" href="#sobrenosotros">Sobre Nosotros</a
				  >
				</li>
				<li class="nav-item">
				  <a class="nav-link" aria-current="page" href="#portafolio">Portafolio</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" aria-current="page" href="#servicios">Servicios</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" aria-current="page" href="#testimonios">Testimonios</a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" aria-current="page" href="#reservaciones">Reservaciones</a
				  >
				</li>
				<li class="nav-item">
				  <a class="nav-link" aria-current="page" href="#preguntas">Preguntas Frecuentes</a
				  >
				</li>
				<li class="nav-item">
				  <a class="nav-link" aria-current="page" href="#redes">Redes Sociales</a
				  >
				</li>
			  </ul>
			</div>
		  </div>
		</nav>
	  </header>
        `;
  }
}
customElements.define("mi-header", miNav);

class miNav2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="container">

      <div class="row">
        <div class="col-12 col-md-6 mb-3">
          <br><br>
          <h5>Más información</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="docs/Contrato Fotográfico de AM FOTOGRAFÍA.pdf" target="_blank"
                class="nav-link p-0 text-body-secondary">Reglamento</a>

            </li>
            <li class="nav-item mb-2">
              <a href="lugares.html" class="nav-link p-0 text-body-secondary">Lugares recomendados</a>
            </li>
            <li class="nav-item mb-2">
              <a href="fotografa.html" class="nav-link p-0 text-body-secondary">Fotógrafa</a>
            </li>


          </ul>
        </div>

        <div class="col-md-5 offset-md-1 mb-3 text-md-end">
          
          <form action="https://formsubmit.co/amfotocostarica@gmail.com" method="POST" target="_blank">
            <br><br>
            <h5>Suscrite para más información</h5>
            <br>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" name="email1" type="text" class="form-control" placeholder="Correo electrónico" />
              <button class="btn btn-primary" type="button">Suscribete</button>
            </div>
          </form>
        </div>
      </div>
    <!-- Modal de Suscripción Exitosa -->
<div class="modal fade" id="suscripcionExitosaModal" tabindex="-1" role="dialog" aria-labelledby="suscripcionExitosaModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="suscripcionExitosaModalLabel">¡Suscripción Exitosa!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Gracias por suscribirte. Te mantendremos informado.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>

      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p >
          &copy; <span id="currentYear"  > </span>   <a href = "Brainsoft/index.html">Brain Soft</a> All rights
      
        </p>
        <ul class="list-unstyled d-flex">

          <li class="ms-3">
            <a class="link-body-emphasis" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg></a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="https://www.facebook.com/AMFOTOCR" target="_blank"><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook"
                viewBox="0 0 16 16">
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg></a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="https://api.whatsapp.com/send?phone=84449279"><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp"
                viewBox="0 0 16 16">
                <path
                  d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg></a>
          </li>
        </ul>
      </div>

    </div>

  </footer>
        `;
  }
}
customElements.define("mi-footer", miNav2);

/*JQUERY*/
document.addEventListener('DOMContentLoaded', function () {
  var fechaNacimientoInput = document.getElementById('fechaNacimiento');
  var edadResultadoInput = document.getElementById('edadResultado');

  fechaNacimientoInput.addEventListener('change', function () {
    var fechaNacimiento = new Date(this.value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (hoy.getMonth() < fechaNacimiento.getMonth() || (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }

    edadResultadoInput.value = edad;
  });
});


// scroll revel

const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2500,
  reset: false,
});

sr.reveal('.container', {delay: 300});
sr.reveal('.h1', {delay: 500});
sr.reveal('.navbar', {delay: 500});
sr.reveal('.video-container', {delay: 500});
sr.reveal('.i', {delay: 500});

function mostrarInformacion() {
  alert("Información de la persona");
 }

 /*suscribate*/
 $(document).ready(function () {
  // Acción al hacer clic en el botón de suscribirse
  $('#suscribirseBtn').click(function () {
    // Obtener el valor del campo de correo electrónico
    var emailInput = $('#newsletter1').val();

    // Validar que se haya ingresado un correo electrónico
    if (!emailInput) {
      alert('Por favor, ingresa tu correo electrónico.');
      return;
    }

    // Mostrar el modal
    $('#suscripcionExitosaModal').modal('show');

    // Limpiar el campo de correo electrónico
    $('#newsletter1').val('');
  });
});



class miNav3 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="https://api.whatsapp.com/send?phone=50650684449279&text=Bienvenido%20a%20AM%20FOTOGRAF%C3%8DA" class="btn-wsp"
target="_blank">
<i class="fa fa-whatsapp icono"></i>
</a>
        `;
  }
}
customElements.define("mi-what", miNav3);

// Musica inicio

const musicContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['Sof Piano','AM FOTOGRAFÍA','Hotline Bling'];

// Keep track of song
let songIndex = 1;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;


}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);
