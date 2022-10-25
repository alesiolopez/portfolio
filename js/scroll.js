/* ...INICIALIZO ANIMACIÓN DE SCROLL... */
AOS.init();

/* MODIFICAR NAV AL HACER SCROLL
 */
/* guardamos en variables los elementos siguientes*/
const nav = document.querySelector('nav > div'); /* tomamos el nav */
let prevY = window.scrollY; /* tomamos la posición actual del scroll */

/* detectamos el evento scroll y le decimos qué hacer*/
window.addEventListener('scroll', function(){
    if(prevY == window.scrollY){
        nav.classList.remove('navbar-scroll');
        prevY = window.scrollY;

    } else {
        nav.classList.add('navbar-scroll');
    }
});