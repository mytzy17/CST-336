// The title of my webpage JQuery
$("h1").css("fontSize", "7em");
$("h1").css("background-color", "#ffffb3");
$("h1").css("color", "#cc66ff");
$("h1").css({"font-family": "Akronim, normal"});
//Font and color for the questions JQuery
$("#question").css("color", "#ff80ff");
$("#question").css({"font-family": "Reenie Beanie, serif"})
$("h3").css("fontSize", "2em");
//Displays the image 1
var love = "img/love.gif";
var x = document.createElement('img');
function myFunction() {
    // var x = document.createElement('img');
    // x.setAttribute("src", "img/love.gif");
    x.setAttribute("width", "300");
    x.setAttribute("height", "300");
    x.setAttribute("alt", "The Love");
    x.src = love;
    return x;
}
for(var i = 0; i < 1; i++){
    document.body.appendChild(x);
}
//Displays image 2
var money = "img/money.gif";
var y = document.createElement('img');
function myFunction2() {
    // var x = document.createElement('img');
    // x.setAttribute("src", "img/love.gif");
    y.setAttribute("width", "300");
    y.setAttribute("height", "300");
    y.setAttribute("alt", "The Money");
    y.src = money;
    return y;
}
for(var j = 0; j < 1; j++){
    document.body.appendChild(y);
}
//Displays image 3
var car = "img/car.gif";
var z = document.createElement('img');
function myFunction3() {
    // var x = document.createElement('img');
    // x.setAttribute("src", "img/love.gif");
    z.setAttribute("width", "400");
    z.setAttribute("height", "300");
    z.setAttribute("alt", "The Love");
    z.src = car;
    return z;
}
for(var k = 0; k < 1; k++){
    document.body.appendChild(z);
}
//Surprise button, Event Listener
document.getElementById("fun").addEventListener("click", mySurprise);
function mySurprise() {
document.getElementById("demo").innerHTML = "2020 will be full of blessings for you!"
}
//Surprise button2, Event Listener
document.getElementById("fun3").addEventListener("click", mySurprise2);
function mySurprise2() {
document.getElementById("demo3").innerHTML = "2020 will be full of accomplishments!"
}