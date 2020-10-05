// This is a sample js file will be used later when registration form is ready
var i = 0;
var txt = "Made with 💓 by Codechef SRM";
var speed = 250;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
