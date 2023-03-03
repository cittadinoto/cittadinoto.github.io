// let e=document.getElementById("barcontent2")
// e.addEventListener("click",bar)
// let b=document.getElementById("sidebar")

// b.style.display= "none"
// let c=0;

// function bar(){
//     if(c%2==0){
//         b.style.display = "block";
//         e.innerHTML="<img id='imgmenu' src='img/close.png' alt=''></img>"
//     }
//     else{
//         b.style.display= "none";
//         e.innerHTML="<img id='imgmenu' src='img/menu.png' alt=''></img>"
//     }
//     c++;
//     hidelink()
// }

// function hidelink(){
//     for(let i=1; i<=5;i++){
//         let v1=document.getElementsByClassName("link"+i);
//         for(let j=0; j<v1.length;j++){
//             v1[j].style.display="none"
//         }
//     }
// }


// function showlink(name){
//     let v3=document.getElementsByClassName(name);
//     for(let i=0; i<v3.length;i++){
//         if(v3[i].style.display=="none"){
//             v3[i].style.display="block";
//             document.getElementById(name).innerHTML="LINK "+ "&#9650;"
//         } 
//         else{
//            v3[i].style.display="none" 
//            document.getElementById(name).innerHTML="LINK "+ "&#9660;"
//         } 
//     }
// }


function advancment(cont) {
    let e = document.getElementById("advcontent")
    if (cont > 6) cont = 0
    if (cont == 0) e.style.width = "0%"
    if (cont == 1) e.style.width = "18%"
    if (cont == 2) e.style.width = "35%"
    if (cont == 3) e.style.width = "51%"
    if (cont == 4) e.style.width = "68%"
    if (cont == 5) e.style.width = "84%"
    if (cont == 6) e.style.width = "100%"
    cont++
}