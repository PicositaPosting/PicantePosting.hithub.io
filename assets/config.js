// config.js
const adsterraLink = "https://www.profitableratecpm.com/tcsm3yz6?key=e3bef76eb73c7c8e0feda2955b68aae1";
const directLink1 = "https://www.profitableratecpm.com/tcsm3yz6?key=e3bef76eb73c7c8e0feda2955b68aae1";
const directLink2 = "https://deputydelicacyopt.com/ik66puu2i?key=80c2d84b0a5a536c95002e03419d177d";

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
