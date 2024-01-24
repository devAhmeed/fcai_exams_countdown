// Set the date we're counting down to
var countDownDate = new Date("Jan 24, 2024 16:30:00").getTime();
let q = document.querySelector("#demo");
let m = document.querySelector("#txt");
let s = document.querySelector(".footer-x");
let r = document.querySelector(".def");

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

  if (seconds <= 9) {
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
  q.innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".def").innerHTML = "6/6 ✔ <br> YOU MADE IT ! <br> 3 Semesters Down , 5 To Go !";
    document.querySelector(".ldBar").style.display = "none";
    document.querySelector(".on").innerHTML = "Click Anywhere to Sound On";
    document.querySelector(".video-done").innerHTML =
      '<video id ="done-video"style="width: 100%; height: 50svh;" autoplay muted loop controls><source src="./Snaptik.app_7205725798081285381.mp4" type="video/mp4" /></video>';
    
    document
      .addEventListener("click", function () {
        var video = document.getElementById("done-video");
        video.play();
        video.muted = false;
            document.querySelector(".on").style.display = "none";
      });



    q.innerHTML ="";
    m.innerHTML = "";
    s.innerHTML = "You're Free Now Solider ❤ , Enjoy ."
  }
}, 1000);
