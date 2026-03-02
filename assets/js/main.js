/*
========================================================
Proyecto: Bosque Geométrico Detallado
Materia: Introducción a la Graficación por Computadora
Programador: ANAHI
Descripción:
Recreación geométrica avanzada del bosque ilustrado.
Incluye:
- Cielo con efecto diagonal
- Montañas suaves
- Más de 15 árboles superpuestos
- Árboles triangulares y poligonales
- Detalles internos en árboles
- Camino con losas individuales
- Flores con hojas
- Hongos
- Rocas
- Venado estilizado con astas ramificadas
- Pájaros en el cielo

Más de 100 figuras básicas utilizadas.
========================================================
*/

const canvas = document.getElementById("canvasBosque");
const ctx = canvas.getContext("2d");

/* ========================= */
dibujarCielo();
dibujarMontanas();
dibujarBosqueFondo();
dibujarCamino();
dibujarBosqueFrente();
dibujarFlores();
dibujarHongos();
dibujarRocas();
dibujarVenado();
dibujarPajaros();
/* ========================= */


/* ========================= */
/* CIELO */
/* ========================= */
function dibujarCielo(){

    let grad = ctx.createLinearGradient(0,0,600,600);
    grad.addColorStop(0,"#f5e6c8");
    grad.addColorStop(1,"#e9f5c1");

    ctx.fillStyle = grad;
    ctx.fillRect(0,0,600,600);

    // efecto líneas diagonales
    ctx.strokeStyle="rgba(255,255,255,0.3)";
    for(let i=-600;i<600;i+=60){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i+600,600);
        ctx.stroke();
    }
}

/* ========================= */
/* MONTAÑAS */
/* ========================= */
function dibujarMontanas(){

    ctx.fillStyle="#7e93b0";
    ctx.strokeStyle="black";
    ctx.lineWidth=2;

    ctx.beginPath();
    ctx.moveTo(0,300);
    ctx.quadraticCurveTo(200,180,350,300);
    ctx.quadraticCurveTo(500,200,600,300);
    ctx.fill();
    ctx.stroke();
}

/* ========================= */
/* ÁRBOLES FONDO */
/* ========================= */
function dibujarBosqueFondo(){

    for(let i=0;i<8;i++){
        let x = 20 + i*75;
        dibujarArbolTriangular(x,330,120,"#2e7d32");
    }
}

/* ========================= */
/* ÁRBOLES FRENTE */
/* ========================= */
function dibujarBosqueFrente(){

    for(let i=0;i<6;i++){
        let x = 40 + i*90;
        dibujarArbolPoligonal(x,360,140,"#4caf50");
    }
}

/* ========================= */
/* ÁRBOL TRIANGULAR */
/* ========================= */
function dibujarArbolTriangular(x,y,alto,color){

    ctx.fillStyle="#8d6e63";
    ctx.fillRect(x+30,y,15,80);
    ctx.strokeRect(x+30,y,15,80);

    ctx.fillStyle=color;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+45,y-alto);
    ctx.lineTo(x+90,y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // línea interna
    ctx.beginPath();
    ctx.moveTo(x+45,y-alto);
    ctx.lineTo(x+45,y);
    ctx.stroke();
}

/* ========================= */
/* ÁRBOL POLIGONAL */
/* ========================= */
function dibujarArbolPoligonal(x,y,alto,color){

    ctx.fillStyle="#8d6e63";
    ctx.fillRect(x+35,y,20,90);
    ctx.strokeRect(x+35,y,20,90);

    ctx.fillStyle=color;
    ctx.beginPath();
    ctx.moveTo(x+20,y);
    ctx.lineTo(x+10,y-alto/2);
    ctx.lineTo(x+40,y-alto);
    ctx.lineTo(x+80,y-alto);
    ctx.lineTo(x+100,y-alto/2);
    ctx.lineTo(x+80,y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // detalles internos
    ctx.beginPath();
    ctx.moveTo(x+40,y-alto);
    ctx.lineTo(x+40,y);
    ctx.moveTo(x+70,y-alto);
    ctx.lineTo(x+70,y);
    ctx.stroke();
}

/* ========================= */
/* CAMINO */
/* ========================= */
function dibujarCamino(){

    ctx.fillStyle="#e5d3b3";
    ctx.strokeStyle="black";

    ctx.beginPath();
    ctx.moveTo(280,600);
    ctx.bezierCurveTo(260,500,350,420,320,300);
    ctx.lineTo(260,300);
    ctx.bezierCurveTo(200,420,240,500,260,600);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // losas individuales
    for(let i=0;i<12;i++){
        ctx.strokeRect(265,580-i*25,50,18);
    }
}

/* ========================= */
/* FLORES */
/* ========================= */
function dibujarFlores(){

    let colores=["#ba68c8","#4dd0e1","#ff7043","#ffd54f","#ec407a"];

    for(let i=0;i<5;i++){
        let x=80+i*100;

        ctx.beginPath();
        ctx.moveTo(x,520);
        ctx.lineTo(x,560);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x,510,20,0,Math.PI*2);
        ctx.fillStyle=colores[i];
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x,510,8,0,Math.PI*2);
        ctx.fillStyle="white";
        ctx.fill();
        ctx.stroke();

        // hojas
        ctx.beginPath();
        ctx.arc(x-10,540,10,0,Math.PI);
        ctx.arc(x+10,540,10,0,Math.PI);
        ctx.fillStyle="#2e7d32";
        ctx.fill();
        ctx.stroke();
    }
}

/* ========================= */
/* HONGOS */
/* ========================= */
function dibujarHongos(){

    for(let i=0;i<4;i++){
        let x=120+i*120;

        ctx.fillRect(x,540,10,20);
        ctx.strokeRect(x,540,10,20);

        ctx.beginPath();
        ctx.arc(x+5,540,18,Math.PI,0);
        ctx.fillStyle="#ef5350";
        ctx.fill();
        ctx.stroke();
    }
}

/* ========================= */
/* ROCAS */
/* ========================= */
function dibujarRocas(){

    ctx.fillStyle="#90a4ae";

    ctx.beginPath();
    ctx.arc(430,530,20,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(460,550,15,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
}

/* ========================= */
/* VENADO */
/* ========================= */
function dibujarVenado(){

    ctx.fillStyle="#a1887f";

    ctx.fillRect(380,450,120,50);
    ctx.strokeRect(380,450,120,50);

    ctx.fillRect(480,420,40,40);
    ctx.strokeRect(480,420,40,40);

    ctx.fillRect(400,500,10,80);
    ctx.fillRect(440,500,10,80);
    ctx.fillRect(480,500,10,80);
    ctx.fillRect(520,500,10,80);

    // astas ramificadas
    ctx.beginPath();
    ctx.moveTo(500,420);
    ctx.lineTo(490,380);
    ctx.lineTo(480,360);
    ctx.moveTo(520,420);
    ctx.lineTo(530,380);
    ctx.lineTo(540,360);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(510,440,4,0,Math.PI*2);
    ctx.fillStyle="black";
    ctx.fill();
}

/* ========================= */
/* PÁJAROS */
/* ========================= */
function dibujarPajaros(){

    ctx.strokeStyle="black";

    for(let i=0;i<4;i++){
        let x=250+i*50;
        ctx.beginPath();
        ctx.arc(x,200,15,0,Math.PI);
        ctx.stroke();
    }
}