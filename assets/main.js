// Dropdown Menu Item ----------------------------------------------//
// Mobile Menu -----------------------------------------------------//
// Currency Switcher Mobile ----------------------------------------//
// Switcher Controls -----------------------------------------------//
// Facts Slider ----------------------------------------------------//
// Testimonials Slider ---------------------------------------------//
// Table Column Slider ---------------------------------------------//
// Show Open Demo Popup Form ---------------------------------------//
// Show Registration Popup Form ------------------------------------//
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

// Table Column Slider ----------------------------------------------------------------------------------
const tableArrowLeft = document.querySelector('.table-carousel .left')
const tableArrowRight = document.querySelector('.table-carousel .right')
const tableCell = document.querySelectorAll('.table-row .slide')
const tabelColumnLabel = document.querySelector('.label-wrapper')
let tableColumnIndex = 0

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

// Show Open Demo Popup Form -------------------------------------------//
const popup = document.querySelector('.demo-popup-form-wrapper')
let screenHeight = screen.height

if(popup) {
	const popupCloseBtn = popup.querySelector('.close-btn')	
	const popupBtn = document.querySelector('.popup-btn')
	window.onload = () => {
		popup.style.top = -screenHeight + 'px'
	}

	popupBtn.onclick = () => {
		popup.style.display = 'block'
		popup.style.top = screenHeight / 4 + 'px'
	}

	popupCloseBtn.addEventListener('click', event => {
		popup.style.top = -screenHeight - (screenHeight / 4) + 'px'	
	})
}

// Show Open Demo Popup Form End -------------------------------------------//

// Show Registration Popup Form -----------------------------------------//
// const popupRegistration = document.querySelector('.reg-popup-form-wrapper')
// const popupRegBtn = document.querySelectorAll('.popup-reg-btn')

// if(popupRegistration) {
// 	const popupRegCloseBtn = popupRegistration.querySelector('.close-btn')	
// 	const birthYear = document.getElementById('POST-birth-y') 
// 	const birthMonth = document.getElementById('POST-birth-m') 
// 	const birthDay = document.getElementById('POST-birth-d') 

// 	for(let y = new Date().getFullYear(); y >= 1900; y--) {
// 		let optionElement = document.createElement("option")
// 		let textNode = document.createTextNode(y)
// 		optionElement.setAttribute('value', y)
// 		optionElement.appendChild(textNode)
// 		birthYear.appendChild(optionElement)
// 	}

// 	for(let d = 1; d <= 31; d++) {
// 		let optionElement = document.createElement("option")
// 		let textNode = document.createTextNode(d)
// 		optionElement.setAttribute('value', d)
// 		optionElement.appendChild(textNode)
// 		birthDay.appendChild(optionElement)
// 	}

// 	window.onload = () => {
// 		popupRegistration.style.top = -screenHeight + 'px'
// 	}

// 	popupRegBtn.forEach(item => {
// 		item.onclick = () => {
// 			popupRegistration.style.display = 'block'
// 			popupRegistration.style.top = screenHeight / 4 + window.scrollY + 'px'
// 		}
// 	})

// 	popupRegCloseBtn.addEventListener('click', event => {
// 		popupRegistration.style.top = -screenHeight - (screenHeight / 4) - window.scrollY + 'px'	
// 	})
// }
// Show Registration Popup Form End -----------------------------------------//

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
	    var platform = FD.get('POST-platform')
	    var subject = FD.get('POST-subject')

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

// Registration Form ------------------------------------------------------------------//
// const regForm = document.getElementById('registration-form')
// if(regForm) {
// 	// Form elements for error display
// 	const errorClientType = regForm.querySelector('.error_client_type')
// 	const errorClientTitle = regForm.querySelector('.error_title')
// 	const errorName = regForm.querySelector('.error_name')
// 	const errorBirthYear = regForm.querySelector('.error_birth_y')
// 	const errorBirthMonth = regForm.querySelector('.error_birth_m')
// 	const errorBirthDay = regForm.querySelector('.error_birth_d')
// 	const errorEmail = regForm.querySelector('.error_email')
// 	const errorPhone = regForm.querySelector('.error_phone')
// 	const errorCountry = regForm.querySelector('.error_country')
// 	const errorPassword = regForm.querySelector('.error_password')
// 	const errorRepeatPass = regForm.querySelector('.error_pass_repeat')

// 	function isValidPhonenumber(value) {
//     	return (/^\d{7,}$/).test(value.replace(/[\s()+\-\.]|ext/gi, ''))
// 	}

// 	function sendData() {
// 	    const XHR = new XMLHttpRequest()

// 	    // Bind the FormData object and the form element
// 	    const FD = new FormData(regForm)

