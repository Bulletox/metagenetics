(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'video/background-video.mp4',
        type: 'video/mp4'
      },
      {
        src: 'night.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());

// -------------------------------------------------------------
// TOAST ALERT ---------------------------------------------------------------------------------------------
let attempts = 0;
let tryies = 3;
let attempts_left = 3;

function unlockToastAlert() {
  closeToast()
  let toastUnlock = document.getElementById('unlockToast');
  let toastText = document.getElementById('toast-body');
  let toastUnlock_systemlocked = document.getElementById('unlockToast_systemlocked')
  let toastText_systemlocked = document.getElementById('toast-body_systemlocked')
  let btn_danger = document.getElementById('btn-danger')
  var toastContainer = document.getElementById('toastContainer');
  if (attempts_left > 1) {

    attempts_left = (tryies - attempts)
    toastUnlock.className = 'toast animate__animated animate__bounceInDown';
    toastText.innerHTML = "Incorrect username or password<br>Left " + (attempts_left) + " attempts";
    toastUnlock.style.display = ("block");
    toastUnlock.style.position = ("fixed");
    toastUnlock.style.zIndex = ("20");
    toastContainer.style.display = 'flex';
    toastContainer.style.transition = ("background-color ease 0.5s");
    attempts++;

  } else if (attempts_left = 1) {
    toastUnlock.className = 'toast animate__animated animate__bounceInDown';
    toastText.innerHTML = "You have reached the maximum number of login attempts.<br>The system is now locked.";
    toastUnlock.style.display = ("block");
    toastUnlock.style.position = ("fixed");
    toastUnlock.style.zIndex = ("20");
    toastContainer.style.display = 'flex';
    toastContainer.style.transition = ("background-color ease 0.5s");
    toastText_systemlocked.innerHTML = "Please contact an administrator to unlock your system or contact the technical department.<br><br>" +
    "<i class='bi bi-headset'></i>  ext 666 / terminal number: 00345<br><br>" +
    "<i class='bi bi-exclamation-circle'></i>  alert code: / 07-566";;
    toastUnlock_systemlocked.style.display = ("block");
    toastUnlock_systemlocked.style.position = ("fixed");
    toastUnlock_systemlocked.style.zIndex = ("20");
    toastUnlock_systemlocked.className = 'toast sytemblocked top-0 end-0 animate__animated animate__fadeIn animate__delay-0.3s'
    btn_danger.style.display = "block"
  }
}

function unlockAdmin(){
  let toastAdmin = document.getElementById('unlockToast_administrator');
  let usernameInput = document.getElementById('username');
  let passwordInput = document.getElementById('password');
  let unlockButton = document.getElementById('btn-danger');
  let enterButton = document.getElementById('buttonfrom'); // Cambio aquí

  // Desactivar inputs y botones
  usernameInput.disabled = true;
  passwordInput.disabled = true;
  unlockButton.disabled = true;
  enterButton.disabled = true; // Cambio aquí

  // Mostrar el toast
  toastAdmin.style.display = "block";

  // Cerrar el toast después de un tiempo (si es necesario)
  setTimeout(closeToast, 5000); // Cierra el toast después de 5 segundos
}
function checkCredentials(username, password) {
  return username === "admin" && password === "admin";
}

function unlockadm() {
  let username = document.getElementById('usernamead').value;
  let password = document.getElementById('passwordad').value;
  
  if (checkCredentials(username, password)) {
    // Aquí muestras el toast admin si las credenciales son correctas
    
  } else {
    let toastAdmin = document.getElementById('erroradm');
    toastAdmin.style.display = "block";
    toastUnlock.className = 'toast animate__animated animate__bounceInDown';
  }
}

// CLOSE ANY TOAST -------------------------------------------------------------------------------------------
function closeToast() {
  let toastUnlock = document.getElementById('unlockToast');
  toastUnlock.style = "none"
  toastContainer.style.display = 'none';
}
