document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginError = document.getElementById("loginError");
  const infoMessage = document.getElementById("infoMessage");
  const infoMessage2 = document.getElementById("infoMessage2");
  const forgotPassword = document.getElementById("forgotPassword");
  const notAdmin = document.getElementById("notAdmin");

  loginButton.addEventListener("click", function () {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Resetear estilos de borde
    usernameInput.style.borderColor = "#75b9e6";
    passwordInput.style.borderColor = "#75b9e6";

    if (!username && !password) {
      loginError.textContent = "Falta usuario y contraseña.";
      loginError.style.display = "block";
      usernameInput.style.borderColor = "red";
      passwordInput.style.borderColor = "red";
    } else if (!username) {
      loginError.textContent = "Falta usuario.";
      loginError.style.display = "block";
      usernameInput.style.borderColor = "red";
    } else if (!password) {
      loginError.textContent = "Falta contraseña.";
      loginError.style.display = "block";
      passwordInput.style.borderColor = "red";
    } else if (username === "admin" && password === "admin") {
      // Login correcto, redirigir
      window.location.href = "admin_home.html#popup-admin";
    } else {
      // Login incorrecto
      loginError.textContent = `El inicio de sesión solo está permitido para los administradores. 
          Si eres administrador y no puedes inicar sesión, comunícate con soporte.`;
      loginError.style.display = "block";
    }
  });

  forgotPassword.addEventListener("click", function () {
    infoMessage.textContent =
      "Se te ha enviado un correo para restablecer la contraseña.";
    infoMessage.style.display = "block";
  });

  notAdmin.addEventListener("click", function () {
    infoMessage2.textContent =
      "Si no eres administrador, no es necesario iniciar sesión.";
    infoMessage2.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona los botones y el sidebar
  const dashboardBtn = document.querySelector(".sidebar-btn");
  const sidebar = document.getElementById("sidebar");
  const rotate = document.getElementById("rotate");
  // Función para alternar las clases del sidebar
  function toggleSidebar() {
    sidebar.classList.toggle("sidebar-hidden");
    sidebar.classList.toggle("sidebar-visible");
    dashboardBtn.classList.toggle("sidebar-hidden");
    dashboardBtn.classList.toggle("sidebar-visible");
    rotate.classList.toggle("rotate-arrow");
  }

  if (dashboardBtn && sidebar) {
    dashboardBtn.addEventListener("click", toggleSidebar);
  } else {
    console.error("No se encontraron uno o más elementos en el DOM.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const suggestionBox = document.querySelector(".suggestion-box");

  // Mostrar la caja de sugerencias cuando el input está en foco
  searchInput.addEventListener("focus", function () {
    suggestionBox.style.display = "block";
  });

  // Ocultar la caja de sugerencias cuando el input pierde el foco
  searchInput.addEventListener("blur", function () {
    // Retrasar la ocultación para permitir que el evento click se ejecute
    setTimeout(() => {
      suggestionBox.style.display = "none";
    }, 200); // 200ms es suficiente para que el click se procese
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todas las paradas
  const paradas = document.querySelectorAll('[id^="parada"]');

  paradas.forEach((parada) => {
    parada.addEventListener("click", function () {
      // Oculta todas las descripciones e imágenes
      document
        .querySelectorAll('[id^="descripcion"], [id^="imagen"]')
        .forEach((element) => {
          element.style.display = "none";
        });

      // Muestra la descripción y la imagen de la parada clickeada
      const descripcionId = "descripcion" + parada.id.replace("parada", "");
      const imagenId = "imagen" + parada.id.replace("parada", "");

      document.getElementById(descripcionId).style.display = "block";
      document.getElementById(imagenId).style.display = "flex";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todas las paradas
  const paradas = document.querySelectorAll('[id^="parada"]');
  const mapa = document.getElementById("mapa");

  // URLs de los mapas para cada parada
  const mapas = {
    parada1:
      "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d62779.09899489606!2d-66.93544757851367!3d10.445863542286254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x8c2a5ed692b1b0d5%3A0xb54067fd5faaa2be!2sTerminal%20de%20Pasajeros%20Nuevo%20Circo%2C%20Avenida%20Bol%C3%ADvar%2C%20Caracas%2C%20Distrito%20Capital!3m2!1d10.500799899999999!2d-66.91075289999999!4m3!3m2!1d10.375081699999999!2d-66.880805!5e0!3m2!1ses!2sve!4v1742224667582!5m2!1ses!2sve",
    parada2:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d125593.99304828313!2d-66.85608948165283!3d10.356889660935858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8c2a5ed692b1b0d5%3A0xb54067fd5faaa2be!2sTerminal%20de%20Pasajeros%20Nuevo%20Circo%2C%20Avenida%20Bol%C3%ADvar%2C%20Caracas%2C%20Distrito%20Capital!3m2!1d10.500799899999999!2d-66.91075289999999!4m5!1s0x8c2ae3009e1278d7%3A0x7505f669b4ad1bee!2sTrakii%2C%2068HJ%2B26P%2C%20Av.%20Ali%20Primera%2C%20Santa%20Teresa%201215%2C%20Miranda!3m2!1d10.227588899999999!2d-66.6694194!5e0!3m2!1ses!2sve!4v1742225291340!5m2!1ses!2sve",
    parada3:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d125589.46152443317!2d-66.8659486381665!3d10.36819517640994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8c2a5ed692b1b0d5%3A0xb54067fd5faaa2be!2sTerminal%20de%20Nuevo%20Circo%2C%20Avenida%20Bol%C3%ADvar%2C%20Caracas%2C%20Capital%20District!3m2!1d10.500799899999999!2d-66.91075289999999!4m5!1s0x8c2ae2e12072b807%3A0x50919825e72784e9!2s68WQ%2B2PV%20Terminal%20De%20Pasajeros%20De%20Santa%20Teresa%2C%20Unnamed%20Road%2C%2C%20Santa%20Teresa%2C%20Miranda!3m2!1d10.2451249!2d-66.6607167!5e0!3m2!1ses!2sve!4v1742149646748!5m2!1ses!2sve",
    parada4:
      "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d62779.09899489606!2d-66.93544757851367!3d10.445863542286254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x8c2a5ed692b1b0d5%3A0xb54067fd5faaa2be!2sTerminal%20de%20Pasajeros%20Nuevo%20Circo%2C%20Avenida%20Bol%C3%ADvar%2C%20Caracas%2C%20Distrito%20Capital!3m2!1d10.500799899999999!2d-66.91075289999999!4m3!3m2!1d10.375081699999999!2d-66.880805!5e0!3m2!1ses!2sve!4v1742224667582!5m2!1ses!2sve",
    parada5:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d125588.44156835187!2d-66.94456079599435!3d10.370738142936274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8c2a5ed692b1b0d5%3A0xb54067fd5faaa2be!2sTerminal%20de%20Nuevo%20Circo%2C%20Avenida%20Bol%C3%ADvar%2C%20Caracas%2C%20Capital%20District!3m2!1d10.500799899999999!2d-66.91075289999999!4m5!1s0x8c2aeefe70dd47c7%3A0xabe69ef2707c7259!2sTerminal%20de%20Charallave%2C%20Charallave%201210%2C%20Miranda!3m2!1d10.2370073!2d-66.8579879!5e0!3m2!1ses!2sve!4v1742149996641!5m2!1ses!2sve",
    parada6:
      "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d62779.09899489606!2d-66.93544757851367!3d10.445863542286254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x8c2a5ed692b1b0d5%3A0xb54067fd5faaa2be!2sTerminal%20de%20Pasajeros%20Nuevo%20Circo%2C%20Avenida%20Bol%C3%ADvar%2C%20Caracas%2C%20Distrito%20Capital!3m2!1d10.500799899999999!2d-66.91075289999999!4m3!3m2!1d10.375081699999999!2d-66.880805!5e0!3m2!1ses!2sve!4v1742224667582!5m2!1ses!2sve",
    parada7:
      "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d125568.12840052116!2d-67.04471603772517!3d10.421255346424172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x8c2a5ed692b1b0d5%3A0xb54067fd5faaa2be!2sTerminal%20de%20Nuevo%20Circo%2C%20Avenida%20Bol%C3%ADvar%2C%20Caracas%2C%20Capital%20District!3m2!1d10.500799899999999!2d-66.91075289999999!4m5!1s0x8c2a8cfeb52f4f01%3A0x787973ac9b2f4157!2sTerminal%2C%20Avenida%20Jose%20Arvelo%2C%20Los%20Teques%2C%20Miranda!3m2!1d10.3444837!2d-67.0418304!5e0!3m2!1ses!2sve!4v1742150054564!5m2!1ses!2sve",
  };

  paradas.forEach((parada) => {
    parada.addEventListener("click", function () {
      // Oculta todas las descripciones e imágenes
      document
        .querySelectorAll('[id^="descripcion"], [id^="imagen"]')
        .forEach((element) => {
          element.style.display = "none";
        });

      // Muestra la descripción y la imagen de la parada clickeada
      const descripcionId = "descripcion" + parada.id.replace("parada", "");
      const imagenId = "imagen" + parada.id.replace("parada", "");

      document.getElementById(descripcionId).style.display = "block";
      document.getElementById(imagenId).style.display = "flex";

      // Cambia el mapa según la parada seleccionada
      mapa.src = mapas[parada.id];
    });
  });
});

//admin cambiar divs chofer anden
function cambiarDiv(divId) {
  const anden = document.getElementById("anden");
  const chofer = document.getElementById("chofer");

  // Ocultar ambos divs primero
  anden.style.display = "none";
  chofer.style.display = "none";

  // Mostrar el div correspondiente
  if (divId === "anden") {
    anden.style.display = "block";
  } else if (divId === "chofer") {
    chofer.style.display = "block";
  }
}

// Mostrar uno de los divs al cargar la página
window.onload = function () {
  cambiarDiv("anden"); // Mostrar el div de "Andenes" por defecto
};

// Centrar mapa
function reloadFrame() {
  document.getElementById("mapa").src = document.getElementById("mapa").src;
}

document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      this.classList.toggle("active");
      const answer = this.nextElementSibling;
      const content = this.closest(".content"); // Obtener el contenedor principal

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }

      // Ajustar la altura del contenedor principal
      setTimeout(() => {
        content.style.height = content.scrollHeight + "px";
      }, 300); // Esperar a que la animación termine
    });
  });
});

function toggleButtonDeleteRuta() {
  var elemento = document.getElementById("buttonConfirmRutaEliminada");

  if (elemento.style.display !== "none") {
    elemento.style.display = "none";
  }
}

function toggleButtonAddRuta() {
  var elemento = document.getElementById("buttonConfirmRutaEliminada");

  if (elemento.style.display === "none") {
    elemento.style.display = "block";

    setTimeout(() => {
      location.reload();
    }, 1);
  }
}

function toggleButtonDeleteChofer() {
  var elemento = document.getElementById("buttonConfirmChoferEliminado");

  if (elemento.style.display !== "none") {
    elemento.style.display = "none";
  }
}

function toggleButtonAddChofer() {
  var elemento = document.getElementById("buttonConfirmChoferEliminado");

  if (elemento.style.display === "none") {
    elemento.style.display = "block";

    setTimeout(() => {
      location.reload();
    }, 1);
  }
}
