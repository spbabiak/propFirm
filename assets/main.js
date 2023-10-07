// Dropdown Menu Item ----------------------------------------------//
// Mobile Menu -----------------------------------------------------//
// Switcher Controls -----------------------------------------------//
// Facts Slider ----------------------------------------------------//
// Testimonials Slider ---------------------------------------------//
// Form Submission -------------------------------------------------//
// - Contact Form --------------------------------------------------//
// - Registration Form ---------------------------------------------//
// - Open Demo Form ------------------------------------------------//


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

const copyrightYears = document.getElementsByClassName('year')
let copyrightYearsArray = Array.from(copyrightYears)
let currentDate = new Date()
let currentYear = currentDate.getFullYear()
copyrightYearsArray.forEach((copyrightYear) => {
	copyrightYear.innerHTML = currentYear
})


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
/* Form Submission -------------------------------------------------------------------------------------------------------------------------------*/

// Contact Form ---------------------------------------------------------------//
const contactForm = document.getElementById('contact-form')
if(contactForm) {
	// Form elements for error display
	const errorName = contactForm.querySelector('.error_name')
	const errorSurname = contactForm.querySelector('.error_surname')
	const errorEmail = contactForm.querySelector('.error_email')
	const errorPhone = contactForm.querySelector('.error_phone')
	const errorCountry = contactForm.querySelector('.error_country')
	const errorPlatform = contactForm.querySelector('.error_platform')
	const errorSubject = contactForm.querySelector('.error_subject')

	function isValidPhonenumber(value) {
    	return (/^\d{7,}$/).test(value.replace(/[\s()+\-\.]|ext/gi, ''))
	}

	function sendData() {
	    const XHR = new XMLHttpRequest()

	    // Bind the FormData object and the form element
	    const FD = new FormData(contactForm)

	    var name = FD.get('name')
	    var surname = FD.get('surname')
	    var email = FD.get('email')
	    var phone = FD.get('phone')
	    var country = FD.get('country')
	    var platform = FD.get('platform')
	    var subject = FD.get('message')

	    // Define what happens on successful data submission
	    XHR.addEventListener( "load", function(event) {
	      alert( event.target.responseText )
		})

	    // Define what happens in case of error
	    XHR.addEventListener( "error", function( event ) {
	      alert( 'Oops! Something went wrong.' )
	    })

		// Form data validation
	    var errorCounter = 0
		var nameFormat = /^[A-Za-z\s]*$/
		var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		var countryNameFormat = /^[A-Za-z\s]*$/
		var subjectFormat = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/

		if((name == '') || (name.length < 3)) {
			++errorCounter
			errorName.innerHTML = 'This field is required'
			errorName.previousElementSibling.style.marginBottom = '40px'
		} else if(name.match(nameFormat)) {
			errorName.innerHTML = ''
		} else {
			++errorCounter
			errorName.innerHTML = 'Only letters and spaces allowed'
			errorName.previousElementSibling.style.marginBottom = '40px'
		}

		if((surname == '') || (surname.length < 2)) {
			++errorCounter
			errorSurname.innerHTML = 'This field is required'
			errorSurname.previousElementSibling.style.marginBottom = '40px'
		} else if(surname.match(nameFormat)) {
			errorSurname.innerHTML = ''
		}	else {
			++errorCounter
			errorSurname.innerHTML = 'Only letters and spaces allowed'
			errorSurname.previousElementSibling.style.marginBottom = '40px'
		}

		if(email == '') {
			++errorCounter
			errorEmail.innerHTML = 'This field is required'
			errorEmail.previousElementSibling.style.marginBottom = '40px'
		} else if(email.match(mailFormat)) {
			errorEmail.style.color = 'green'
			errorEmail.innerHTML = '✓ Valid'
		} else {
			++errorCounter
			errorEmail.innerHTML = 'Invalid email format'
			errorEmail.previousElementSibling.style.marginBottom = '40px'	
		}

		if(phone == '') {
			++errorCounter
			errorPhone.style.color = 'red'
			errorPhone.innerHTML = 'This field is required'
			errorPhone.previousElementSibling.style.marginBottom = '40px'
		} else if(isValidPhonenumber(phone)) {
			errorPhone.style.color = 'green'
			errorPhone.innerHTML = '✓ Valid'
		} else {
			++errorCounter
			errorPhone.style.color = 'red'
			errorPhone.innerHTML = 'Invalid phone format'
			errorPhone.previousElementSibling.style.marginBottom = '40px'
		}

		if((country == '') || (country.length < 3)) {
			++errorCounter
			errorCountry.innerHTML = 'This field is required'
			errorCountry.previousElementSibling.style.marginBottom = '40px'
		} else if(country.match(countryNameFormat)) {
			errorCountry.innerHTML = ''
		} else {
			++errorCounter
			errorCountry.innerHTML = 'Invalid country name format'
			errorCountry.previousElementSibling.style.marginBottom = '40px'
		}

		if(platform == 0) {
			++errorCounter
			errorPlatform.innerHTML = 'Choose platform'
			errorPlatform.previousElementSibling.style.marginBottom = '40px'
		} else {
			errorPlatform.innerHTML = ''
		}

		if(subject == '') {
			++errorCounter
			errorSubject.innerHTML = 'Tell us your message'
		} else if(subject.match(subjectFormat)) {
			errorSubject.innerHTML = ''
		} else {
			++errorCounter
			errorSubject.innerHTML = 'Message contains restricted symbols'
		}

	    if(errorCounter == 0) {
	    	// Set up our request
	    	XHR.open("POST", "contactFormDataHandler.php")

		    // The data sent is what the user provided in the form
		    XHR.send(FD)
	    }
	}

	contactForm.addEventListener('submit', event => {
		event.preventDefault()
		sendData()
	});
}

