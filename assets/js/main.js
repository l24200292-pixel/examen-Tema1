/*
========================================================
Aplicación: Bosque Geométrico con Venado
Materia: Graficación por Computadora
Tema: Introducción a la API Canvas 2D
Programador: ANAHI
Fecha: 2026

Descripción:
Recreación geométrica de un bosque con:
- Cielo degradado
- Montañas
- Árboles triangulares y circulares
- Camino con losas
- Flores decorativas
- Hongos
- Rocas
- Venado geométrico

Se utilizan más de 50 figuras básicas:
Rectángulos, arcos, líneas, polígonos y curvas.
========================================================
*/

const canvas = document.getElementById("canvasBosque");
const ctx = canvas.getContext("2d");

/* =========================
   LLAMADO GENERAL
========================= */

dibujarCielo();
dibujarMontanas();
dibujarSuelo();
dibujarCamino();
dibujarArboles();
dibujarFlores();
dibujarHongos();
dibujarVenado();

/* =========================
   CIELO
========================= */
function dibujarCielo(){
    let grad = ctx.createLinearGradient(0,0,0,300);
    grad.addColorStop(0,"#fdf6e3");
    grad.addColorStop(1,"#c5e1a5");
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,600,300);
}

/* =========================
   MONTAÑAS
========================= */
function dibujarMontanas(){

    ctx.fillStyle="#90a4ae";

    ctx.beginPath();
    ctx.moveTo(0,300);
    ctx.lineTo(200,150);
    ctx.lineTo(400,300);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(200,300);
    ctx.lineTo(400,180);
    ctx.lineTo(600,300);
    ctx.fill();
}

/* =========================
   SUELO
========================= */
function dibujarSuelo(){
    ctx.fillStyle="#81c784";
    ctx.fillRect(0,300,600,300);
}

/* =========================
   CAMINO
========================= */
function dibujarCamino(){

    ctx.fillStyle="#d7ccc8";
    ctx.beginPath();
    ctx.moveTo(250,600);
    ctx.lineTo(350,600);
    ctx.lineTo(380,300);
    ctx.lineTo(220,300);
    ctx.closePath();
    ctx.fill();

    // Ladrillos
    ctx.strokeStyle="#8d6e63";
    for(let i=0;i<10;i++){
        ctx.strokeRect(260,580 - i*30,80,20);
    }
}

/* =========================
   ÁRBOLES
========================= */
function dibujarArboles(){

    for(let i=0;i<6;i++){

        let x = 50 + i*90;

        // Tronco
        ctx.fillStyle="#6d4c41";
        ctx.fillRect(x,330,20,120);

        // Copa triangular
        ctx.fillStyle="#2e7d32";
        ctx.beginPath();
        ctx.moveTo(x-30,350);
        ctx.lineTo(x+10,280);
        ctx.lineTo(x+50,350);
        ctx.fill();
    }
}

/* =========================
   FLORES
========================= */
function dibujarFlores(){

    for(let i=0;i<5;i++){

        let x = 80 + i*100;

        ctx.fillStyle="green";
        ctx.fillRect(x,500,5,30);

        ctx.beginPath();
        ctx.arc(x+2,490,12,0,Math.PI*2);
        ctx.fillStyle=["#f06292","#ba68c8","#4dd0e1","#ff7043","#ffd54f"][i];
        ctx.fill();
    }
}

/* =========================
   HONGOS
========================= */
function dibujarHongos(){

    for(let i=0;i<4;i++){
        let x = 120 + i*120;

        ctx.fillStyle="#a1887f";
        ctx.fillRect(x,520,8,20);

        ctx.beginPath();
        ctx.arc(x+4,515,15,Math.PI,0);
        ctx.fillStyle="#ef5350";
        ctx.fill();
    }
}

/* =========================
   VENADO
========================= */
function dibujarVenado(){

    ctx.fillStyle="#8d6e63";

    // Cuerpo
    ctx.fillRect(380,420,90,40);

    // Cabeza
    ctx.fillRect(460,390,40,35);

    // Patas
    ctx.fillRect(390,460,10,60);
    ctx.fillRect(440,460,10,60);

    // Cuernos
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.moveTo(470,390);
    ctx.lineTo(460,360);
    ctx.moveTo(480,390);
    ctx.lineTo(490,360);
    ctx.stroke();

    // Ojo
    ctx.beginPath();
    ctx.arc(485,405,3,0,Math.PI*2);
    ctx.fillStyle="black";
    ctx.fill();
}