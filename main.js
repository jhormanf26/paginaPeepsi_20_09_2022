
document.querySelector("header a").insertAdjacentHTML("beforeend",'<img src="img/logo.png"  class="logo">');

document.querySelector(".content .textBox h2 ").insertAdjacentHTML("beforeend","Que es?<br><span>I LIKE</span>")

document.querySelector(".content .textBox p ").insertAdjacentText("beforeend",
"Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ad incidunt debitis similique dignissimos possimus placeat ab unde maiores est sequi molestias ex, odit tempore doloribus, corrupti velit! Harum,odio eos?")
document.querySelector(".content .textBox a").insertAdjacentText("beforeend","Todos los productos")

document.querySelector('.navigation  li:nth-of-type(1) a ').insertAdjacentText("beforeend", "Home");
document.querySelector('.navigation  li:nth-of-type(2) a ').insertAdjacentText("beforeend", "Productos");
document.querySelector('.navigation  li:nth-of-type(3) a ').insertAdjacentText("beforeend", "Que es");
document.querySelector('.navigation  li:nth-of-type(4) a ').insertAdjacentText("beforeend", "Noticias");
document.querySelector('.navigation  li:nth-of-type(5) a ').insertAdjacentText("beforeend", "Contacto");

document.querySelector(".imgBox").insertAdjacentHTML("beforeend",'<img src="img/pepsi001.png" class="pepsi">')

document.querySelector('.thumb  li:nth-of-type(1)').insertAdjacentHTML("beforeend", '<img src="img/pepsi001.png" onclick="imgSlider(\'img/pepsi001.png\');changeBgColor(\'#0062be\')">');
document.querySelector('.thumb  li:nth-of-type(2)').insertAdjacentHTML("beforeend", '<img src="img/pepsi002.png" onclick="imgSlider(\'img/pepsi002.png\');changeBgColor(\'#d61f3b\')">');
document.querySelector('.thumb  li:nth-of-type(3)').insertAdjacentHTML("beforeend", '<img src="img/pepsi003.png" onclick="imgSlider(\'img/pepsi003.png\');changeBgColor(\'#1e1e1e\')">');

document.querySelector('.sci  li:nth-of-type(1)').insertAdjacentHTML("beforeend", '<img src="img/facebook.png" >');
document.querySelector('.sci  li:nth-of-type(2)').insertAdjacentHTML("beforeend", '<img src="img/twitter.png" >');
document.querySelector('.sci  li:nth-of-type(3)').insertAdjacentHTML("beforeend", '<img src="img/instagram.png" >');

console.log(document.querySelector(".content .textBox p"));

function imgSlider(anything){
    document.querySelector('.pepsi').src = anything;
}
function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}
function menuToggle(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')

}