// Contact Form End -------------------------------------------------------------------//

// Open Demo Form ---------------------------------------------------------------------//
const openDemoForm = document.getElementById('open-demo-form')
if(openDemoForm) {
	// Form elements for error display
	const errorName = openDemoForm.querySelector('.error_name')
	const errorSurname = openDemoForm.querySelector('.error_surname')
	const errorEmail = openDemoForm.querySelector('.error_email')
	const errorPhone = openDemoForm.querySelector('.error_phone')

	function isValidPhonenumber(value) {
    	return (/^\d{7,}$/).test(value.replace(/[\s()+\-\.]|ext/gi, ''))
	}

	function sendData() {
	    const XHR = new XMLHttpRequest()

	    // Bind the FormData object and the form element
	    const FD = new FormData(openDemoForm)

	    var name = FD.get('name')
	    var surname = FD.get('surname')
	    var email = FD.get('email')
	    var phone = FD.get('phone')
	    // var country = FD.get('country')

	    // Define what happens on successful data submission
	    XHR.addEventListener( "load", function(event) {
	      alert( event.target.responseText )
		})

	    // Define what happens in case of error
	    XHR.addEventListener( "error", function( event ) {
	      alert( 'Oops! Something went wrong.' )
	    })

		// Form data validation
	    var errorCounter = 0
		var nameFormat = /^[A-Za-z\s]*$/
		var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		// var countryNameFormat = /^[A-Za-z\s]*$/

		if((name == '') || (name.length < 3)) {
			++errorCounter
			errorName.innerHTML = 'This field is required'
			errorName.previousElementSibling.style.marginBottom = '40px'
		} else if(name.match(nameFormat)) {
			errorName.innerHTML = ''
		} else {
			++errorCounter
			errorName.innerHTML = 'Only letters and spaces allowed'
			errorName.previousElementSibling.style.marginBottom = '40px'
		}

		if((surname == '') || (surname.length < 2)) {
			++errorCounter
			errorSurname.innerHTML = 'This field is required'
			errorSurname.previousElementSibling.style.marginBottom = '40px'
		} else if(surname.match(nameFormat)) {
			errorSurname.innerHTML = ''
		}	else {
			++errorCounter
			errorSurname.innerHTML = 'Only letters and spaces allowed'
			errorSurname.previousElementSibling.style.marginBottom = '40px'
		}

		if(email == '') {
			++errorCounter
			errorEmail.innerHTML = 'This field is required'
			errorEmail.previousElementSibling.style.marginBottom = '40px'
		} else if(email.match(mailFormat)) {
			errorEmail.style.color = 'green'
			errorEmail.innerHTML = '✓ Valid'
		} else {
			++errorCounter
			errorEmail.innerHTML = 'Invalid email format'
			errorEmail.previousElementSibling.style.marginBottom = '40px'	
		}

		if(phone == '') {
			++errorCounter
			errorPhone.style.color = 'red'
			errorPhone.innerHTML = 'This field is required'
			errorPhone.previousElementSibling.style.marginBottom = '40px'
		} else if(isValidPhonenumber(phone)) {
			errorPhone.style.color = 'green'
			errorPhone.innerHTML = '✓ Valid'
		} else {
			++errorCounter
			errorPhone.style.color = 'red'
			errorPhone.innerHTML = 'Invalid phone format'
			errorPhone.previousElementSibling.style.marginBottom = '40px'
		}

	    if(errorCounter == 0) {
	    	// Set up our request
	    	XHR.open("POST", "openDemoFormHandler.php")

		    // The data sent is what the user provided in the form
		    XHR.send(FD)
	    }
	}

	openDemoForm.addEventListener('submit', event => {
		event.preventDefault()
		sendData()
	});
}
// Open Demo Form End -----------------------------------------------------------------//

