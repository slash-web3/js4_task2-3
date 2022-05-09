//-----------------------------------------------Task 1--------------------------------------------------------------

/*document.querySelector(`.wrapper`).innerHTML = `
<div class="coordinates">
  <table class="cords">
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
     <tr><td class="x"></td><td class="x"></td><td class="x"></td><td class="x"></td><td class="x y xy">0</td><td class="x"></td><td class="x"></td></tr>
     <tr><td></td><td></td><td></td><td></td><td  class="y"></td><td></td><td></td></tr>
  </table>
  <div class="redPoint"></div>
</div>
`;

var circle = document.querySelector(".redPoint");

var xPos = 0;
var yPos = 0;
var angle = -5;

function animate() {
  xPos += 4.22;
  angle += .05;

  yPos = Math.round(90 * (Math.exp(angle) + Math.cos(Math.pow(angle,2))));

  circle.style.transform = `translate3d(${xPos}px, ${-yPos}px, 0)`;

  if (Math.abs(xPos) >= 580) {
    xPos = 0;
  }

  if (angle >= 2) {
    angle = -5;
    xPos = 0
  }

  requestAnimationFrame(animate);
}
animate();*/

//-----------------------------------------------Task 2/3--------------------------------------------------------------

document.querySelector(`.wrapper`).innerHTML = `
  <div class="triangle"></div>
  <div class="circle"></div>
  <div class="simple"></div>
`;

let body = document.querySelector(`body`);
body.style.backgroundColor = "#DFDFDE";

var circle = document.querySelector(".circle");

var xPos = 0;
var yPos = 0;
var angle = 0;

function animate() {

  function before(){
    xPos += 4.22;
    angle += 1.68;
    yPos = -angle;

    circle.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  }

  function after(){
    xPos += 4.22;
    yPos += 1.68;

    circle.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  }

  if(xPos < 910){
    before();
  }else {
    after();
  }

  if(xPos > 1825){
    xPos = 0;
    yPos = 0;
    angle = 0;
  }

  requestAnimationFrame(animate);
}
animate();

//-----------------------------------------------Practice 1--------------------------------------------------------------

/*document.querySelector(`.wrapper`).innerHTML = `
  <div class="circle_for_pc1"></div>
`;

var circle = document.querySelector(".circle_for_pc1");

var xPos = 0;
var roadToMax = 0;
var roadToMin = 0;

function toLeft(){
  xPos -= 5;
  circle.style.transform = `translate3d(${xPos}px, 0, 0)`;
}

function toRight(){
  xPos += 5;
  circle.style.transform = `translate3d(${xPos}px, 0, 0)`;
}

function animate() {

  if(roadToMax < document.querySelector(`body`).clientWidth - 63){
    toRight();
    roadToMax += 5;
    roadToMin += roadToMax;
  }else {
    if(roadToMin > 63){
      toLeft();
    }
    if(xPos == 0){roadToMax = 0; roadToMin = 0;}
  }

  requestAnimationFrame(animate);
}
animate();

//-----------------------------------------------Practice 2--------------------------------------------------------------

/*document.querySelector(`body`).innerHTML = `
  <canvas class="wrapper">
  </canvas>
`;

var field = document.querySelector(".wrapper");
var getField = field.getContext("2d");
var size = 6;
var x = field.width/2;
var y = field.height-5;
var dx = 2;
var dy = -2;

function drawBall() {
    getField.beginPath();
    getField.arc(x, y, size, 0, Math.PI*2);
    getField.fillStyle = "red";
    getField.fill();
    getField.closePath();
}

function draw() {
    getField.clearRect(0, 0, field.width, field.height);
    drawBall();

    if(x + dx > field.width-size || x + dx < size) {
        dx = -dx;
    }
    if(y + dy > field.height-size || y + dy < size) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

function animate() {

  draw();

  requestAnimationFrame(animate);
}
animate();*/
