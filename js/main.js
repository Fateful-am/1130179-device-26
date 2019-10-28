var searchInput = document.getElementsByClassName('b-header__search-input')[0];
var searchButton  = document.getElementsByClassName('b-header__search-button')[0];

var promoSlides = document.getElementsByClassName('b-promo')
var promoButtons = document.getElementsByClassName('b-promo__slide-button')

var serviceSlides = document.getElementsByClassName('b-services__detail-container')
var serviceButtons = document.getElementsByClassName('b-services__button')

var closeMapButton = document.getElementsByClassName('b-modal-close-button--map')[0];
var openMapButton = document.getElementsByClassName('b-about-us--map')[0];
var modalFormMap = document.getElementsByClassName('b-modal--map')[0];

var closeFeedbackButton = document.getElementsByClassName('b-modal-close-button--feedback')[0];
var openFeedbackButton = document.getElementsByClassName('b-about-us--feedback')[0];
var modalFormFeedback = document.getElementsByClassName('b-modal--feedback')[0];

var feedbackForm = elementForm = document.querySelector('#feedback-form');

function toggleSearch(input, button) {
  input.addEventListener('focus', function() {
    this.classList.toggle('b-header__search-input--focused', true);
    button.classList.toggle('b-header__search-button--active', true);
  });
  input.addEventListener('blur', function() {
    if (!button.classList.contains('mouse-over')) {
      this.classList.toggle('b-header__search-input--focused', false);
      button.classList.toggle('b-header__search-button--active', false);
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

toggleSlides('b-promo__slide-button--active', 'b-promo--hide', promoButtons, promoSlides);
toggleSlides('b-services__button--active', 'b-services__detail-container--hide', serviceButtons, serviceSlides);

showHideToggle(closeMapButton, modalFormMap, 'b-modal--hide', false);
showHideToggle(openMapButton, modalFormMap, 'b-modal--hide', true);

showHideToggle(closeFeedbackButton, modalFormFeedback, 'b-modal--hide', false);
showHideToggle(openFeedbackButton, modalFormFeedback, 'b-modal--hide', true);

submitFeedBack(feedbackForm, modalFormFeedback, 'b-modal--hide');
