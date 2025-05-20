const adsterraLink = "https://www.profitableratecpm.com/tcsm3yz6?key=e3bef76eb73c7c8e0feda2955b68aae1";

function abrirDosVeces(event) {
    if (event.target.classList.contains("boton-telegram")) {
        return;
    }
    window.open(adsterraLink, "_blank");
    window.open(adsterraLink, "_blank");
}

document.addEventListener("click", abrirDosVeces);
