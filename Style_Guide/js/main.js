'use strict';
console.log("JavaScript is running.");
var navItems = document.querySelector("#nav-items");
console.log(navItems);
var navToggle = document.querySelector("#nav-toggle");


console.log(navToggle.classList);

window.addEventListener("resize", () => {
    var width = window.innerWidth;
    console.log("window resized" + width);
    if (width < 600) {
        navItems.classList.add("hidden");
        navToggle.classList.remove("hidden");
    }

    else {
        navItems.classList.remove("hidden");
        navToggle.classList.add("hidden");
    }

});

navToggle.addEventListener("click",
	function() {
		if ( navItems.classList.contains("hidden") ) {


			navItems.classList.remove("hidden");
			navItems.setAttribute("aria-hidden", "false");
			navToggle.setAttribute("aria-expanded", "true");


		}
		else {

			navItems.classList.add("hidden");
			navItems.setAttribute("aria-hidden", "true");
			navToggle.setAttribute("aria-expanded", "false");
		}
	}
);