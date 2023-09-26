let darkModeButton = document.querySelector('#darkmode');

darkModeButton.onclick = () => {
    if (darkModeButton.classList.contains('bx-moon')) {
        darkModeButton.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
    }else{
        darkModeButton.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');
    }
};


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal ({
    distance: '70px',
    duration: 2700,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin: 'bottom'});
sr.reveal('.hero-img',{delay:350, origin: 'top'});
sr.reveal('.down-arrow',{delay:450, origin: 'right'});
