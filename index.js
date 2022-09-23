// Dropdown Menu Item -----------------------------------//
// Mobile Menu ------------------------------------------//
// Currency Switcher Mobile -----------------------------//
// Switcher Controls ------------------------------------//
// Facts Slider -----------------------------------------//
// Testimonials Slider ----------------------------------//

const menuBtn = document.querySelector('.menu-btn-wrapper')
const navVertical = document.querySelector('.nav-vertical')
const closeBtn = document.querySelector('.close-btn')
const programsItem = document.querySelector('.programs')
const programsList = document.querySelector('.programs-list')

const slider = document.querySelector('.facts-slider')
const testimonialSlider = document.querySelector('.testimonials-slider')

const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')
const circleControlsWrapper = document.querySelector('.facts-carousel .controls .circles')
const testimonialCirclesWrapper = document.querySelector('.testimonials .controls .circles')

const switcherContol = document.querySelectorAll('.switcher-controls')
const switcherContolsArray = Array.from(switcherContol)

const currencySwitcherContolMobile = document.querySelectorAll('.currency-switcher-mobile .switcher-controls')
const currencySwitcherItemsMobileArray = Array.from(currencySwitcherContolMobile)
let currencyArray = []


// Switcher Controls -------------------------------------------------------------------------------
switcherContolsArray.forEach(item => {
	let switcherContolItems = item.querySelectorAll('li')
	let switcherContolItemsArray = Array.from(switcherContolItems)

	switcherContolItemsArray.forEach((item, index) => {
		item.addEventListener('click', event => {
			for(let i = 0; i < switcherContolItemsArray.length; i++) {
				if(switcherContolItemsArray[i].classList == 'active') {
					switcherContolItemsArray[i].classList.remove('active')		
				}
			}

			if(item.classList !== 'active') {
				item.classList.add('active')
			}
		})
	})	
})

// Switcher Controls End ---------------------------------------------------------------------

// Currency Switcher Mobile ---------------------------------------------------------------------
currencySwitcherContolMobile.forEach(item => {
	const currencyItems = item.querySelectorAll('li')
	const currencyItemsArray = Array.from(currencyItems)
	const items = currencyArray.push(currencyItemsArray)
})

let wholeCurrencyArray
for(let i = 0; i < currencyArray.length - 1; i++) {
	wholeCurrencyArray = currencyArray[i].concat(currencyArray[i+1])
}

wholeCurrencyArray.forEach(item => {
	item.addEventListener('click', event => {
		for(let i = 0; i < wholeCurrencyArray.length; i++) {
			if(wholeCurrencyArray[i].classList == 'active') {
				wholeCurrencyArray[i].classList.remove('active')		
			}
		}

		if(item.classList !== 'active') {
			item.classList.add('active')
		}
	})
})

// Currency Switcher Mobile End -----------------------------------------------------------------------------------------

// Mobile Menu -----------------------------------------------------------------------------------------
menuBtn.addEventListener('click', event => {
	if(getComputedStyle(navVertical).display == 'none') {
		navVertical.style.display = 'block'
	} else {
		navVertical.style.display = 'none'
	}
})

closeBtn.addEventListener('click', event => {
	navVertical.style.display = 'none'	
})

// Mobile Menu End -----------------------------------------------------------------------------------------

// Dropdown Menu item -----------------------------------------------------------------------------------------
programsItem.addEventListener('click', event => {
	if(getComputedStyle(programsList).display == 'none') {
		programsList.style.display = 'block'
	} else {
		programsList.style.display = 'none'
	}	
})

// Dropdown Menu item End --------------------------------------------------------------------------

// Facts Slider ------------------------------------------------------------------------------------
let screenWidth = screen.width;

let slide = 0

if(screenWidth < 960) {
	let slidesCount = slider.children.length - 1
	let slideWidth = 100 / (slidesCount + 1)

	slider.style.width = (slidesCount + 1) * 100 + '%'

	function moveSlide() {
	    slider.style.transform = 'translate(' + slide * -slideWidth + '%)'
	}

	rightArrow.onclick = () => {
	    slide = (slide < slidesCount) ? slide + 1 : 0
	    moveSlide()
	}

	leftArrow.onclick = () => {
	    slide = (slide > 0) ? slide - 1 : slidesCount
	    moveSlide()
	}

} else {
	leftArrow.style.display = "none"
	rightArrow.style.display = "none"
}
// Facts Slider End ------------------------------------------------------------------------------------

// Testimonials Slider ------------------------------------------------------------------------------
let testimonialSlidesCount = testimonialSlider.children.length - 1
let testimonialSlideWidth = 100 / (testimonialSlidesCount + 1)

if(screenWidth < 1440) {
	testimonialSlider.style.width = (testimonialSlidesCount + 1) * 100 + '%'
}

for(let i = 0; i <= testimonialSlidesCount; i++) {
    let circleElement = document.createElement('li')
    testimonialCirclesWrapper.appendChild(circleElement)
}

const testimonialCircleControls = document.querySelectorAll('.testimonials .controls .circles li')
testimonialCirclesWrapper.firstChild.classList.add('active')

function moveTestimonialSlide() {
	testimonialSlider.style.transform = 'translate(' + slide * -testimonialSlideWidth + '%)'
    testimonialCirclesWrapper.querySelector('.active').classList.remove('active')
    testimonialCircleControls[slide].classList.add('active')	
}

testimonialCircleControls.forEach((circle, index) => {
    circle.onclick = () => {
        slide = index
        moveTestimonialSlide()
    }
})

// Testimonials Slider End ------------------------------------------------------------------------------

