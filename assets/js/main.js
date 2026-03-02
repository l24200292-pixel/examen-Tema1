const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 500;

const W = canvas.width;
const H = canvas.height;

/* ================= CIELO ================= */
ctx.fillStyle = "#1b2550";
ctx.fillRect(0,0,W,H);

/* ================= ESTRELLAS ================= */
ctx.fillStyle = "#f5e6a8";
for(let i=0;i<40;i++){
  let x = Math.random()*W;
  let y = Math.random()*200;
  ctx.fillRect(x,y,3,3);
}

/* ================= LUNA ================= */
ctx.beginPath();
ctx.arc(W-120,90,35,0,Math.PI*2);
ctx.fillStyle="#f5e6a8";
ctx.fill();

ctx.beginPath();
ctx.arc(W-105,85,30,0,Math.PI*2);
ctx.fillStyle="#1b2550";
ctx.fill();

/* ================= EDIFICIOS ================= */
function edificio(x,y,w,h,color){
  ctx.fillStyle=color;
  ctx.fillRect(x,y,w,h);

  ctx.fillStyle="#ffe66d";
  for(let i=10;i<w-10;i+=20){
    for(let j=10;j<h-10;j+=25){
      ctx.fillRect(x+i,y+j,8,8);
    }
  }
}

edificio(60,220,90,180,"#5c6bc0");
edificio(170,200,90,200,"#42a5f5");
edificio(280,250,80,150,"#3f51b5");
edificio(380,180,100,220,"#6c5ce7");
edificio(500,230,90,170,"#26a69a");
edificio(610,210,90,190,"#5c6bc0");
edificio(720,250,100,150,"#42a5f5");

/* ================= PUENTE ================= */
ctx.fillStyle="#9e9e9e";
ctx.fillRect(0,330,W,40);

/* ARCOS */
function arco(x){
  ctx.beginPath();
  ctx.arc(x,370,70,Math.PI,0);
  ctx.fillStyle="#2f6fb0";
  ctx.fill();
}

arco(200);
arco(450);
arco(700);

/* TORRE CENTRAL */
ctx.fillStyle="#d4c27a";
ctx.fillRect(W/2-6,250,12,80);

/* CABLES */
ctx.strokeStyle="#d4c27a";
ctx.lineWidth=3;

function cable(x1,y1,x2,y2){
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
}

let topX = W/2;
let topY = 250;

cable(topX,topY,200,330);
cable(topX,topY,320,330);
cable(topX,topY,580,330);
cable(topX,topY,700,330);

/* ================= AGUA ================= */
ctx.fillStyle="#4fa3d1";
ctx.fillRect(0,370,W,130);

/* LINEAS DEL AGUA */
ctx.strokeStyle="#8fd3ff";
ctx.lineWidth=2;

for(let i=0;i<40;i++){
  let x = Math.random()*W;
  let y = 380 + Math.random()*110;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x+30,y);
  ctx.stroke();
}

/* ================= BOTES ================= */
function bote(x,y){
  ctx.fillStyle="#1c2a4a";
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x+80,y);
  ctx.lineTo(x+60,y+25);
  ctx.lineTo(x+20,y+25);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle="#ffe66d";
  ctx.fillRect(x+35,y-20,30,20);
}

bote(150,430);
bote(600,430);