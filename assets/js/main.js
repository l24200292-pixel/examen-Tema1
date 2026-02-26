/************************************************************
 Aplicación: Noche Estrellada - Interpretación Canvas 2D
 Autor: ANAHI
 Materia: Graficación por Computadora
 Descripción:
 Reinterpretación programada utilizando más de 60
 figuras básicas (arcos, líneas, rectángulos, curvas).
 Fecha: 2026
*************************************************************/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* ==============================
   1. FONDO NOCTURNO
==============================*/
function dibujarCielo(){
    ctx.fillStyle = "#0b1d3a";
    ctx.fillRect(0,0,700,500);
}

/* ==============================
   2. LUNA
==============================*/
function dibujarLuna(){
    ctx.beginPath();
    ctx.fillStyle = "#FFD700";
    ctx.arc(600,100,60,0,Math.PI*2);
    ctx.fill();

    // Detalles circulares
    for(let i=0;i<10;i++){
        ctx.beginPath();
        ctx.strokeStyle = "#fce570";
        ctx.arc(600,100,20 + i*5,0,Math.PI*2);
        ctx.stroke();
    }
}

/* ==============================
   3. ESTRELLAS EN ESPIRAL
==============================*/
function dibujarEstrellas(){
    for(let s=0; s<15; s++){
        let x = Math.random()*650;
        let y = Math.random()*250;

        ctx.beginPath();
        ctx.fillStyle = "#fffacd";
        ctx.arc(x,y,5,0,Math.PI*2);
        ctx.fill();

        for(let i=0;i<5;i++){
            ctx.beginPath();
            ctx.strokeStyle = "#ffff99";
            ctx.arc(x,y,10 + i*5,0,Math.PI*2);
            ctx.stroke();
        }
    }
}

/* ==============================
   4. REMOLINOS DEL CIELO
==============================*/
function dibujarRemolinos(){
    ctx.strokeStyle = "#3fa9f5";
    ctx.lineWidth = 3;

    for(let i=0;i<20;i++){
        ctx.beginPath();
        ctx.arc(350,200,20 + i*8,0,Math.PI*1.5);
        ctx.stroke();
    }
}

/* ==============================
   5. MONTAÑAS
==============================*/
function dibujarMontanas(){
    ctx.fillStyle = "#1c2f4a";

    ctx.beginPath();
    ctx.moveTo(0,350);
    ctx.lineTo(200,250);
    ctx.lineTo(400,350);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300,350);
    ctx.lineTo(500,270);
    ctx.lineTo(700,350);
    ctx.fill();
}

/* ==============================
   6. PUEBLO
==============================*/
function dibujarPueblo(){
    ctx.fillStyle = "#2f4f4f";

    for(let i=0;i<10;i++){
        ctx.fillRect(50 + i*60,370,40,50);

        // Ventanas
        ctx.fillStyle = "#ffd700";
        ctx.fillRect(60 + i*60,385,10,10);
        ctx.fillRect(75 + i*60,400,10,10);
        ctx.fillStyle = "#2f4f4f";
    }

    // Torre iglesia
    ctx.beginPath();
    ctx.moveTo(350,330);
    ctx.lineTo(370,250);
    ctx.lineTo(390,330);
    ctx.fill();
}

/* ==============================
   7. ÁRBOL OSCURO
==============================*/
function dibujarArbol(){
    ctx.fillStyle = "#0a0a0a";

    ctx.beginPath();
    ctx.moveTo(100,450);
    ctx.lineTo(130,200);
    ctx.lineTo(160,450);
    ctx.fill();
}

/* ==============================
   FUNCIÓN PRINCIPAL
==============================*/
function dibujar(){
    dibujarCielo();
    dibujarLuna();
    dibujarEstrellas();
    dibujarRemolinos();
    dibujarMontanas();
    dibujarPueblo();
    dibujarArbol();
}

dibujar();