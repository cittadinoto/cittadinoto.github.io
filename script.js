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


//hidden links
let x = 0

function showlink() {
    let c = document.getElementById("hidden");
    if (x % 2 == 0) {
        c.style.display = "block";
        document.getElementById("link").innerHTML = "Tappe &#9650 "
    } else {
        c.style.display = "none";
        document.getElementById("link").innerHTML = "Tappe &#9660"
    }
    x++
}



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
        if (cont > 10) cont = 0
        if (cont == 0) e.style.width = "0%"
        if (cont == 1) e.style.width = "9.5vw"
        if (cont == 2) e.style.width = "19.5vw"
        if (cont == 3) e.style.width = "29.5vw"
        if (cont == 4) e.style.width = "39.5vw"
        if (cont == 5) e.style.width = "49.5vw"
        if (cont == 6) e.style.width = "59.5vw"
        if (cont == 7) e.style.width = "69.5vw"
        if (cont == 8) e.style.width = "79.5vw"
        if (cont == 9) e.style.width = "89.5vw"
        if (cont == 10) e.style.width = "105vw"

    } else {
        let e = document.getElementById("advcontent")
        if (cont > 10) cont = 0
        if (cont == 0) e.style.width = "0%"
        if (cont == 1) e.style.width = "12.5vw"
        if (cont == 2) e.style.width = "22.5vw"
        if (cont == 3) e.style.width = "32.5vw"
        if (cont == 4) e.style.width = "42.5vw"
        if (cont == 5) e.style.width = "52.5vw"
        if (cont == 6) e.style.width = "62.5vw"
        if (cont == 7) e.style.width = "72.5vw"
        if (cont == 8) e.style.width = "82.5vw"
        if (cont == 9) e.style.width = "92.5vw"
        if (cont == 10) e.style.width = "105vw"
    }
}

//  slideshow

let cont1 = 0;
let cont2 = 0;
let cont3 = 0;
let cont4 = 0;
let cont5 = 0;
let cont6 = 0;
let cont7 = 0;
let cont8 = 0;
let cont9 = 0;

let v = [
    "photo1.jpg",
    "photo1a.jfif",
    "photo1b.jpg",
]
let v2 = [
    "photo2.jpg",
    "photo2a.jpg",
    "photo2b.jfif",
]
let v3 = [
    "photo3.jpg",
    "photo3a.jfif",
    "photo3b.jpg",
]
let v4 = [
    "photo4.jpg",
    "photo4a.webp",
    "photo4b.jpg",
]
let v5 = [
    "photo5.jpeg",
    "photo5a.jfif",
    "photo5b.jpg",
]
let v6 = [
    "photo6.webp",
    "photo6a.jpg",
    "photo6b.webp",
]
let v7 = [
    "photo7.jpg",
    "photo7a.jpg",
]
let v8 = [
    "photo8.jpg",
    "photo8a.jpg",
    "photo8b.jpg",
]
let v9 = [
    "photo9.jpg",
    "photo9a.jfif",
    "photo9b.jpg",
]

function nextimg(n) {

    if (n == 1) {
        cont1++;
        if (cont1 == 3) cont1 = 0
        document.getElementById("photo1").innerHTML = "<img src=" + "'" + v[cont1] + "'" + ">"

        contimg(n)
    }

    if (n == 2) {
        cont2++;
        if (cont2 == 3) cont2 = 0
        document.getElementById("photo2").innerHTML = "<img src=" + "'" + v2[cont2] + "'" + ">"

        contimg(n)
    }
    if (n == 3) {
        cont3++;
        if (cont3 == 3) cont3 = 0
        document.getElementById("photo3").innerHTML = "<img src=" + "'" + v3[cont3] + "'" + ">"

        contimg(n)
    }
    if (n == 4) {
        cont4++;
        if (cont4 == 3) cont4 = 0
        document.getElementById("photo4").innerHTML = "<img src=" + "'" + v4[cont4] + "'" + ">"

        contimg(n)
    }

    if (n == 5) {
        cont5++;
        if (cont5 == 3) cont5 = 0
        document.getElementById("photo5").innerHTML = "<img src=" + "'" + v5[cont5] + "'" + ">"

        contimg(n)
    }
    if (n == 6) {
        cont6++;
        if (cont6 == 3) cont6 = 0
        document.getElementById("photo6").innerHTML = "<img src=" + "'" + v6[cont6] + "'" + ">"

        contimg(n)
    }
    if (n == 7) {
        cont7++;
        if (cont7 == 2) cont7 = 0
        document.getElementById("photo7").innerHTML = "<img src=" + "'" + v7[cont7] + "'" + ">"

        contimg(n)
    }

    if (n == 8) {
        cont8++;
        if (cont8 == 3) cont8 = 0
        document.getElementById("photo8").innerHTML = "<img src=" + "'" + v8[cont8] + "'" + ">"

        contimg(n)
    }
    if (n == 9) {
        cont9++;
        if (cont9 == 3) cont9 = 0
        document.getElementById("photo9").innerHTML = "<img src=" + "'" + v9[cont9] + "'" + ">"

        contimg(n)
    }

}

