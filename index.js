const areaE1=document.getElementById("area");
const totalE1=document.getElementById("totalcounter");
const remE1=document.getElementById("remcounter");

areaE1.addEventListener("keyup",updateCounter)
 function updateCounter()
 {
    totalE1.innerText=areaE1.value.length;
    remE1.innerText=areaE1.getAttribute("maxlength") - areaE1.value.length;
 }