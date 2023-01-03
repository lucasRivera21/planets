const planetsBarHamburger = document.querySelector('.planets-bar');
const containerMainHamburger = document.querySelector('.container-main');

const menuContainer = document.querySelector('.nav__menu-burger');
const allButtons = document.querySelectorAll('.btn-hamburger');
const btnHamburger = document.querySelector('.hamburger');
const main = document.querySelector('.main');

menuContainer.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() === 'button'){
        clearButton();
        e.target.classList.add('planet-active'); 
    }
})

const clearButton = () =>{
    allButtons.forEach(b => b.classList.remove('planet-active'));
    btnHamburger.classList.remove('active');
    planetsBarHamburger.classList.remove('active');
    containerMainHamburger.classList.remove('active');
} 