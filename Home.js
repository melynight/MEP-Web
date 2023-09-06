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