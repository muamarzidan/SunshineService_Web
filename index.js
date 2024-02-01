const MultipleItemCarousel = document.querySelector('#carouselExampleControls')

if (window.matchMedia("(max-width: 576px)").matches) {
    const carousel = new bootstrap.Carousel(MultipleItemCarousel, {
        interval: false
    })
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;

    $(".carousel-control-next").on("click", function () {
        console.log("next");
        if (scrollPosition < (carouselWidth - cardWidth * 4)) { 
            scrollPosition += cardWidth;
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
        }
    });

    $(".carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $(".carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
            );
        }
    });
} else {
    $(MultipleItemCarousel).addClass("slide");
}