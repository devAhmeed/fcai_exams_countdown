// Set the date we're counting down to
var countDownDate = new Date("Jun 13, 2024 15:31:00").getTime();
let q = document.querySelector(".hours");
let m = document.querySelector(".hh-mm-ss");
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
  randNum = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  function changeVideoInc() {
    if (randNum < 8) {
      randNum++;
      document.querySelector("#done-video").src = `videos/v${randNum}.mp4`;
    } else {
      randNum = 1;
      document.querySelector("#done-video").src = `videos/v${randNum}.mp4`;
    }
  }

  function changeVideoDec() {
    if (randNum == 1) {
      randNum = 8;
      document.querySelector("#done-video").src = `videos/v${randNum}.mp4`;
    } else {
      randNum--;
      document.querySelector("#done-video").src = `videos/v${randNum}.mp4`;
    }
  }

  document.getElementById("next").addEventListener("click", changeVideoInc);
  document.getElementById("prev").addEventListener("click", changeVideoDec);
  document.getElementById("pause").addEventListener("click", function () {
    var video = document.getElementById("done-video");
    if (video.paused) {
      video.play();
      document.getElementById("ps-src").src = "ph_pause-fill.svg";
    } else {
      video.pause();
      document.getElementById("ps-src").src =
        "https://img.icons8.com/ios-glyphs/30/1A1A1A/play--v1.png";
    }
  });

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".btn-fun").innerHTML =
      '<img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/confetti.png" class="mx-1" alt="confetti"/> You Made It ! 🥳';
    document.querySelector(".hours").classList.replace("text-6xl", "text-4xl");
    document
      .querySelector(".hh-mm-ss")
      .classList.replace("text-6xl", "text-4xl");
    document.querySelector(".btn-congra").style.transform = "translateY(3vh)";
    document.querySelector(".dd-hh-mm-ss").style.display = "none";
    document.querySelector(".hours").innerHTML = "Four Semesters Down ... ";
    document.querySelector(".hh-mm-ss").innerHTML = "Four More To Go !";
    document.querySelector(".gl").style.display = "none";
    document.querySelector(
      ".video-container"
    ).innerHTML = `<video id="done-video" style="height : 50vh;" autoplay muted loop><source src="videos/v${randNum}.mp4" type="video/mp4" /></video>`;
    document.addEventListener("click", function () {
      var video = document.getElementById("done-video");
      video.muted = false;
    });
    document.querySelector(
      ".note"
    ).innerHTML = `<span class="font-bold">Two more years to be a </span> <span class="font-bold text-orange-500 orange">Graduate</span> <span class="font-bold">of South Valley National University !</span> </br> Happy <span class="font-bold text-orange-500 orange">Semester End </span> , Hope to see y'all soon !</p>`;
  
  } else {
    // Display the result in the element with id="demo"
    q.innerHTML = days;
    m.innerHTML = ":" + hours + ":" + minutes + ":" + seconds;
  }
}, 1000);
