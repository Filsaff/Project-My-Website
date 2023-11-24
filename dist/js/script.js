//Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const skRol = document.querySelector('#skrol');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        skRol.classList.remove('hidden');
        skRol.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        skRol.classList.remove('flex');
        skRol.classList.add('hidden');
    }
}

//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//click click an
window.addEventListener('click', function (e) {
    if(e.target != hamburger && e.targer != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

//Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if(darkToggle.checked){
        html.classList.add('dark');
    }else{
        html.classList.remove('dark')
    }
});
