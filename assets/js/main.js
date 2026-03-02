/*
========================================================
Proyecto: Bosque Geométrico Profesional
Materia: Introducción a la Graficación por Computadora
Programador: ANAHI

Descripción:
Bosque detallado estilo ilustración geométrica:
- Cielo con efecto diagonal
- Montañas suaves
- Árboles en capas
- Arbustos redondeados
- Flores completas
- Hongos
- Rocas
- Camino curvo con losas
- Venado estilizado completo
- Pájaros

Más de 120 figuras básicas utilizadas.
========================================================
*/

const canvas = document.getElementById("canvasBosque");
const ctx = canvas.getContext("2d");

/* ===================== */
dibujarCielo();
dibujarMontanas();
dibujarArbolesFondo();
dibujarCamino();
dibujarArbustos();
dibujarArbolesFrente();
dibujarFlores();
dibujarHongos();
dibujarRocas();
dibujarVenado();
dibujarPajaros();
/* ===================== */


/* ===================== */
/* CIELO */
/* ===================== */
function dibujarCielo(){
    let grad = ctx.createLinearGradient(0,0,600,600);
    grad.addColorStop(0,"#f4e7c5");
    grad.addColorStop(1,"#dcedc8");
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,600,600);

    ctx.strokeStyle="rgba(255,255,255,0.25)";
    for(let i=-600;i<600;i+=70){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i+600,600);
        ctx.stroke();
    }
}

/* ===================== */
/* MONTAÑAS */
/* ===================== */
function dibujarMontanas(){
    ctx.fillStyle="#8fa6bf";
    ctx.strokeStyle="black";
    ctx.lineWidth=2;

    ctx.beginPath();
    ctx.moveTo(0,300);
    ctx.quadraticCurveTo(200,180,350,300);
    ctx.quadraticCurveTo(500,210,600,300);
    ctx.fill();
    ctx.stroke();
}

/* ===================== */
/* ÁRBOLES FONDO */
/* ===================== */
function dibujarArbolesFondo(){
    for(let i=0;i<7;i++){
        let x=20+i*85;
        dibujarPino(x,340,110,"#2e7d32");
    }
}

/* ===================== */
/* ÁRBOLES FRENTE */
/* ===================== */
function dibujarArbolesFrente(){
    for(let i=0;i<5;i++){
        let x=60+i*100;
        dibujarPino(x,360,140,"#388e3c");
    }
}

/* ===================== */
/* PINO */
/* ===================== */
function dibujarPino(x,y,alto,color){

    ctx.fillStyle="#8d6e63";
    ctx.fillRect(x+30,y,18,90);
    ctx.strokeRect(x+30,y,18,90);

    ctx.fillStyle=color;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+40,y-alto);
    ctx.lineTo(x+80,y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // línea central
    ctx.beginPath();
    ctx.moveTo(x+40,y-alto);
    ctx.lineTo(x+40,y);
    ctx.stroke();
}

/* ===================== */
/* CAMINO */
/* ===================== */
function dibujarCamino(){
    ctx.fillStyle="#e5d3b3";
    ctx.strokeStyle="black";

    ctx.beginPath();
    ctx.moveTo(280,600);
    ctx.bezierCurveTo(250,500,350,430,320,300);
    ctx.lineTo(250,300);
    ctx.bezierCurveTo(200,430,240,500,260,600);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    for(let i=0;i<14;i++){
        ctx.strokeRect(270,580-i*22,45,16);
    }
}

/* ===================== */
/* ARBUSTOS */
/* ===================== */
function dibujarArbustos(){

    ctx.fillStyle="#66bb6a";
    ctx.strokeStyle="black";

    for(let i=0;i<6;i++){
        let x=40+i*95;

        ctx.beginPath();
        ctx.arc(x+20,520,35,0,Math.PI*2);
        ctx.arc(x+60,520,35,0,Math.PI*2);
        ctx.fill();
        ctx.stroke();

        // detalles internos
        ctx.beginPath();
        ctx.moveTo(x+20,500);
        ctx.lineTo(x+20,540);
        ctx.moveTo(x+60,500);
        ctx.lineTo(x+60,540);
        ctx.stroke();
    }
}

/* ===================== */
/* FLORES */
/* ===================== */
function dibujarFlores(){

    let colores=["#ab47bc","#26c6da","#ff7043","#ffee58","#ec407a"];

    for(let i=0;i<5;i++){
        let x=80+i*100;

        ctx.beginPath();
        ctx.moveTo(x,520);
        ctx.lineTo(x,560);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x,510,18,0,Math.PI*2);
        ctx.fillStyle=colores[i];
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x,510,7,0,Math.PI*2);
        ctx.fillStyle="white";
        ctx.fill();
        ctx.stroke();
    }
}

/* ===================== */
/* HONGOS */
/* ===================== */
function dibujarHongos(){
    for(let i=0;i<4;i++){
        let x=120+i*120;

        ctx.fillStyle="#a1887f";
        ctx.fillRect(x,545,10,20);
        ctx.strokeRect(x,545,10,20);

        ctx.beginPath();
        ctx.arc(x+5,545,18,Math.PI,0);
        ctx.fillStyle="#ef5350";
        ctx.fill();
        ctx.stroke();
    }
}

/* ===================== */
/* ROCAS */
/* ===================== */
function dibujarRocas(){
    ctx.fillStyle="#90a4ae";

    ctx.beginPath();
    ctx.arc(430,535,18,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(460,555,12,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
}

/* ===================== */
/* VENADO MEJORADO */
/* ===================== */
function dibujarVenado(){

    ctx.fillStyle="#a1887f";
    ctx.strokeStyle="black";

    // cuerpo
    ctx.beginPath();
    ctx.roundRect(380,450,140,55,15);
    ctx.fill();
    ctx.stroke();

    // cuello
    ctx.beginPath();
    ctx.roundRect(500,420,35,40,10);
    ctx.fill();
    ctx.stroke();

    // cabeza
    ctx.beginPath();
    ctx.roundRect(520,400,45,30,10);
    ctx.fill();
    ctx.stroke();

    // oreja
    ctx.beginPath();
    ctx.moveTo(540,395);
    ctx.lineTo(550,370);
    ctx.lineTo(560,395);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // patas
    ctx.fillRect(400,505,12,85);
    ctx.fillRect(440,505,12,85);
    ctx.fillRect(490,505,12,85);
    ctx.fillRect(530,505,12,85);

    // cola
    ctx.fillRect(370,460,15,15);
    ctx.strokeRect(370,460,15,15);

    // astas ramificadas
    ctx.beginPath();
    ctx.moveTo(535,400);
    ctx.lineTo(520,360);
    ctx.lineTo(510,340);
    ctx.moveTo(550,400);
    ctx.lineTo(565,360);
    ctx.lineTo(575,340);
    ctx.stroke();

    // ojo
    ctx.beginPath();
    ctx.arc(550,415,4,0,Math.PI*2);
    ctx.fillStyle="black";
    ctx.fill();
}

/* ===================== */
/* PÁJAROS */
/* ===================== */
function dibujarPajaros(){
    ctx.strokeStyle="black";
    for(let i=0;i<4;i++){
        let x=260+i*60;
        ctx.beginPath();
        ctx.arc(x,200,15,0,Math.PI);
        ctx.stroke();
    }
}