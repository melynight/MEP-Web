const body = document.querySelector(".body");
const menuOpener = document.querySelector(".imagen-menu");
const menu = document.querySelector(".lateral-menu");

// Detecta cuando abrir y cuando cerrar el menu
menuOpener.addEventListener('click', (e) => {
    if (menu.style.left == '0px') // si lo estaba mostrando
        menu.style.left = '-400px'; // lo esconde
    else if (menu.style.left == '-400px' || menu.style.left == '')
        menu.style.left = '0px'; // lo muestra
});

document.addEventListener('click', (e) => {
    if (e.target != menuOpener)
        menu.style.left = '-400px'; // lo esconde
});

$(document).ready(function() {

 const button = $(".button-firma-ya");
 const textoPacto = $(".texto-proyecto-2");
 const logo = document.querySelector(".logo");
 const menuOpener = document.querySelector(".imagen-menu");

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
/*window.addEventListener('scroll', function() {

    const encabezado = document.querySelector('.encabezado');

    if (window.scrollY > 100) {
        logo.style.transition = "transform 0.5s ease";
        logo.style.height = '40px';
        encabezado.style.height = '70px';
        menuOpener.style.height = '28px';
        menu.style.marginTop = '70px';

    } else {
        logo.style.height = '60px';
        encabezado.style.height = '80px';
        menu.style.marginTop = '80px';
    }
});*/

});