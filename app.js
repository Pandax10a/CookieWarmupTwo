document.body.insertAdjacentHTML(`afterbegin`, `<img id = "img1" src = "https://projectpokemon.org/images/shiny-sprite/marowak-totem.gif"> 
<img id = "img2"src = "https://projectpokemon.org/images/shiny-sprite/kangaskhan.gif"> <img id = "img3" src = "https://projectpokemon.org/images/normal-sprite/magmar.gif">`);

Cookies.set(`image_url`);

let img1_url = "https://projectpokemon.org/images/shiny-sprite/marowak-totem.gif"
let img1_page = document.querySelector(`#img1`);
img1_page.addEventListener(`click`, img1_placement);

document.getElementById(`img2`).addEventListener(`click`, img2_placement);
document.getElementById(`img3`).addEventListener(`click`, img3_placement);
function img1_placement () {
    Cookies.set(`image_url`, "https://projectpokemon.org/images/shiny-sprite/marowak-totem.gif");
    location.href = "display.html"
}

function img2_placement () {
    Cookies.set(`image_url`, "https://projectpokemon.org/images/shiny-sprite/kangaskhan.gif");
    location.href = "display.html"
}

function img3_placement () {
    Cookies.set(`image_url`, "https://projectpokemon.org/images/normal-sprite/magmar.gif");
    location.href = "display.html"
}


// document.querySelector(`#img2`).addEventListener(`click`, Cookies.set(`image_url`, `https://projectpokemon.org/images/shiny-sprite/kangaskhan.gif`));

// document.getElementById(`img2`).addEventListener(`click`, Cookies.set(`image_url`, `https://projectpokemon.org/images/shiny-sprite/kangaskhan.gif`));