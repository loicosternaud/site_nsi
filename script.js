/* Gestion du bloc <nav> pour les Ã©crans smartphone */
// RepÃ¨rage des Ã©lÃ©ments html
let icone = document.querySelector("#icone");
let nav = document.querySelector("nav");
// Fonction qui gÃ¨re l'affichage du <nav>
function menu(){
    let fichier = icone.getAttribute("src");
    if (fichier == "ouverture.png") {
        nav.style.display="block";
        icone.setAttribute("src","fermeture.png");
    }else{
        nav.style.display="none";
        icone.setAttribute("src","ouverture.png");
    }
}
// EvÃ¨nements liÃ© au click sur l'icone
icone.addEventListener("click",menu);

/*---------- FIN gestion bloc <nav> ----------*/