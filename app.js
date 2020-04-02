var primaryColor = document.querySelector("#main__input--1");
var secondaryColor = document.querySelector("#main__input--2");
var inputValue = primaryColor.value = "#e67e22";
var inputValue1 = secondaryColor.value = "#2ecc71";
var main = document.querySelector(".main");
var heading = document.querySelector(".main__bgIndicator");
heading.innerHTML = "linear-gradient(to right, " + primaryColor.value + "," + secondaryColor.value + ")";
function colorChange()
{
    inputValue = primaryColor.value;
    inputValue1 = secondaryColor.value;
    changeColor();
}
primaryColor.addEventListener("change",colorChange);
secondaryColor.addEventListener("change",colorChange);

function changeColor(){
    main.style.background =
    "linear-gradient(to right, " + primaryColor.value + "," + secondaryColor.value + ")";
    heading.innerHTML = "linear-gradient(to right, " + primaryColor.value + "," + secondaryColor.value + ")";
    }
