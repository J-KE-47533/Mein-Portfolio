var menubutton = document.getElementById("navbtn");
var navlist = document.getElementById("navlistmobil");
var navclose = document.getElementById("navbtnclose");
var navMain = document.getElementById("navmain");


menubutton.onclick = function () {
    navlist.style.right = "0";
}

navclose.onclick = function () {
    navlist.style.right = "-100%";
}


document.addEventListener('DOMContentLoaded', () => {
    const navi = document.getElementById('navmain');
    const navimob = document.getElementById('navmob');
    const logo = document.getElementById('logo');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navi.style.padding = "0.5rem 0";
            logo.style.width = "60%";
            navMain.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
            navMain.style.backdropFilter = "blur(6px)";
            navimob.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
            navimob.style.borderBottom = "1px solid white";
            navimob.style.backdropFilter = "blur(6px)";
        } else {
            navi.style.padding = "2rem 0";
            logo.style.width = "100%";
            navMain.style.backgroundColor = "rgba(0, 0, 0, 0)";
            navMain.style.backdropFilter = "blur(0)";
            navimob.style.backgroundColor = "rgba(0, 0, 0, 0)";
            navimob.style.borderBottom = "1px solid transparent";
            navimob.style.backdropFilter = "blur(0)";
        }
    })
})


var navitemmobil = document.querySelectorAll('.navitem');

for (var i = 0; i < navitemmobil.length; i++) {
    navitemmobil[i].onclick = function () {
        navlist.style.right = "-100%";
    }
}