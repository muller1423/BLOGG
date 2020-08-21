const navSide = () => {
    const burger = document.querySelector('.hamburguesa')
    const nav = document.querySelector('.enlaces')
    const links = document.querySelectorAll('.enlaces a')
    // toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('active')
        links.forEach((link, index) => {
            if (link.style.animation) {
                setTimeout(function () {
                    link.style.animation = ''
                }, 400);

            } else {
                link.style.animation = 'nav_enlaces 0.5s ease forwards ' + (index / 6 + 0.3) + 's';
            }
        })
    })
    // animate links 
}
navSide()