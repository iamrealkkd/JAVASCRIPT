console.log("Hello");
window.console.log("Hello2");
// alert("KKD");
document.body.style.background = "green";
document.body.childNodes[3].innerText = "Krishna";
let heading = document.getElementById("heading");//h1
console.log(heading);
let para = document.getElementsByClassName("para");
console.log(para);
let btn = document.getElementById("btn");
console.log(btn);
let h2 = document.getElementsByTagName("h2");
console.log(h2);
let elements = document.querySelector("h2");//first element
console.dir(elements);
let allelements = document.querySelectorAll("h2");//first element
console.dir(allelements);
h2[0].innerText = "kkkkkkk";
h2[0].innerHTML = "<i>kkkkkkk</i>";