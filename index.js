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
const testimonialCirclesWrapper = document.querySelector('.testimonials-carousel .controls .circles')

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

programsItem.addEventListener('click', event => {
	if(getComputedStyle(programsList).display == 'none') {
		programsList.style.display = 'block'
	} else {
		programsList.style.display = 'none'
	}	
})

// Facts Slider

let slide = 0
let slidesCount = slider.children.length - 1
let testimonialSlidesCount = testimonialSlider.children.length - 1
let slideWidth = 100 / (slidesCount + 1)
let testimonialSlideWidth = 100 / (testimonialSlidesCount + 1)

slider.style.width = (slidesCount + 1) * 100 + '%'
testimonialSlider.style.width = (testimonialSlidesCount + 1) * 100 + '%'

for(let i = 0; i <= slidesCount; i++) {
    let circleElement = document.createElement('li')
    circleControlsWrapper.appendChild(circleElement)
}

for(let i = 0; i <= testimonialSlidesCount; i++) {
    let circleElement = document.createElement('li')
    testimonialCirclesWrapper.appendChild(circleElement)
}

const circleControls = document.querySelectorAll('.facts-carousel .controls .circles li')
circleControlsWrapper.firstChild.classList.add('active')

const testimonialCircleControls = document.querySelectorAll('.testimonials-carousel .controls .circles li')
testimonialCirclesWrapper.firstChild.classList.add('active')

function moveSlide() {
    slider.style.transform = 'translate(' + slide * -slideWidth + '%)'
    circleControlsWrapper.querySelector('.active').classList.remove('active')
    circleControls[slide].classList.add('active')
}

function moveTestimonialSlide() {
	testimonialSlider.style.transform = 'translate(' + slide * -testimonialSlideWidth + '%)'
    testimonialCirclesWrapper.querySelector('.active').classList.remove('active')
    testimonialCircleControls[slide].classList.add('active')	
}

rightArrow.onclick = () => {
    slide = (slide < slidesCount) ? slide + 1 : 0
    moveSlide()
}

leftArrow.onclick = () => {
    slide = (slide > 0) ? slide - 1 : slidesCount
    moveSlide()
}

circleControls.forEach((circle, index) => {
    circle.onclick = () => {
        slide = index
        moveSlide()
    }
})

testimonialCircleControls.forEach((circle, index) => {
    circle.onclick = () => {
        slide = index
        moveTestimonialSlide()
    }
})
