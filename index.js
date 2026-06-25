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

const btnScroll = document.getElementById('btn-scroll');

window.addEventListener('scroll', () => {
    const alturaTotal = document.body.scrollHeight - window.innerHeight;
    const posicaoAtual = window.scrollY;
    const percentual = posicaoAtual / alturaTotal;

    if (percentual > 0.5) {
        // passou da metade — seta pra cima
        btnScroll.textContent = '↑';
    } else {
        // ainda no topo — seta pra baixo
        btnScroll.textContent = '↓';
    }
});

btnScroll.addEventListener('click', () => {
    const alturaTotal = document.body.scrollHeight - window.innerHeight;
    const posicaoAtual = window.scrollY;
    const percentual = posicaoAtual / alturaTotal;

    if (percentual > 0.5) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});