const hamburgerButton = document.querySelector('.hamburger');
const planetsBar = document.querySelector('.planets-bar');
const containerMain = document.querySelector('.container-main');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active');
    planetsBar.classList.toggle('active');
    containerMain.classList.toggle('active');
})
