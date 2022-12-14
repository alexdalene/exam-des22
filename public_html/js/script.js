const planetOne = document.getElementById("planet-one");

window.addEventListener("scroll", function() {
  const yPos = window.pageYOffset / 5;
  planetOne.style.transform = `translateY(${yPos}px)`;
});

const planetTwo = document.getElementById("planet-two");

window.addEventListener("scroll", function() {
  const yPos = window.pageYOffset / 4;
  planetTwo.style.transform = `translateY(${yPos}px)`;
});

const planetThree = document.getElementById("planet-three");

window.addEventListener("scroll", function() {
  const yPos = window.pageYOffset / 8;
  planetThree.style.transform = `translateY(${yPos}px)`;
});

