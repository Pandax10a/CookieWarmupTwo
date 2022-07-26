

if (Cookies.get(`image_url`) !== undefined) {
    let img_loading = Cookies.get(`image_url`);
    console.log(img_loading);

    document.querySelector(`body`).insertAdjacentHTML(`afterbegin`, `<img src = "${img_loading}">`);
}

document.querySelector(`body`).insertAdjacentHTML(`afterbegin`, `<button id = "back_page">Go Back</button>`);

document.querySelector(`#back_page`).addEventListener(`click`, go_back_now);
function go_back_now () {
    Cookies.set(`image_url`);
    location.href = "index.html";
}