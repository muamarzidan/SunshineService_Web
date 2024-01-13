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

