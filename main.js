document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 550) {
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


function updateIconSizeMain() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const iconA1 = document.getElementById("iconify-icon-about-1");
    const iconA2 = document.getElementById("iconify-icon-about-2");
    const iconS1 = document.getElementById("iconify-icon-service-1");
    const iconS2 = document.getElementById("iconify-icon-service-2");
    const iconS3 = document.getElementById("iconify-icon-service-3");
    const iconS4 = document.getElementById("iconify-icon-service-4");
    const iconS5 = document.getElementById("iconify-icon-service-5");
    const iconS6 = document.getElementById("iconify-icon-service-6");


    if (width <= 576) {
        iconA1.style.display = "block";
        iconA2.style.display = "block";
        iconA1.setAttribute("width", "26");
        iconA2.setAttribute("width", "26");

        iconS1.style.display = "block";
        iconS1.setAttribute("width", "26");
        iconS2.style.display = "block";
        iconS2.setAttribute("width", "26");
        iconS3.style.display = "block";
        iconS3.setAttribute("width", "26");
        iconS4.style.display = "block";
        iconS4.setAttribute("width", "26");
        iconS5.style.display = "block";
        iconS5.setAttribute("width", "26");
        iconS6.style.display = "block";
        iconS6.setAttribute("width", "26");
    } else if (width <= 768) {
        iconA1.style.display = "block";
        iconA1.setAttribute("width", "24");
        iconA2.style.display = "block";
        iconA2.setAttribute("width", "24");

        iconS1.style.display = "block";
        iconS1.setAttribute("width", "36");
        iconS2.style.display = "block";
        iconS2.setAttribute("width", "36");
        iconS3.style.display = "block";
        iconS3.setAttribute("width", "36");
        iconS4.style.display = "block";
        iconS4.setAttribute("width", "36");
        iconS5.style.display = "block";
        iconS5.setAttribute("width", "36");
        iconS6.style.display = "block";
        iconS6.setAttribute("width", "36");
    } else {
        iconA1.style.display = "block";
        iconA2.style.display = "block";
        iconA1.setAttribute("width", "36");
        iconA2.setAttribute("width", "36");

        iconS1.style.display = "block";
        iconS1.setAttribute("width", "28");
        iconS2.style.display = "block";
        iconS2.setAttribute("width", "28");
        iconS3.style.display = "block";
        iconS3.setAttribute("width", "28");
        iconS4.style.display = "block";
        iconS4.setAttribute("width", "28");
        iconS5.style.display = "block";
        iconS5.setAttribute("width", "28");
        iconS6.style.display = "block";
        iconS6.setAttribute("width", "28");
    }
}
window.addEventListener("DOMContentLoaded", updateIconSizeMain);
window.addEventListener("resize", updateIconSizeMain);
