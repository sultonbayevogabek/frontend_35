try {
    const navbarOpen = document.querySelector('.mobile-nav__toggler'),
        navbarClose = document.querySelector('.nav-close'),
        navbar = document.querySelector('.main-menu__list')

    navbarOpen.addEventListener('click', evt => {
        navbar.style.top = 0
    })

    navbarClose.addEventListener('click', evt => {
        navbar.style.top = '10000px'
    })
} catch (e) {}
