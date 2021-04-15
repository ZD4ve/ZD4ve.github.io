// JavaScript source code
window.onload = function start() {
    document.getElementById("menu").style.height = window.innerHeight - document.getElementById("menu").clientHeight + "px";
    document.getElementById("szoveg").style.left = document.getElementById("menu").clientWidth + "px";
    document.getElementById("szoveg").style.width = window.innerWidth - document.getElementById("menu").clientWidth - document.getElementById("szoveg").clientWidth + "px";
    document.getElementById("profiltd").width = document.getElementsByClassName("profil")[0].width;
}