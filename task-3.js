const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggle now 

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //Animate Links
}

navslide();
