// Open menu
const buttonActive = document.getElementById('button--active')
buttonActive.addEventListener('click', () => {
	document.getElementById('nav-menu').classList.add('menu--active')
})

// Close menu
const buttonDisabled = document.getElementById('button--disabled')
buttonDisabled.addEventListener('click', () => {
	document.getElementById('nav-menu').classList.remove('menu--active')
})