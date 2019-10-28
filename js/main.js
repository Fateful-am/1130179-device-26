var searchInput = document.getElementsByClassName('g-header__search-input')[0];
var searchButton  = document.getElementsByClassName('g-header__search-button')[0];

var promoSlides = document.getElementsByClassName('g-promo')
var promoButtons = document.getElementsByClassName('g-promo__slide-button')

var serviceSlides = document.getElementsByClassName('g-services__detail-container')
var serviceButtons = document.getElementsByClassName('g-services__button')

var closeMapButton = document.getElementsByClassName('g-modal-close-button--map')[0];
var openMapButton = document.getElementsByClassName('g-about-us--map')[0];
var modalFormMap = document.getElementsByClassName('g-modal--map')[0];

var closeFeedbackButton = document.getElementsByClassName('g-modal-close-button--feedback')[0];
var openFeedbackButton = document.getElementsByClassName('g-about-us--feedback')[0];
var modalFormFeedback = document.getElementsByClassName('g-modal--feedback')[0];

var feedbackForm = elementForm = document.querySelector('#feedback-form');

function toggleSearch(input, button) {
  input.addEventListener('focus', function() {
    this.classList.toggle('g-header__search-input--focused', true);
    button.classList.toggle('g-header__search-button--active', true);
  });
  input.addEventListener('blur', function() {
    if (!button.classList.contains('mouse-over')) {
      this.classList.toggle('g-header__search-input--focused', false);
      button.classList.toggle('g-header__search-button--active', false);
    }
  });
  button.addEventListener('mouseover', function() {
    button.classList.toggle('mouse-over', true);
    input.classList.toggle('mouse-over', true);
  });
  button.addEventListener('mouseleave', function() {
    button.classList.toggle('mouse-over', false);
  });
}

function slideSwitch(element, butActiveClass, slideHideClass, btns, slides) {
  element.addEventListener('click', function() {
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.remove(butActiveClass);
      slides[i].classList.add(slideHideClass);
      if (this === btns[i]) {
        this.classList.add(butActiveClass);
        slides[i].classList.remove(slideHideClass);
      }
    }
  });
}

function toggleSlides(butActiveClass, slideHideClass, btns, slides) {
  for (var i = 0; i < btns.length; i++) {
    slideSwitch(btns[i], butActiveClass, slideHideClass, btns, slides);
  }
}

function showHideToggle(button, modalForm, hideClass, isShow) {
  button.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (isShow) {
      modalForm.classList.remove(hideClass);
    } else {
      modalForm.classList.add(hideClass);
    }
  });
}

function submitFeedBack(submitForm, modalForm, hideClass) {
  submitForm.addEventListener('submit', function(evt) {
    // evt.preventDefault();
    modalForm.classList.add(hideClass);
  });
}

toggleSearch(searchInput, searchButton);

toggleSlides('g-promo__slide-button--active', 'g-promo--hide', promoButtons, promoSlides);
toggleSlides('g-services__button--active', 'g-services__detail-container--hide', serviceButtons, serviceSlides);

showHideToggle(closeMapButton, modalFormMap, 'g-modal--hide', false);
showHideToggle(openMapButton, modalFormMap, 'g-modal--hide', true);

showHideToggle(closeFeedbackButton, modalFormFeedback, 'g-modal--hide', false);
showHideToggle(openFeedbackButton, modalFormFeedback, 'g-modal--hide', true);

submitFeedBack(feedbackForm, modalFormFeedback, 'g-modal--hide');
