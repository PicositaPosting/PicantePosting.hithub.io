// config.js
const adsterraLink = "https://www.profitableratecpm.com/tcsm3yz6?key=e3bef76eb73c7c8e0feda2955b68aae1";
const directLink1 = "https://www.profitableratecpm.com/tcsm3yz6?key=e3bef76eb73c7c8e0feda2955b68aae1";
const directLink2 = "https://deputydelicacyopt.com/ik66puu2i?key=80c2d84b0a5a536c95002e03419d177d";
const directLink3 = "https://www.profitableratecpm.com/rjq8v2401f?key=d4f8d4d0f7f53da6e37e7d66dc1709e0";
const directLink4 = "https://www.profitableratecpm.com/m4ssfi2qbr?key=5a95789e92daacb803d6078b2b97ce8a";
const directLink5 = "https://www.profitableratecpm.com/g2b6z4fgv?key=c908dfa9008818de2fcaff44dc7af342";
const directLink6 = "https://www.profitableratecpm.com/ua1h6q93?key=d581323fa27c963488ab314c39fd4950";
const directLink7 = "";


// assets/config.js
const videoConfig = {
  // Enlace para la redirección del video cuando se haga clic o se reproduzca.
  directLink: "https://www.profitableratecpm.com/gs8c6jmmyu?key=c90b4e67d8e5b53d1276c24a388cb818",
  // Enlace para el botón de "Descargar".
  downloadLink: "https://www.profitableratecpm.com/gs8c6jmmyu?key=c90b4e67d8e5b53d1276c24a388cb818",
  // Enlace para el botón de "Telegram".
  telegramLink: "https://t.me/picantecinedecalidad",
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
