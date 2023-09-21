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

 const button = $(".button-firma-ya");
 const textoPacto = $(".texto-proyecto-2");

 button.click(function(){

    window.open("https://drive.google.com/file/d/14BJRo-4ccJtPsZRs3VefswFfxTZDFfxV/view?usp=sharing", "_blank");


        });

      /*  textoPacto.hover(
            function() {
                $(this).find("p").css("font-size", "1.7rem");
                $(this).find("p").css("transition", "all 1s");
                $(this).css("opacity", "0.9");

            },
            function() {
                
                $(this).find("p").css("font-size", "1.6rem"); 
                $(this).css("opacity", "1");
            }
        );
*/

});