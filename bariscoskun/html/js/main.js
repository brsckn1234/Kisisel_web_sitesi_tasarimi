const navShow = () => {
    const burger = document.querySelector('.burger_btn');
    const nav = document.querySelector('.menu-links');
    const links = document.querySelectorAll('.menu-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('menu-active');

        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `linksFade 0.9s ease forwards ${index / 5 + 0.2}s`;
            }
        });

        burger.classList.toggle('close');
    });
}

navShow();