var slidesdiv = document.getElementById("slides");
var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

prev.onclick = prevSlide;
next.onclick = nextSlide;

function prevSlide() {
  if (current > 0) current -= 1;
  else current = slides.length - 1;

  if (current == 0) {
    slidesdiv.style.transform = "translateX(0px)";
    prev.style.left = "0px";
    next.style.right = "4800px";
  } else if (current == 1) {
    slidesdiv.style.transform = "translateX(-1200px)";
    prev.style.left = "1200px";
    next.style.right = "3600px";
  } else if (current == 2) {
    slidesdiv.style.transform = "translateX(-2400px)";
    prev.style.left = "2400px";
    next.style.right = "2400px";
  } else if (current == 3) {
    slidesdiv.style.transform = "translateX(-3600px)";
    prev.style.left = "3600px";
    next.style.right = "1200px";
  } else if (current == 4) {
    slidesdiv.style.transform = "translateX(-4800px)";
    prev.style.left = "4800px";
    next.style.right = "0px";
  }
}

function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else current = 0;

  if (current == 0) {
    slidesdiv.style.transform = "translateX(0px)";
    prev.style.left = "0px";
    next.style.right = "4800px";
  } else if (current == 1) {
    slidesdiv.style.transform = "translateX(-1200px)";
    prev.style.left = "1200px";
    next.style.right = "3600px";
  } else if (current == 2) {
    slidesdiv.style.transform = "translateX(-2400px)";
    prev.style.left = "2400px";
    next.style.right = "2400px";
  } else if (current == 3) {
    slidesdiv.style.transform = "translateX(-3600px)";
    prev.style.left = "3600px";
    next.style.right = "1200px";
  } else if (current == 4) {
    slidesdiv.style.transform = "translateX(-4800px)";
    prev.style.left = "4800px";
    next.style.right = "0px";
  }
}

// 버튼 누르면 슬라이드 변경

var Slidebutton = document.querySelectorAll("#SlideButton > ul >li");

for (let i = 0; i < Slidebutton.length; i++) {
  Slidebutton[i].onclick = function () {
    if (i == 0) {
      slidesdiv.style.transform = "translateX(0px)";
      prev.style.left = "0px";
      next.style.right = "4800px";
    } else if (i == 1) {
      slidesdiv.style.transform = "translateX(-1200px)";
      prev.style.left = "1200px";
      next.style.right = "3600px";
    } else if (i == 2) {
      slidesdiv.style.transform = "translateX(-2400px)";
      prev.style.left = "2400px";
      next.style.right = "2400px";
    } else if (i == 3) {
      slidesdiv.style.transform = "translateX(-3600px)";
      prev.style.left = "3600px";
      next.style.right = "1200px";
    } else if (i == 4) {
      slidesdiv.style.transform = "translateX(-4800px)";
      prev.style.left = "4800px";
      next.style.right = "0px";
    }
    console.log(i);
  };
}
