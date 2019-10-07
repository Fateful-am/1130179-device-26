var searchWrapper = document.getElementsByClassName('b-header__search-wrapper')[0];
var searchButton  = document.getElementsByClassName('b-header__search-button')[0];

var promoSlides = document.getElementsByClassName('b-promo')
var promoButtons = document.getElementsByClassName('b-promo__slide-button')

var serviceSlides = document.getElementsByClassName('b-services__detail-container')
var serviceButtons = document.getElementsByClassName('b-services__button')

function toggleElement(element, classToggle) {
  element.addEventListener('click', function() {
    this.classList.toggle(classToggle);
  });
}

function slideSwitch(element, butClassToggle, slideClassToggle, btns, slides) {
  element.addEventListener('click', function() {
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle(butClassToggle, false);
      slides[i].classList.toggle(slideClassToggle, true);
      if (this === btns[i]) {
        btns[i].classList.toggle(butClassToggle);
        slides[i].classList.toggle(slideClassToggle, false);
      }
    }
  });
}

function toggleSlides(butActiveClass, slideHideClass, btns, slides) {
  for (var i = 0; i < btns.length; i++) {
    slideSwitch(btns[i], butActiveClass, slideHideClass, btns, slides);
  }
}

toggleElement(searchWrapper, 'b-header__search-wrapper--state-active' );
toggleSlides('b-promo__slide-button--active', 'b-promo--hide', promoButtons, promoSlides);
toggleSlides('b-services__button--active', 'b-services__detail-container--hide', serviceButtons, serviceSlides);
