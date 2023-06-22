// Set the date we're counting down to
var countDownDate = new Date("Jun 21, 2023 11:00:00").getTime();
let q = document.querySelector('#demo');
let m = document.querySelector("#txt");
let s = document.querySelector(".footer-x");
let r = document.querySelector(".def");


console.log(q);

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  // Checking if leading 0 digit exists or not 


  if(seconds <=9){
    seconds = "0" + seconds;
  }
    if (days <= 9) {
      days = "0" + days;
    }
      if (hours <= 9) {
        hours = "0" + hours;
      }
        if (minutes <= 9) {
          minutes = "0" + minutes;
        }
  // Display the result in the element with id="demo"
  q.innerHTML =
    days + " : " + hours + " : " + minutes + " : " + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "YOU MADE IT ! <br> Good Luck";
    m.style.opacity = "0";
    s.innerHTML = "You're Free Now Solider ❤ , Enjoy ."
    r.style.opacity = "0";
  }
}, 1000);
