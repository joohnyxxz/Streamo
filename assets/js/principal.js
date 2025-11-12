function toggleMenu(btn) {
    btn.classList.toggle('open');
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

window.addEventListener('click', function(e) {
    const btn = document.querySelector('.menu-btn');
    const menu = document.getElementById('menu');

    if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
        btn.classList.remove('open');
        menu.style.display = 'none';
    }
});

// Inicialização do Swiper de Destaques
const destaquesSwiper = new Swiper('.swiper-destaques', {
    slidesPerView: 1, 
    loop: true,
    speed: 800, 

    autoplay: {
        delay: 6000, 
        disableOnInteraction: false, 
    },
    
    pagination: {
        el: '.swiper-pagination-destaques', 
        clickable: true,
    },
});

const containersFilmes = document.querySelectorAll('.carrossel .swiper');

containersFilmes.forEach(swiperElement => {
    new Swiper(swiperElement, {
        slidesPerView: 1, 
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: swiperElement.querySelector('.swiper-button-next'),
            prevEl: swiperElement.querySelector('.swiper-button-prev'),
        },
    });
});