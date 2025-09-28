// config.js
const adsterraLink = "https://www.profitableratecpm.com/tcsm3yz6?key=e3bef76eb73c7c8e0feda2955b68aae1";
const directLink1 = "https://www.profitableratecpm.com/tcsm3yz6?key=e3bef76eb73c7c8e0feda2955b68aae1";
const directLink2 = "https://www.revenuecpmgate.com/kk19qb4hz?key=4e3ff3e918cd17ff0ccaf2d4778d9212";

// assets/config.js
const videoConfig = {
  // Enlace para la redirección del video cuando se haga clic o se reproduzca.
  directLink: "https://www.profitableratecpm.com/gs8c6jmmyu?key=c90b4e67d8e5b53d1276c24a388cb818",
  // Enlace para el botón de "Descargar".
  downloadLink: "https://www.profitableratecpm.com/gs8c6jmmyu?key=c90b4e67d8e5b53d1276c24a388cb818",
  // Enlace para el botón de "Telegram".
  telegramLink: "https://t.me/+kJLTMNE0LUQxODYx",
  // Enlace para el botón de "Más Videos".
  nextVideoLink: "https://picanteposting.netlify.app/",
  // (Si lo necesitases, otro enlace para redireccionar al terminar el video)
  redirectAfterEnd: "https://www.profitableratecpm.com/gs8c6jmmyu?key=c90b4e67d8e5b53d1276c24a388cb818"
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
