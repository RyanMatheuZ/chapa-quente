// Open Menu
const btnMenu = document.getElementById('btn-menu')
btnMenu.addEventListener('click', () => {
    document.getElementById('nav-menu').classList.add('active-menu')
})

// Close Menu
const btnClose = document.getElementById('btn-close-menu')
btnClose.addEventListener('click', () => {
    document.getElementById('nav-menu').classList.remove('active-menu')
})