// 	    var clientType = FD.get('POST-clientType')
// 	    var clientTitle = FD.get('POST-title')
// 	    var name = FD.get('name')
// 	    var birthYear = FD.get('POST-birth-y')
// 	    var birthMonth = FD.get('POST-birth-m')
// 	    var birthDay = FD.get('POST-birth-d')
// 	    var email = FD.get('email')
// 	    var phone = FD.get('phone')
// 	    var country = FD.get('country')
// 	    var password = FD.get('password')
// 	    var passRepeat = FD.get('password-repeat')

// 	    // Define what happens on successful data submission
// 	    XHR.addEventListener( "load", function(event) {
// 	      alert( event.target.responseText )
// 		})

// 	    // Define what happens in case of error
// 	    XHR.addEventListener( "error", function( event ) {
// 	      alert( 'Oops! Something went wrong.' )
// 	    })

// 	    // Form data validation
// 	    var errorCounter = 0
// 		var nameFormat = /^[A-Za-z\s]*$/
// 		var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// 		var countryNameFormat = /^[A-Za-z\s]*$/
// 		var passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

// 		if(clientType == 0) {
// 			++errorCounter
// 			errorClientType.previousElementSibling.style.color = 'red'
// 		} else {
// 			errorClientType.previousElementSibling.style.color = '#024059'
// 		}

// 		if(clientTitle == 0) {
// 			++errorCounter
// 			errorClientTitle.previousElementSibling.style.color = 'red'
// 		} else {
// 			errorClientTitle.previousElementSibling.style.color = '#024059'
// 		}

// 		if((name == '') || (name.length < 3)) {
// 			++errorCounter
// 			errorName.previousElementSibling.style.color = 'red'
// 			errorName.previousElementSibling.classList.add('error-color')
// 		} else if(name.match(nameFormat)) {
// 			errorName.previousElementSibling.style.color = '#024059'
// 		} else {
// 			++errorCounter
// 			errorName.style.color = 'red'
// 			errorName.innerHTML = 'Only letters and spaces allowed'
// 			errorName.previousElementSibling.style.marginBottom = '40px'
// 		}

// 		if(birthYear == 0) {
// 			++errorCounter
// 			errorBirthYear.previousElementSibling.style.color = 'red'
// 		} else {
// 			errorBirthYear.previousElementSibling.style.color = '#024059'
// 		}

// 		if(birthMonth == 0) {
// 			++errorCounter
// 			errorBirthMonth.previousElementSibling.style.color = 'red'
// 		} else {
// 			errorBirthMonth.previousElementSibling.style.color = '#024059'
// 		}

// 		if(birthDay == 0) {
// 			++errorCounter
// 			errorBirthDay.previousElementSibling.style.color = 'red'
// 		} else {
// 			errorBirthDay.previousElementSibling.style.color = '#024059'
// 		}

// 		if(email == '') {
// 			++errorCounter
// 			errorEmail.previousElementSibling.style.color = 'red'
// 			errorEmail.previousElementSibling.classList.add('error-color')
// 		} else if(email.match(mailFormat)) {
// 			errorEmail.previousElementSibling.style.color = '#024059'
// 		} else {
// 			++errorCounter
// 			errorEmail.style.color = 'red'
// 			errorEmail.innerHTML = 'Invalid email format'
// 			errorEmail.previousElementSibling.style.marginBottom = '40px'	
// 		}

// 		if(phone == '') {
// 			++errorCounter
// 			errorPhone.previousElementSibling.style.color = 'red'
// 			errorPhone.previousElementSibling.classList.add('error-color')
// 		} else if(isValidPhonenumber(phone)) {
// 			errorPhone.previousElementSibling.style.color = '#024059'
// 		} else {
// 			++errorCounter
// 			errorPhone.style.color = 'red'
// 			errorPhone.innerHTML = 'Phone format should be international'
// 			errorPhone.previousElementSibling.style.marginBottom = '40px'
// 		}

// 		if((country == '') || (country.length < 3)) {
// 			++errorCounter
// 			errorCountry.previousElementSibling.style.color = 'red'
// 			errorCountry.previousElementSibling.classList.add('error-color')
// 		} else if(country.match(countryNameFormat)) {
// 			errorCountry.previousElementSibling.style.color = '#024059'
// 		} else {
// 			++errorCounter
// 			errorCountry.style.color = 'red'
// 			errorCountry.innerHTML = 'Only letters and spaces allowed'
// 			errorCountry.previousElementSibling.style.marginBottom = '40px'
// 		}

