// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',()=>{
    nav.classList.remove('active');
    })
} 



 /*este código es para en cambio de imagen en la página*/
//  var MainImg = document.getElementById("MainImg");
//  var smallimg = document.getElementsByClassName("small-img");
//  for (let i = 0; i < smallimg.length; i++) {
//  smallimg[i].onclick = function() {
//      MainImg.src = smallimg[i].src;
//  };
// }
