const mouseOver = function() {
  dx *= 10;
};
const mouseLeave = function() {
  dx /= 10;
};
const wal = document.getElementsByClassName("theWal");
const preloader = document.getElementById("loader");
const down_symbol = document.getElementById("downSymbol");
down_symbol.addEventListener("click",godown);



wal[0].addEventListener("mouseover", mouseOver);
wal[0].addEventListener("mouseleave", mouseLeave);
let bodyHeight = document.body.scrollHeight;
let x = -550;
let y = 0;
let dx = 1.5;
let dy = 0.5;

let moveIt = setInterval(function() {
  wal[0].style.left = x + "px";
  wal[0].style.top = y + "px";
  let walLeft = parseInt(wal[0].style.left, 10);
  let walTop = parseInt(wal[0].style.top, 10);

  if (walLeft > window.innerWidth + 125) {
  
    wal[0].src = "img/wal2.png";
    dx = -dx;
  } else if (walLeft < -680) {
    wal[0].src = "img/wal1.png";
    dx = -dx;
  }
  if (walTop > bodyHeight || walTop < -300) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}, 14);



  


function godown (){
  down_symbol.classList.add("hidden");
  window.scrollTo(0,document.querySelector("#copyright").scrollHeight);
};

function preload_end(){
  
  preloader.classList.add("hidden");
  //downsymbol ---
};

function scrollFunction() {
  console.log("test");
  down_symbol.style.opacity = 1 - ( .01 * document.body.scrollTop);
};

const init = function() {
  bodyHeight = document.body.scrollHeight;
};

window.addEventListener("load", preload_end)
window.onload = moveIt;
window.onresize = init;
//scroll-verhalten
window.onscroll = function() {scrollFunction()};


//------------

// var x=-550;
// var y=0;
// var dx=2;
// var dy=0.8;
// var c = document.getElementById("canvas");
// c.height  = document.body.scrollHeight;
// c.width = window.innerWidth
// const ctx = c.getContext("2d");
// const imgWal = new Image();
// imgWal.src = './img/wal1.png'; //document.getElementById("theWal");

// window.onload = init;
// window.onresize = resizeCanvas;

// function resizeCanvas(){
//   c.width = window.innerWidth;
// }

// function init() {
//     setInterval(drawFunc, 20);
// };

// function drawFunc (){
//   ctx.clearRect(0, 0, c.width, c.height);
//   ctx.beginPath();
//   ctx.save();

//   let w =imgWal.width;
//   let h =imgWal.height;

//   ctx.drawImage(imgWal,x,y,w,h);

//   if(x>c.width+200){
//     dx=-dx
//     imgWal.src='./img/wal2.png';
//   } else  if(x<-680){
//     imgWal.src='./img/wal1.png';
//     dx=-dx;
//   } else if( y<-125 || y>c.height+100){
//     dy=-dy
//   };
//   ctx.closePath();
//   ctx.fill();

//   x+=dx;
//   y+=dy;
// };

//------------
