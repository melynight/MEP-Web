const body = document.querySelector(".body");
const logo = document.querySelector(".imagen-menu");
const divMenu = document.querySelector(".lateral-menu");

logo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("click")
    // divMenu.style.width = "100%";
    // divMenu.style.height = "100%";
    divMenu.style.left = '0'; // Nueva posición en X
    divMenu.style.top = '0'; // Nueva posición en X
});

// Detectar clic fuera del elemento para restablecer la posición
document.addEventListener('click', (e) => {
    if (e.target != divMenu) {
        divMenu.style.left = '-400px';
    }
});

$(document).ready(function() {
    const carousel = $("#carouselExample");
    const control_prev = $(".carousel-control-prev");
    const control_next = $(".carousel-control-next");
    const carousel_item = $(".carousel-item");

    if(control_prev.hover)
    (
        function() {
            carousel.find("img").css("opacity", "1");
        }
    );
        if(control_next.hover)
    (

        function() {
            carousel.find("img").css("opacity", "1");
        }

    )
    else{
        carousel_item.find("img").css("opacity", "0.55");
    }
});