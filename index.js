// Dropdown Menu Item -----------------------------------//
// Mobile Menu ------------------------------------------//
// Currency Switcher Mobile -----------------------------//
// Switcher Controls ------------------------------------//
// Facts Slider -----------------------------------------//
// Testimonials Slider ----------------------------------//
// Table Column Slider ----------------------------------//
// Popup Form -------------------------------------------//


const menuBtn = document.querySelector('.menu-btn-wrapper')
const navVertical = document.querySelector('.nav-vertical')
const menuCloseBtn = navVertical.querySelector('.close-btn')

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
if(currencySwitcherContolMobile) {
	currencySwitcherContolMobile.forEach(item => {
		const currencyItems = item.querySelectorAll('li')
		const currencyItemsArray = Array.from(currencyItems)
		const items = currencyArray.push(currencyItemsArray)
	})

	let wholeCurrencyArray
	for(let i = 0; i < currencyArray.length - 1; i++) {
		wholeCurrencyArray = currencyArray[i].concat(currencyArray[i+1])
	}

	if(wholeCurrencyArray)  {
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
	}
}

// Currency Switcher Mobile End -----------------------------------------------------------------------------------------

// Mobile Menu -----------------------------------------------------------------------------------------
menuBtn.addEventListener('click', event => {
	if(getComputedStyle(navVertical).display == 'none') {
		navVertical.style.display = 'block'
	} else {
		navVertical.style.display = 'none'
	}
})

menuCloseBtn.addEventListener('click', event => {
	navVertical.style.display = 'none'	
})

// Mobile Menu End -----------------------------------------------------------------------------------------

// Dropdown Menu item -----------------------------------------------------------------------------------------
const navHorizontalDropDown = document.querySelector('.nav-horizontal .drop-down')
const navVerticalDropDown = document.querySelector('.nav-vertical .drop-down')
const navHorizontalDropDownItems = document.querySelector('.nav-horizontal .drop-down-list')
const navVerticalDropDownItems = document.querySelector('.nav-vertical .drop-down-list')


navHorizontalDropDown.onclick = () => {
	if(getComputedStyle(navHorizontalDropDownItems).display == 'none') {
		navHorizontalDropDownItems.style.display = 'block'
	} else {
		navHorizontalDropDownItems.style.display = 'none'
	}	
}

navVerticalDropDown.onclick = () => {
	if(getComputedStyle(navVerticalDropDownItems).display == 'none') {
		navVerticalDropDownItems.style.display = 'block'
	} else {
		navVerticalDropDownItems.style.display = 'none'
	}	
}

// Dropdown Menu item End --------------------------------------------------------------------------

// Facts Slider ------------------------------------------------------------------------------------
if(slider) {
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
}
// Facts Slider End ------------------------------------------------------------------------------------

// Testimonials Slider ------------------------------------------------------------------------------
// let testimonialSlidesCount = testimonialSlider.children.length - 1
// let testimonialSlideWidth = 100 / (testimonialSlidesCount + 1)

// if(screenWidth < 1440) {
// 	testimonialSlider.style.width = (testimonialSlidesCount + 1) * 100 + '%'
// }

// for(let i = 0; i <= testimonialSlidesCount; i++) {
//     let circleElement = document.createElement('li')
//     testimonialCirclesWrapper.appendChild(circleElement)
// }

// const testimonialCircleControls = document.querySelectorAll('.testimonials .controls .circles li')
// testimonialCirclesWrapper.firstChild.classList.add('active')

// function moveTestimonialSlide() {
// 	testimonialSlider.style.transform = 'translate(' + slide * -testimonialSlideWidth + '%)'
//     testimonialCirclesWrapper.querySelector('.active').classList.remove('active')
//     testimonialCircleControls[slide].classList.add('active')	
// }

// testimonialCircleControls.forEach((circle, index) => {
//     circle.onclick = () => {
//         slide = index
//         moveTestimonialSlide()
//     }
// })

// Testimonials Slider End ------------------------------------------------------------------------------

// Table Column Slider ----------------------------------------------------------------------------------
const tableArrowLeft = document.querySelector('.table-carousel .left')
const tableArrowRight = document.querySelector('.table-carousel .right')
const tableCell = document.querySelectorAll('.table-row .slide')
const tabelColumnLabel = document.querySelector('.label-wrapper')

function moveColumn() {
	tableCell.forEach(item => {
		item.style.transform = 'translateX(' + tableColumnIndex * -100 + '%)'
	})	

	if(tableColumnIndex == 1) { 
		tabelColumnLabel.style.display = 'block' 
	} else {
		tabelColumnLabel.style.display = 'none'	
	}
}

if(document.querySelector('.table-carousel')) {
	let tableColumnIndex = 0
	tableArrowRight.onclick = () => {
	 	tableColumnIndex = (tableColumnIndex < 2) ? tableColumnIndex + 1 : 0
	    moveColumn()
	}

	tableArrowLeft.onclick = () => {
		tableColumnIndex = (tableColumnIndex > 0) ? tableColumnIndex - 1 : 2
		moveColumn()
	}
}
// Table Column Slider  End ----------------------------------------------------------------------------------

// Popup Form -------------------------------------------//
const popup = document.querySelector('.popup-form-wrapper')
if(popup) {
	const popupCloseBtn = popup.querySelector('.close-btn')	
	const popupBtn = document.querySelector('.popup-btn')
	let screenHeight = screen.height
	window.onload = () => {
		popup.style.top = -screenHeight + 'px'
	}

	popupBtn.onclick = () => {
		popup.style.display = 'flex'
		popup.style.top = screenHeight / 4 + 'px'
	}

	popupCloseBtn.addEventListener('click', event => {
		popup.style.top = -screenHeight + 'px'	
	})
}

// Popup Form End -------------------------------------------//
