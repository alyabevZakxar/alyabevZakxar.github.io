const menuToggle = document.querySelector('#menuToggle');
const mobileNavContainer = document.querySelector('#mobile-nav');


menuToggle.onclick = function(){
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav-active');
}


