/**************************************************************
 Aplicación: Ciudad Nocturna Moderna
 Autor: ANAHI
 Materia: Graficación por Computadora
 Descripción:
 Reinterpretación programada de una ciudad nocturna con:
 - Rascacielos
 - Puente
 - Río
 - Barcos
 - Luna
 - Estrellas
 Más de 150 figuras básicas
**************************************************************/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* =========================
   1. CIELO
=========================*/
function dibujarCielo(){
    ctx.fillStyle="#1c2541";
    ctx.fillRect(0,0,800,550);
}

/* =========================
   2. ESTRELLAS
=========================*/
function dibujarEstrellas(){
    for(let i=0;i<60;i++){
        ctx.fillStyle="#f5f3ce";
        ctx.fillRect(Math.random()*800,Math.random()*250,3,3);
    }
}

/* =========================
   3. LUNA
=========================*/
function dibujarLuna(){
    ctx.beginPath();
    ctx.fillStyle="#f5e6a9";
    ctx.arc(700,100,40,0,Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle="#1c2541";
    ctx.arc(715,90,35,0,Math.PI*2);
    ctx.fill();
}

/* =========================
   4. EDIFICIOS
=========================*/
function edificio(x,y,w,h,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,w,h);

    // ventanas
    for(let i=0;i<5;i++){
        for(let j=0;j<3;j++){
            ctx.fillStyle="#f8e16c";
            ctx.fillRect(x+10+j*15,y+10+i*20,8,10);
        }
    }
}

function dibujarEdificios(){
    edificio(50,250,80,200,"#5f6caf");
    edificio(150,220,90,230,"#4ea8de");
    edificio(260,260,70,190,"#3a86ff");
    edificio(350,200,100,250,"#5f6caf");
    edificio(480,230,90,220,"#4ea8de");
    edificio(600,260,70,190,"#3a86ff");
}

/* =========================
   5. PUENTE
=========================*/
function dibujarPuente(){
    ctx.fillStyle="#b0b0b0";
    ctx.fillRect(0,400,800,40);

    ctx.beginPath();
    ctx.arc(200,440,60,Math.PI,0);
    ctx.arc(400,440,60,Math.PI,0);
    ctx.arc(600,440,60,Math.PI,0);
    ctx.fill();
}

/* =========================
   6. RÍO
=========================*/
function dibujarRio(){
    ctx.fillStyle="#4ea8de";
    ctx.fillRect(0,440,800,110);

    for(let i=0;i<40;i++){
        ctx.fillStyle="#90e0ef";
        ctx.fillRect(Math.random()*800,450+Math.random()*80,30,2);
    }
}

/* =========================
   7. BARCOS
=========================*/
function barco(x,y){
    ctx.fillStyle="#1b263b";
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+80,y);
    ctx.lineTo(x+60,y+20);
    ctx.lineTo(x+20,y+20);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle="#f8e16c";
    ctx.fillRect(x+30,y-15,20,15);
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