// Open Live Form ---------------------------------------------------------------------//
const openLiveForm = document.getElementById('open-live-form')
if(openLiveForm) {
	// Form elements for error display
	const errorName = openLiveForm.querySelector('.error_name')
	const errorSurname = openLiveForm.querySelector('.error_surname')
	const errorEmail = openLiveForm.querySelector('.error_email')
	const errorPhone = openLiveForm.querySelector('.error_phone')

	function isValidPhonenumber(value) {
    	return (/^\d{7,}$/).test(value.replace(/[\s()+\-\.]|ext/gi, ''))
	}

	function sendData() {
	    const XHR = new XMLHttpRequest()

	    // Bind the FormData object and the form element
	    const FD = new FormData(openLiveForm)

	    var name = FD.get('name')
	    var surname = FD.get('surname')
	    var email = FD.get('email')
	    var phone = FD.get('phone')
	    // var country = FD.get('country')

	    // Define what happens on successful data submission
	    XHR.addEventListener( "load", function(event) {
	      alert( event.target.responseText )
		})

	    // Define what happens in case of error
	    XHR.addEventListener( "error", function( event ) {
	      alert( 'Oops! Something went wrong.' )
	    })

		// Form data validation
	    var errorCounter = 0
		var nameFormat = /^[A-Za-z\s]*$/
		var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		// var countryNameFormat = /^[A-Za-z\s]*$/

		if((name == '') || (name.length < 3)) {
			++errorCounter
			errorName.innerHTML = 'This field is required'
			errorName.previousElementSibling.style.marginBottom = '40px'
		} else if(name.match(nameFormat)) {
			errorName.innerHTML = ''
		} else {
			++errorCounter
			errorName.innerHTML = 'Only letters and spaces allowed'
			errorName.previousElementSibling.style.marginBottom = '40px'
		}

		if((surname == '') || (surname.length < 2)) {
			++errorCounter
			errorSurname.innerHTML = 'This field is required'
			errorSurname.previousElementSibling.style.marginBottom = '40px'
		} else if(surname.match(nameFormat)) {
			errorSurname.innerHTML = ''
		}	else {
			++errorCounter
			errorSurname.innerHTML = 'Only letters and spaces allowed'
			errorSurname.previousElementSibling.style.marginBottom = '40px'
		}

		if(email == '') {
			++errorCounter
			errorEmail.innerHTML = 'This field is required'
			errorEmail.previousElementSibling.style.marginBottom = '40px'
		} else if(email.match(mailFormat)) {
			errorEmail.style.color = 'green'
			errorEmail.innerHTML = '✓ Valid'
		} else {
			++errorCounter
			errorEmail.innerHTML = 'Invalid email format'
			errorEmail.previousElementSibling.style.marginBottom = '40px'	
		}

		if(phone == '') {
			++errorCounter
			errorPhone.style.color = 'red'
			errorPhone.innerHTML = 'This field is required'
			errorPhone.previousElementSibling.style.marginBottom = '40px'
		} else if(isValidPhonenumber(phone)) {
			errorPhone.style.color = 'green'
			errorPhone.innerHTML = '✓ Valid'
		} else {
			++errorCounter
			errorPhone.style.color = 'red'
			errorPhone.innerHTML = 'Invalid phone format'
			errorPhone.previousElementSibling.style.marginBottom = '40px'
		}

	    if(errorCounter == 0) {
	    	// Set up our request
	    	XHR.open("POST", "openLiveFormHandler.php")

		    // The data sent is what the user provided in the form
		    XHR.send(FD)
	    }
	}

	openLiveForm.addEventListener('submit', event => {
		event.preventDefault()
		sendData()
	});
}
// Open Live Form End -----------------------------------------------------------------//

/* Form Submission END -------------------------------------------------------------------------------------------------------------------------------*/
