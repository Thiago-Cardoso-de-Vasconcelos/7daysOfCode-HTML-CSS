const buttonMenu = document.getElementById('checkbox-menu');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('ative');

}

buttonMenu.addEventListener('click' , toggleMenu);


