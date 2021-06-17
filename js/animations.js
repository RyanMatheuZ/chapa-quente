const buttonActive = document.getElementById('button--active')
buttonActive.addEventListener('click', () => {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.add('menu--active')
})

const buttonDisabled = document.getElementById('button--disabled')
buttonDisabled.addEventListener('click', () => {
	document.getElementById('nav-menu').classList.remove('menu--active')
})

addEventListener('load', () => {
	const loadAppearFall = document.querySelectorAll('.load--appear-fall')
	loadAppearFall.forEach(appearFall => {
		appearFall.classList.add('effect--appear-fall')
	})

	const loadAppearGrow = document.querySelectorAll('.load--appear-grow')
	loadAppearGrow.forEach(appearGrow => {
		appearGrow.classList.add('effect--appear-grow')
	})
})

addEventListener('scroll', () => {
	const scrollAppearFall = document.querySelectorAll('.scroll--appear-fall')
	scrollAppearFall.forEach(appearFall => {
		if (appearFall.getBoundingClientRect().bottom < innerHeight) {
			appearFall.classList.add('effect--appear-fall')
		}
	})

	const scrollAppearGrow = document.querySelectorAll('.scroll--appear-grow')
	scrollAppearGrow.forEach(appearGrow => {
		if (appearGrow.getBoundingClientRect().top < innerHeight) {
			appearGrow.classList.add('effect--appear-grow')
		}
	})

	const scrollAppearSlidLeft = document.querySelectorAll('.scroll--appear-slid-left')
	scrollAppearSlidLeft.forEach(appearSlidLeft => {
		if (appearSlidLeft.getBoundingClientRect().bottom < innerHeight) {
			appearSlidLeft.classList.add('effect--appear-slid-left')
		}
	})
})