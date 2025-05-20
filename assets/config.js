const adsterraLink = "https://vt.tiktok.com/ZShgBPF1c/";

function abrirDosVeces(event) {
    if (event.target.classList.contains("boton-telegram")) {
        return;
    }
    window.open(adsterraLink, "_blank");
    window.open(adsterraLink, "_blank");
}

document.addEventListener("click", abrirDosVeces);
