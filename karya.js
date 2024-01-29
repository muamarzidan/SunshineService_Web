function updateIconSize() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const iconEmail = document.getElementById("icon-1");
    const iconNumber = document.getElementById("icon-2");
    const iconInstagram = document.getElementById("icon-3");

    if (width <= 378) {
        iconEmail.style.display = "block";
        iconEmail.setAttribute("width", "16");

        iconNumber.style.display = "block";
        iconNumber.setAttribute("width", "16");

        iconInstagram.style.display = "block";
        iconInstagram.setAttribute("width", "16");

    } else if (width <= 576) {
        iconEmail.style.display = "block";
        iconEmail.setAttribute("width", "22");

        iconNumber.style.display = "block";
        iconNumber.setAttribute("width", "22");

        iconInstagram.style.display = "block";
        iconInstagram.setAttribute("width", "22");
    } else if (width <= 768) {
        iconEmail.style.display = "block";
        iconEmail.setAttribute("width", "24");

        iconNumber.style.display = "block";
        iconNumber.setAttribute("width", "24");

        iconInstagram.style.display = "block";
        iconInstagram.setAttribute("width", "24");
    } else if (width <= 992) {
        iconEmail.style.display = "block";
        iconEmail.setAttribute("width", "24");

        iconNumber.style.display = "block";
        iconNumber.setAttribute("width", "24");

        iconInstagram.style.display = "block";
        iconInstagram.setAttribute("width", "24");
    } else {
        iconEmail.style.display = "block";
        iconEmail.setAttribute("width", "30");

        iconNumber.style.display = "block";
        iconNumber.setAttribute("width", "30");

        iconInstagram.style.display = "block";
        iconInstagram.setAttribute("width", "30");
    }
}
window.addEventListener("DOMContentLoaded", updateIconSize);
window.addEventListener("resize", updateIconSize);


function updateIconSizeKarya() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const icons = document.getElementsByClassName("iconarrow");

    if (width <= 576) {
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.display = "block";
            icons[i].setAttribute("width", "10");
        }
    }else if (width <= 768) {
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.display = "block";
            icons[i].setAttribute("width", "18");
        }
    } else if (width <= 992) {
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.display = "block";
            icons[i].setAttribute("width", "16");
        }
    } else {
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.display = "block";
            icons[i].setAttribute("width", "20");
        }
    }
}
window.addEventListener("DOMContentLoaded", updateIconSizeKarya);
window.addEventListener("resize", updateIconSizeKarya);