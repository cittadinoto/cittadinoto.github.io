//menu aniamtion
function menu() {
    if (document.querySelector("#menu span:nth-child(2)").style.width != "0%") {
        let e1 = document.querySelector("#menu span:nth-child(1)");
        e1.style.transform = "rotate(45deg)"
        e1.style.left = "1vh"
        e1.style.top = "0.35vh"


        let e2 = document.querySelector("#menu span:nth-child(2)");
        e2.style.width = "0%"
        e2.style.opacity = "0"

        let e3 = document.querySelector("#menu span:nth-child(3)");
        e3.style.transform = "rotate(-45deg)";
        e3.style.left = "1vh"
        e3.style.top = "2.25vh"
    } else {
        let e1 = document.querySelector("#menu span:nth-child(1)");
        e1.style.transform = "rotate(0deg)";
        e1.style.top = "0.7vh"
        e1.style.left = "0px"
        e1.style.width = "5vh"

        let e2 = document.querySelector("#menu span:nth-child(2)");
        e2.style.width = "100%"
        e2.style.opacity = "1"

        let e3 = document.querySelector("#menu span:nth-child(3)");
        e3.style.transform = "rotate(0deg)";
        e3.style.top = "2.1vh"
        e3.style.left = "0px"
        e3.style.width = "5vh"
    }
    sidebaron();
};

//sidebar animation
function sidebaron() {
    let e = document.getElementById("sidebar")
    if (document.querySelector("#menu span:nth-child(2)").style.width == "0%") {
        document.getElementById("sidebarcont").style.display = "block"
        e.style.display = "block"
        e.style.animation = "sidebaron 0.6s forwards"


    } else {
        e.style.animation = "sidebaroff 0.6s forwards"
        document.getElementById("sidebarcont").style.display = "none"
        setTimeout(function() {
            e.style.display = "none"
        }, 600);
    }
}

//advancment bar
function advancment(cont) {
    if (screen.width > 600) {
        let e = document.getElementById("advcontent")
        if (cont > 6) cont = 0
        if (cont == 0) e.style.width = "0%"
        if (cont == 1) e.style.width = "17.1vw"
        if (cont == 2) e.style.width = "33.7vw"
        if (cont == 3) e.style.width = "50.3vw"
        if (cont == 4) e.style.width = "67.1vw"
        if (cont == 5) e.style.width = "83.5vw"
        if (cont == 6) e.style.width = "100vw"
    } else {
        let e = document.getElementById("advcontent")
        if (cont > 6) cont = 0
        if (cont == 0) e.style.width = "0%"
        if (cont == 1) e.style.width = "20.1vw"
        if (cont == 2) e.style.width = "36.7vw"
        if (cont == 3) e.style.width = "53.3vw"
        if (cont == 4) e.style.width = "70.1vw"
        if (cont == 5) e.style.width = "86.5vw"
        if (cont == 6) e.style.width = "100vw"
    }
}

//  slideshow

let cont1 = 0;
let cont2 = 0;
let cont3 = 0;
let v = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
]

function nextimg(n) {
    if (n == 1) {
        cont1++;
        if (cont1 == 3) cont1 = 0
        document.getElementById("photo1").innerHTML = "<img src=" + "'" + v[cont1] + "'" + ">"
    }
    if (n == 2) {
        cont2++;
        if (cont2 == 3) cont2 = 0
        document.getElementById("photo2").innerHTML = "<img src=" + "'" + v[cont2] + "'" + ">"
    }
    if (n == 3) {
        cont3++;
        if (cont3 == 3) cont3 = 0
        document.getElementById("photo3").innerHTML = "<img src=" + "'" + v[cont3] + "'" + ">"
    }

}

function previmg(n) {
    if (n == 1) {
        cont1--;
        if (cont1 == 0) cont1 = 3
        document.getElementById("photo1").innerHTML = "<img src=" + "'" + v[cont1] + "'" + ">"
    }
    if (n == 2) {
        cont2--;
        if (cont2 == 0) cont2 = 3
        document.getElementById("photo2").innerHTML = "<img src=" + "'" + v[cont2] + "'" + ">"
    }
    if (n == 3) {
        cont3--;
        if (cont3 == 0) cont3 = 3
        document.getElementById("photo3").innerHTML = "<img src=" + "'" + v[cont3] + "'" + ">"
    }
}



//secret login
let key = "pingu66"

var button = document.getElementById("buttonLogin");
var clickCount = 0;

button.addEventListener("click", function() {
    clickCount++;
    console.log(clickCount)
});

function login() {
    let password = document.getElementById("password").value

    if (password == key) {
        document.getElementById("clear").style.display = "none"
        document.body.style.backgroundColor = "white"
        document.getElementById("true").style.visibility = "visible"

    } else {
        alert("la password inserita è errata")
        if (clickCount == 4) {
            clickCount = 0
            document.getElementById("clear").style.display = "none"
            document.body.style.backgroundColor = "white"
            document.getElementById("basta").style.visibility = "visible"
        }

    }
}