const section = document.querySelector("section");
const logo = document.querySelector(".logo");
const FPS = 60; // har sekungda 60fps
section.style.height = window.innerHeight + "px"; //sectiondagi width height
section.style.width = window.innerWidth + "px";

// Logo moving velocity Variables
let xPosition = 10;
let yPosition = 10;
let xSpeed = 4;
let ySpeed = 4;
function update() {
  //move logo
  logo.style.left = xPosition + "px";
  logo.style.top = yPosition + "px";
}

setInterval(() => {
  //change moving
  if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
    //x tarafga borib urilishi
    xSpeed = -xSpeed;
    logo.style.fill = randomColor();
  }
  if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
    //y tarafga borib urilishi
    ySpeed = -ySpeed;
    logo.style.fill = randomColor();
  }

  xPosition += xSpeed;
  yPosition += ySpeed;
  update();
}, 1000 / FPS);

function randomColor() {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8).toUpperCase(); // 16talikdan 2-8gacha kesib olish

  return color;
}

console.log(randomColor());

window.addEventListener("resize", () => { //responsive
  xPosition = 10;
  yPosition = 10;

  section.style.height = window.innerHeight + "px";
  section.style.width = window.innerWidth + "px";
});

// function randomColor() {
//   let keys = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += keys[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }
