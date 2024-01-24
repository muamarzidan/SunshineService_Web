function updateIconSizeAbout() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const iconToga = document.getElementById("icon-abt-1");
    const iconPeople = document.getElementById("icon-abt-2");
    const iconHappy = document.getElementById("icon-abt-3");
    const iconBook = document.getElementById("icon-abt-4");

    if (width <= 576) {
        iconToga.style.display = "block";
        iconToga.setAttribute("width", "16");

        iconPeople.style.display = "block";
        iconPeople.setAttribute("width", "16");

        iconHappy.style.display = "block";
        iconHappy.setAttribute("width", "16");

        iconBook.style.display = "block";
        iconBook.setAttribute("width", "16");
    } else if (width <= 768) {
        iconToga.style.display = "block";
        iconToga.setAttribute("width", "24");

        iconPeople.style.display = "block";
        iconPeople.setAttribute("width", "24");

        iconHappy.style.display = "block";
        iconHappy.setAttribute("width", "24");

        iconBook.style.display = "block";
        iconBook.setAttribute("width", "24");
    } else if (width <= 992) {
        iconToga.style.display = "block";
        iconToga.setAttribute("width", "30");

        iconPeople.style.display = "block";
        iconPeople.setAttribute("width", "30");

        iconHappy.style.display = "block";
        iconHappy.setAttribute("width", "30");

        iconBook.style.display = "block";
        iconBook.setAttribute("width", "30");
    } else {
        iconToga.style.display = "block";
        iconToga.setAttribute("width", "35");

        iconPeople.style.display = "block";
        iconPeople.setAttribute("width", "35");

        iconHappy.style.display = "block";
        iconHappy.setAttribute("width", "35");

        iconBook.style.display = "block";
        iconBook.setAttribute("width", "35");
    }
}
window.addEventListener("DOMContentLoaded", updateIconSizeAbout);
window.addEventListener("resize", updateIconSizeAbout);


function updateIconSizeService() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    const iconPeople = document.getElementById("icon-srv-1");
    const iconHappy = document.getElementById("icon-srv-2");
    const iconBook = document.getElementById("icon-srv-3");

    if (width <= 576) {
        iconPeople.style.display = "block";
        iconPeople.setAttribute("width", "16");

        iconHappy.style.display = "block";
        iconHappy.setAttribute("width", "16");

        iconBook.style.display = "block";
        iconBook.setAttribute("width", "16");
    } else if (width <= 768) {
        iconPeople.style.display = "block";
        iconPeople.setAttribute("width", "24");

        iconHappy.style.display = "block";
        iconHappy.setAttribute("width", "24");

        iconBook.style.display = "block";
        iconBook.setAttribute("width", "24");
    } else if (width <= 992) {
        iconPeople.style.display = "block";
        iconPeople.setAttribute("width", "30");

        iconHappy.style.display = "block";
        iconHappy.setAttribute("width", "30");

        iconBook.style.display = "block";
        iconBook.setAttribute("width", "30");
    } else {
        iconPeople.style.display = "block";
        iconPeople.setAttribute("width", "26");

        iconHappy.style.display = "block";
        iconHappy.setAttribute("width", "26");

        iconBook.style.display = "block";
        iconBook.setAttribute("width", "26");
    }
}
window.addEventListener("DOMContentLoaded", updateIconSizeService);
window.addEventListener("resize", updateIconSizeService);


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
  


