// config.js
const adsterraLink = "https://www.profitableratecpm.com/tcsm3yz6?key=e3bef76eb73c7c8e0feda2955b68aae1";
const directLink1 = "https://www.profitableratecpm.com/tcsm3yz6?key=e3bef76eb73c7c8e0feda2955b68aae1";
const directLink2 = "https://deputydelicacyopt.com/ik66puu2i?key=80c2d84b0a5a536c95002e03419d177d";
const directLink3 = "https://deputydelicacyopt.com/ptudbe5hbj?key=4c071702d0a6c663149b7b5da3601a7a";

// assets/config.js
const videoConfig = {
  // Enlace para la redirección del video cuando se haga clic o se reproduzca.
  directLink: "https://deputydelicacyopt.com/acx9g8ww?key=8d8ef28684a2d7710418d7fdde3bf71c",
  // Enlace para el botón de "Descargar".
  downloadLink: "https://deputydelicacyopt.com/ik66puu2i?key=80c2d84b0a5a536c95002e03419d177d",
  // Enlace para el botón de "Telegram".
  telegramLink: "https://t.me/picantecinedecalidad",
  // Enlace para el botón de "Más Videos".
  nextVideoLink: "https://picanteposting.netlify.app/",
  // (Si lo necesitases, otro enlace para redireccionar al terminar el video)
  redirectAfterEnd: "https://deputydelicacyopt.com/t6scfuafz?key=35c86956bc022ce715873b93a2761626"
};

// Listener global original (que abría solo adsterraLink) – que intentaremos remover en el HTML:
function abrirDosVeces(event) {
  if (
    event.target.classList.contains("boton-telegram") ||
    event.target.classList.contains("boton-mas-videos")
  ) {
    return;
  }
  window.open(adsterraLink, "_blank");
  window.open(adsterraLink, "_blank");
}
document.addEventListener("click", abrirDosVeces);
