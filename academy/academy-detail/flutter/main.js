function updateIconSizeAbout() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const iconClock = document.getElementById("icon-hero-1");
    const iconCalender = document.getElementById("icon-hero-2");

    if (width <= 576) {
        iconClock.style.display = "block";
        iconClock.setAttribute("width", "20");

        iconCalender.style.display = "block";
        iconCalender.setAttribute("width", "20");
    } else if (width <= 768) {
        iconClock.style.display = "block";
        iconClock.setAttribute("width", "24");

        iconCalender.style.display = "block";
        iconCalender.setAttribute("width", "24");
    } else if (width <= 996) {
        iconClock.style.display = "block";
        iconClock.setAttribute("width", "22");

        iconCalender.style.display = "block";
        iconCalender.setAttribute("width", "22");
    } else {
        iconClock.style.display = "block";
        iconClock.setAttribute("width", "24");

        iconCalender.style.display = "block";
        iconCalender.setAttribute("width", "24");
    }
}
window.addEventListener("DOMContentLoaded", updateIconSizeAbout);
window.addEventListener("resize", updateIconSizeAbout);


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
window.addEventListener("DOMContentLoaded", updateIconSizeFooter);
window.addEventListener("resize", updateIconSizeFooter);
  


