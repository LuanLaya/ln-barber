const abrirmenu = document.getElementById("openMenu");
const fecharmenu = document.getElementById("fecharmenu");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay-menu");

abrirmenu.addEventListener('click', () => {
    menu.classList.add('active')
    overlay.classList.add('active')
});

const fechar = () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
};

fecharmenu.addEventListener('click', fechar);
overlay.addEventListener('click', fechar);