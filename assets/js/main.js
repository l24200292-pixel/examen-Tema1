/**************************************************************
 Aplicación: Ciudad Nocturna Moderna con Puente
 Autor: ANAHI
 Materia: Graficación por Computadora
 Descripción:
 Reinterpretación detallada de ciudad nocturna con:
 - Rascacielos variados
 - Puente arqueado con cables
 - Río con reflejo
 - Barcos
 - Luna creciente
 - Estrellas tipo cruz y líneas
 Más de 200 figuras básicas
**************************************************************/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* =========================
   1. CIELO
=========================*/
function dibujarCielo(){
    let grad = ctx.createLinearGradient(0,0,0,550);
    grad.addColorStop(0,"#1a1f4a");
    grad.addColorStop(1,"#0f3460");
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,800,550);
}

/* =========================
   2. ESTRELLAS TIPO CRUZ
=========================*/
function estrella(x,y){
    ctx.fillStyle="#f5e6a9";
    ctx.fillRect(x,y,3,3);
    ctx.fillRect(x-3,y+1,9,1);
    ctx.fillRect(x+1,y-3,1,9);
}

function dibujarEstrellas(){
    for(let i=0;i<40;i++){
        estrella(Math.random()*800,Math.random()*250);
    }

    // Líneas horizontales decorativas
    ctx.strokeStyle="#6ec6ff";
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.moveTo(50,120);
    ctx.lineTo(250,120);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(400,160);
    ctx.lineTo(700,160);
    ctx.stroke();
}

/* =========================
   3. LUNA CON BORDE
=========================*/
function dibujarLuna(){
    ctx.beginPath();
    ctx.fillStyle="#f5e6a9";
    ctx.arc(700,90,35,0,Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle="#1a1f4a";
    ctx.arc(715,80,30,0,Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle="#2d3250";
    ctx.lineWidth=6;
    ctx.arc(700,90,45,0,Math.PI*2);
    ctx.stroke();
}

/* =========================
   4. EDIFICIOS VARIADOS
=========================*/
function edificioBase(x,y,w,h,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,w,h);

    for(let i=0;i<h/25;i++){
        for(let j=0;j<w/20;j++){
            ctx.fillStyle="#f8e16c";
            ctx.fillRect(x+8+j*20,y+10+i*25,6,8);
        }
    }
}

function dibujarEdificios(){

    edificioBase(40,270,80,180,"#5f6caf");
    edificioBase(130,240,70,210,"#4ea8de");
    edificioBase(210,300,60,150,"#3a86ff");

    // Torre central alta
    edificioBase(290,200,90,250,"#6c63ff");
    ctx.fillRect(330,160,10,40); // antena

    // Edificio inclinado
    ctx.beginPath();
    ctx.moveTo(420,450);
    ctx.lineTo(420,260);
    ctx.lineTo(480,300);
    ctx.lineTo(480,450);
    ctx.fillStyle="#2ec4b6";
    ctx.fill();

    edificioBase(500,280,70,170,"#5f6caf");
    edificioBase(580,260,60,190,"#4ea8de");
    edificioBase(650,300,70,150,"#3a86ff");
}

/* =========================
   5. PUENTE REALISTA
=========================*/
function dibujarPuente(){

    // Base puente
    ctx.fillStyle="#b0b0b0";
    ctx.fillRect(0,400,800,40);

    // Arcos
    ctx.beginPath();
    ctx.arc(200,440,70,Math.PI,0);
    ctx.arc(400,440,70,Math.PI,0);
    ctx.arc(600,440,70,Math.PI,0);
    ctx.fill();

    // Torre central del puente
    ctx.beginPath();
    ctx.moveTo(400,400);
    ctx.lineTo(400,330);
    ctx.strokeStyle="#f5e6a9";
    ctx.lineWidth=4;
    ctx.stroke();

    // Cables
    ctx.beginPath();
    ctx.moveTo(400,330);
    ctx.lineTo(200,400);
    ctx.moveTo(400,330);
    ctx.lineTo(600,400);
    ctx.stroke();
}

/* =========================
   6. RÍO CON REFLEJO
=========================*/
function dibujarRio(){
    ctx.fillStyle="#4ea8de";
    ctx.fillRect(0,440,800,110);

    for(let i=0;i<50;i++){
        ctx.fillStyle="#90e0ef";
        ctx.fillRect(Math.random()*800,460+Math.random()*70,40,2);
    }
}

/* =========================
   7. BARCOS MÁS PARECIDOS
=========================*/
function barco(x,y){
    ctx.fillStyle="#1b263b";
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+100,y);
    ctx.lineTo(x+80,y+25);
    ctx.lineTo(x+20,y+25);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle="#f8e16c";
    ctx.fillRect(x+35,y-20,30,20);
}

function dibujarBarcos(){
    barco(150,500);
    barco(500,500);
}

/* =========================
   FUNCIÓN PRINCIPAL
=========================*/
function dibujar(){
    dibujarCielo();
    dibujarEstrellas();
    dibujarLuna();
    dibujarEdificios();
    dibujarPuente();
    dibujarRio();
    dibujarBarcos();
}

dibujar();