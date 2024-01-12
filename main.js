document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 750) {
            navbar.classList.add('scrolled');
            navbar.classList.add('shadow-on-scroll');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.remove('shadow-on-scroll');
        }
    });
});

function updateIconSizeFooter() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const iconEmail = document.getElementById("icon-1");
    const iconNumber = document.getElementById("icon-2");
    const iconInstagram = document.getElementById("icon-3");

    if (width <= 576) {
        iconEmail.style.display = "block";
        iconEmail.setAttribute("width", "16");

        iconNumber.style.display = "block";
        iconNumber.setAttribute("width", "16");

        iconInstagram.style.display = "block";
        iconInstagram.setAttribute("width", "16");
    }else if (width <= 768) {
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
window.addEventListener("DOMContentLoaded", updateIconSizeFooter);
window.addEventListener("resize", updateIconSizeFooter);


