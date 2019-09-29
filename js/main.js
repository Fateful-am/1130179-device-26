var searchWrapper = document.getElementsByClassName('b-header__search-wrapper')[0];
var searchButton  = document.getElementsByClassName('b-header__search-button')[0];

function toggleElement( element, classToogle ) {
  element.addEventListener('click', function() {
    this.classList.toggle(classToogle);
  });
}

toggleElement(searchWrapper, 'b-header__search-wrapper--state-active' );
