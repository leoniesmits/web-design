'use strict'

var filterButton = document.querySelector(".filter-button");
var filterMenu = document.querySelector(".filter-menu")
var articles = document.querySelector(".content");



if (window.matchMedia("(max-width: 52em)").matches) {
    filterButton.addEventListener("click", function() {
        filterMenu.classList.toggle("hidden");
        articles.classList.toggle("hidden");
        filterButton.classList.toggle("active");
    })
} else {
    filterButton.addEventListener("click", function() {
        filterMenu.classList.toggle("hidden");
    })
}

var sortButton = document.querySelector(".sort-button");
var sortDropdown = document.querySelector(".sort-dropdown");
var sortSpan = document.querySelector(".sort-span");

sortButton.addEventListener("click", function() {
    console.log("hi")
    sortDropdown.classList.toggle("hidden");
    sortSpan.classList.toggle("open");
})

// var iso = new Isotope( '.content', {
//     itemSelector: '.element-item',
//     getSortData: {
//       name: '.name',
//       category: '[data-category]'
//     },
//     masonry: {
//       columnWidth: 200
//     }
//   });

// var iso = new Isotope( '.content', {
//     itemSelector: '.element-item',
//     layoutMode: 'fitRows'
//   });
  
// // bind filter button click
// var filtersElem = document.querySelector('.filters-button-group');
// filtersElem.addEventListener( 'click', function( event ) {
//   // only work with buttons
//   if ( !matchesSelector( event.target, 'button' ) ) {
//     return;
//   }
//   var filterValue = event.target.getAttribute('data-filter');
//   iso.arrange({ filter: filterValue });
// });

// // change is-checked class on buttons
// var buttonGroups = document.querySelectorAll('.button-group');
// for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
//     var buttonGroup = buttonGroups[i];
//     radioButtonGroup( buttonGroup );
// }

// function radioButtonGroup( buttonGroup ) {
// buttonGroup.addEventListener('click', function( event ) {
//     // only work with buttons
//     if ( !matchesSelector( event.target, 'button' ) ) {
//     return;
//     }
//     buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
//     event.target.classList.add('is-checked');
// });
// }

