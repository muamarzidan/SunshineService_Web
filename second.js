function updateIconSize() {
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
        iconS1.style.display = "block";
        iconS1.setAttribute("width", "30");
        iconS2.style.display = "block";
        iconS2.setAttribute("width", "30");
        iconS3.style.display = "block";
        iconS3.setAttribute("width", "30");
        iconS4.style.display = "block";
        iconS4.setAttribute("width", "30");
        iconS5.style.display = "block";
        iconS5.setAttribute("width", "30");
        iconS6.style.display = "block";
        iconS6.setAttribute("width", "30");
    } else if (width <= 768) {
        iconA1.style.display = "block";
        iconA1.setAttribute("width", "24");
        iconA2.style.display = "block";
        iconA2.setAttribute("width", "24");

        iconS1.style.display = "block";
        iconS1.setAttribute("width", "40");
        iconS2.style.display = "block";
        iconS2.setAttribute("width", "40");
        iconS3.style.display = "block";
        iconS3.setAttribute("width", "40");
        iconS4.style.display = "block";
        iconS4.setAttribute("width", "40");
        iconS5.style.display = "block";
        iconS5.setAttribute("width", "40");
        iconS6.style.display = "block";
        iconS6.setAttribute("width", "40");
    } else {
        iconA1.style.display = "block";
        iconA2.style.display = "block";
        iconA1.setAttribute("width", "48");
        iconA2.setAttribute("width", "48");

        iconS1.style.display = "block";
        iconS1.setAttribute("width", "40");
        iconS2.style.display = "block";
        iconS2.setAttribute("width", "40");
        iconS3.style.display = "block";
        iconS3.setAttribute("width", "40");
        iconS4.style.display = "block";
        iconS4.setAttribute("width", "40");
        iconS5.style.display = "block";
        iconS5.setAttribute("width", "40");
        iconS6.style.display = "block";
        iconS6.setAttribute("width", "40");
    }
}
window.addEventListener("DOMContentLoaded", updateIconSize);
window.addEventListener("resize", updateIconSize);