function previmg(n) {

    if (n == 1) {
        cont1--;
        if (cont1 == -1) cont1 = 2
        document.getElementById("photo1").innerHTML = "<img src=" + "'" + v[cont1] + "'" + ">"

        contimg(n)
    }
    if (n == 2) {
        cont2--;
        if (cont2 == -1) cont2 = 2
        document.getElementById("photo2").innerHTML = "<img src=" + "'" + v[cont2] + "'" + ">"

        contimg(n)
    }
    if (n == 3) {
        cont3--;
        if (cont3 == -1) cont3 = 2
        document.getElementById("photo3").innerHTML = "<img src=" + "'" + v[cont3] + "'" + ">"

        contimg(n)
    }
    if (n == 4) {
        cont4--;
        if (cont4 == -1) cont4 = 2
        document.getElementById("photo4").innerHTML = "<img src=" + "'" + v4[cont4] + "'" + ">"

        contimg(n)
    }

    if (n == 5) {
        cont5--
        if (cont5 == -1) cont5 = 2
        document.getElementById("photo5").innerHTML = "<img src=" + "'" + v5[cont5] + "'" + ">"

        contimg(n)
    }
    if (n == 6) {
        cont6--
        if (cont6 == -1) cont6 = 2
        document.getElementById("photo6").innerHTML = "<img src=" + "'" + v6[cont6] + "'" + ">"

        contimg(n)
    }
    if (n == 7) {
        cont7++;
        if (cont7 == -1) cont7 = 1
        document.getElementById("photo7").innerHTML = "<img src=" + "'" + v7[cont7] + "'" + ">"

        contimg(n)
    }

    if (n == 8) {
        cont8--
        if (cont8 == -1) cont8 = 2
        document.getElementById("photo8").innerHTML = "<img src=" + "'" + v8[cont8] + "'" + ">"

        contimg(n)
    }
    if (n == 9) {
        cont9--
        if (cont9 == -1) cont9 = 2
        document.getElementById("photo9").innerHTML = "<img src=" + "'" + v9[cont9] + "'" + ">"

        contimg(n)
    }
}

function contimg(n) {
    for (let i = 0; i < 3; i++) {
        let v1 = document.getElementsByClassName("imgs");
        for (let j = 0; j < v1.length; j++) {
            v1[j].style.background = "white"
        }
    }
    document.getElementById("cont1" + cont1).style.background = "#8d8d8d"
    document.getElementById("cont2" + cont2).style.background = "#8d8d8d"
    document.getElementById("cont3" + cont3).style.background = "#8d8d8d"
    document.getElementById("cont4" + cont4).style.background = "#8d8d8d"
    document.getElementById("cont5" + cont5).style.background = "#8d8d8d"
    document.getElementById("cont6" + cont6).style.background = "#8d8d8d"
    document.getElementById("cont7" + cont7).style.background = "#8d8d8d"
    document.getElementById("cont8" + cont8).style.background = "#8d8d8d"
    document.getElementById("cont9" + cont9).style.background = "#8d8d8d"
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