// 		if(password == '') {
// 			++errorCounter
// 			errorPassword.style.color = 'red'
// 		} else if(password.match(passwordFormat)) {
// 			errorPassword.style.color = 'green'
// 			errorPassword.innerHTML = '✓ Valid'
// 			errorPassword.previousElementSibling.style.marginBottom = '40px'
// 		} else {
// 			++errorCounter
// 			errorPassword.style.color = 'red'
// 			errorPassword.previousElementSibling.style.marginBottom = '110px'
// 			errorPassword.innerHTML = 'Your password should contain at least 8 characters with at least one digit, at least one lower case letter, at least one upper case letter'
// 		}

// 		if(passRepeat == '') {
// 			++errorCounter
// 			errorRepeatPass.innerHTML = 'This field is required'
// 			errorRepeatPass.previousElementSibling.style.marginBottom = '40px'
// 		} else if((password.match(passwordFormat)) && (passRepeat.match(password))) {
// 			errorRepeatPass.style.color = 'green'
// 			errorRepeatPass.innerHTML = '✓ Valid'
// 		} else {
// 			++errorCounter
// 			errorRepeatPass.style.color = 'red'
// 			errorRepeatPass.innerHTML = 'Your repeated password does not match choosen password'
// 			errorRepeatPass.previousElementSibling.style.marginBottom = '40px'
// 		}

// 	    if(errorCounter == 0) {
// 	    	// Set up our request
// 	    	XHR.open("POST", "regFormDataHandler.php")

// 		    // The data sent is what the user provided in the form
// 		    XHR.send(FD)
// 	    }
// 	}

// 	regForm.addEventListener('submit', event => {
// 		event.preventDefault()
// 		sendData()
// 	});
// }
// Registration Form End --------------------------------------------------------------//

// Open Demo Form ---------------------------------------------------------------------//
const openDemoForm = document.getElementById('open-demo-form')
if(openDemoForm) {
	// Form elements for error display
	const errorName = openDemoForm.querySelector('.error_name')
	const errorEmail = openDemoForm.querySelector('.error_email')
	const errorPhone = openDemoForm.querySelector('.error_phone')
	const errorCountry = openDemoForm.querySelector('.error_country')

	function isValidPhonenumber(value) {
    	return (/^\d{7,}$/).test(value.replace(/[\s()+\-\.]|ext/gi, ''))
	}

	function sendData() {
	    const XHR = new XMLHttpRequest()

	    // Bind the FormData object and the form element
	    const FD = new FormData(openDemoForm)

	    var name = FD.get('name')
	    var email = FD.get('email')
	    var phone = FD.get('phone')
	    var country = FD.get('country')

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

		if((name == '') || (name.length < 3)) {
			++errorCounter
			errorName.previousElementSibling.style.color = 'red'
			errorName.previousElementSibling.classList.add('error-color')
		} else if(name.match(nameFormat)) {
			errorName.previousElementSibling.style.color = '#024059'
		} else {
			++errorCounter
			errorName.style.color = 'red'
			errorName.innerHTML = 'Only letters and spaces allowed'
			errorName.previousElementSibling.style.marginBottom = '40px'
		}

		if(email == '') {
			++errorCounter
			errorEmail.previousElementSibling.style.color = 'red'
			errorEmail.previousElementSibling.classList.add('error-color')
		} else if(email.match(mailFormat)) {
			errorEmail.previousElementSibling.style.color = '#024059'
		} else {
			++errorCounter
			errorEmail.style.color = 'red'
			errorEmail.innerHTML = 'Invalid email format'
			errorEmail.previousElementSibling.style.marginBottom = '40px'	
		}

		if(phone == '') {
			++errorCounter
			errorPhone.previousElementSibling.style.color = 'red'
			errorPhone.previousElementSibling.classList.add('error-color')
		} else if(isValidPhonenumber(phone)) {
			errorPhone.previousElementSibling.style.color = '#024059'
		} else {
			++errorCounter
			errorPhone.style.color = 'red'
			errorPhone.innerHTML = 'Phone format should be international'
			errorPhone.previousElementSibling.style.marginBottom = '40px'
		}

		if((country == '') || (country.length < 3)) {
			++errorCounter
			errorCountry.previousElementSibling.style.color = 'red'
			errorCountry.previousElementSibling.classList.add('error-color')
		} else if(country.match(countryNameFormat)) {
			errorCountry.previousElementSibling.style.color = '#024059'
		} else {
			++errorCounter
			errorCountry.style.color = 'red'
			errorCountry.innerHTML = 'Only letters and spaces allowed'
			errorCountry.previousElementSibling.style.marginBottom = '40px'
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

/* Form Submission END -------------------------------------------------------------------------------------------------------------------------------*/
