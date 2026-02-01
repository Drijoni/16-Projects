var API = "https://api.thedogapi.com/v1/images/search";
var imageEl = document.getElementById("image");
var loadingEl = document.getElementById("loading");
var btn = document.getElementById("generate");

function showLoading() {
    loadingEl.classList.remove("hidden");
    btn.disabled = true;
}

function hideLoading() {
    loadingEl.classList.add("hidden");
    btn.disabled = false;
}

function showError() {
    imageEl.alt = "Could not load dog. Try again!";
    imageEl.src = "";
    hideLoading();
}

async function dog() {
    showLoading();
    imageEl.alt = "A cute dog";
    imageEl.src = "";

    try {
        var res = await fetch(API);
        var data = await res.json();
        if (!data || !data[0] || !data[0].url) {
            showError();
            return;
        }
        imageEl.src = data[0].url;
    } catch (err) {
        showError();
    } finally {
        hideLoading();
    }
}

btn.addEventListener("click", dog);

window.onload = function () {
    dog();
};
