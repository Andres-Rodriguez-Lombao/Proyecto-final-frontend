// selecciono las constantes necesarias
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const menu4 = document.getElementById("menu4");
const menu5 = document.getElementById("menu5");
const scroll = window.scrollY;

// tras calcular gracias a la consola los puntos que me interesan del eje-y (esa parte está borrada) hago que la clase cambie según el punto que alcance el scroll
window.addEventListener("scroll", calcular);
function calcular() {
  if (scrollY > 624 && scrollY < 1268) {
    menu1.classList.add("lista__a--scroll");
  } else {
    menu1.classList.remove("lista__a--scroll");
  }
  if (scrollY > 1268 && scrollY < 1911) {
    menu2.classList.add("lista__a--scroll");
  } else {
    menu2.classList.remove("lista__a--scroll");
  }
  if (scrollY > 1911 && scrollY < 2554) {
    menu3.classList.add("lista__a--scroll");
  } else {
    menu3.classList.remove("lista__a--scroll");
  }
  if (scrollY > 2554 && scrollY < 3197) {
    menu4.classList.add("lista__a--scroll");
  } else {
    menu4.classList.remove("lista__a--scroll");
  }
  if (scrollY > 3197) {
    menu5.classList.add("lista__a--scroll");
  } else {
    menu5.classList.remove("lista__a--scroll");
  }
}
