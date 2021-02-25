

var pos = 0;
var turn = 0;
var data = ['Hi, my name is Anna'];
var speed = 90;

setTimeout(typeWriter, speed);

function typeWriter() {
  if (pos < data[turn].length) {
    document.getElementById("demo").innerHTML += data[turn].charAt(pos);
    console.log(data[turn].charAt(pos));
    pos++;
    setTimeout(typeWriter, speed);
  } else {
  	setTimeout(erase, speed+100);
  }
}


$(function(){
$(".nav-link").hover(function(){
  $(this).css("background-color", "red");
});
});