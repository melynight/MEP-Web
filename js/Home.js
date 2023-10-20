const menuOpener = document.querySelector(".imagen-menu");
const menu = document.querySelector(".lateral-menu");
const contenedorImg = document.querySelector(".container-img");
const mosaico = document.querySelector(".contenedor-mosaico");

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


contenedorImg.addEventListener('click', (e) => {
            window.open('http://bit.ly/pacto-dei-mep', '_blank');
});

mosaico.addEventListener('click', (e) => {
    window.open('https://drive.google.com/drive/folders/1flWp-hR7ECWpv-Tzygbi3BDyfzoDcIkq?usp=sharing', '_blank');
});

           
