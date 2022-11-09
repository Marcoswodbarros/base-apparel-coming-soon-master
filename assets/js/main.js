const form = document.querySelector("form");
const email = document.querySelector(".form__email");
const icon = document.querySelector(".form__error--icon");
const arrow = document.querySelector(".form__arrow");
const message = document.querySelector(".form__error--span");

form.addEventListener("submit", condition);
arrow.addEventListener("click", condition);

function condition (x) {
    x.preventDefault()

    let emailValue = email.value.trim()
    
    if (!isEmail(emailValue)) {
        icon.style.display = "block";
        message.style.display = "block";

    } else {
        icon.style.display = "none";
        message.style.display = "none";
    }
}


function isEmail (email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}