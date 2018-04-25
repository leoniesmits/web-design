"use strict"

var menuButton = document.querySelector(".menu-button");
var menuList = document.querySelector(".menu-ul");

menuButton.addEventListener("click", function() {
    menuList.classList.toggle("is-open");
    menuButton.innerHTML.str.replace
})


var nav = document.querySelector(".menu-nav");

window.addEventListener("scroll", function(e) {
    if (this.scrollY <= 60) {
        nav.classList.remove("scrolled")
        // nav.classList.removeClass("scrolled")
        
    } else {
        nav.classList.add("scrolled")
        // nav.classList.addClass("scrolled");
    }
})

var progress = document.querySelector(".progress");
var bar = progress.querySelector(".bar");

window.addEventListener("scroll", function() { 
    updateProgressBar() 
});

window.addEventListener("resize", function() { 
    updateProgressBar() 
});

function updateProgressBar() {
  var scrollSpace = document.body.scrollHeight - window.innerHeight;  
  var read = window.scrollY / scrollSpace * 100;
  bar.style.width = `${read}%`;
}

updateProgressBar()

var toggleContent = document.querySelectorAll(".toggle-item");
var foldOutContent = document.querySelector(".fold-out-content")
var buttonIcon = document.querySelector(".button-icon");

for ( var i = 0; i < toggleContent.length; i++ ) {
    toggleContent[ i ].addEventListener('click', function (event) {
        // foldOutContent.classList.toggle("hidden");
        // buttonIcon.classList.toggle("is-fold");
        this.classList.toggle("shown");
        this.classList.toggle("button-fold")

    }, false);
}




// toggleContent.addEventListener("click", function(e) {
//     console.log(e)
//     foldOutContent.classList.toggle("hidden");
//     buttonIcon.classList.toggle("is-fold");

// })