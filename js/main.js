var searchWrapper = document.getElementsByClassName('b-header__search-wrapper')[0];
var searchButton  = document.getElementsByClassName('b-header__search-button')[0];

var promoSlides = document.getElementsByClassName('b-promo')
var promoButtons = document.getElementsByClassName('b-promo__slide-button')

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
    this.classList.toggle(classToggle);
  });
}

function toggleSlides(butList, promoList, btns, slides) {
  for (var i = 0; i < butList.length; i++) {
    slideSwitch(butList[i], 'b-promo__slide-button--active', 'b-promo--hide', btns, slides);
  }
}

toggleElement(searchWrapper, 'b-header__search-wrapper--state-active' );
toggleSlides(promoButtons, promoSlides, promoButtons, promoSlides);
