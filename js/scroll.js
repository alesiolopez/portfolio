/* ...INICIALIZO ANIMACIÓN DE SCROLL... */
AOS.init();

/* MODIFICAR NAV AL HACER SCROLL
 */
/* guardamos en variables los elementos siguientes*/
const nav = document.querySelector('nav > div'); /* tomamos el nav */
const logo = document.querySelector('nav > div > a') /* tomo el logo */
let prevY = 0; /* tomamos la posición actual del scroll y por defecto lo dejamos en 0*/

/* detectamos el evento scroll y le decimos qué hacer*/
window.addEventListener('scroll', function(){
    if(prevY == window.scrollY){
        nav.classList.remove('navbar-scroll');
        logo.classList.remove('logo-scroll');
        prevY = window.scrollY;

    } else {
        nav.classList.add('navbar-scroll');
        logo.classList.add('logo-scroll');
    }
});