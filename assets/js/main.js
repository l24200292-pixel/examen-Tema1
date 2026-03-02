/*
=========================================
Examen Tema 1 - Introducción a la Graficación
Autor: ANAHI
Descripción: Dibujo de un bosque con venado
Tecnología: HTML5 Canvas 2D
Fecha: 2026
=========================================
*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* =============================
   FUNCIÓN PRINCIPAL
============================= */
function iniciarDibujo() {
    dibujarCielo();
    dibujarMontanas();
    dibujarArboles();
    dibujarArbustos();
    dibujarVenado(350, 350);
    dibujarDetalles();
}

/* =============================
   CIELO
============================= */
function dibujarCielo() {
    let gradiente = ctx.createLinearGradient(0, 0, 0, 300);
    gradiente.addColorStop(0, "#81d4fa");
    gradiente.addColorStop(1, "#e1f5fe");

    ctx.fillStyle = gradiente;
    ctx.fillRect(0, 0, 600, 300);
}

/* =============================
   MONTAÑAS
============================= */
function dibujarMontanas() {
    ctx.fillStyle = "#78909c";

    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(150, 150);
    ctx.lineTo(300, 250);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(200, 250);
    ctx.lineTo(400, 130);
    ctx.lineTo(600, 250);
    ctx.closePath();
    ctx.fill();
}

/* =============================
   ÁRBOLES
============================= */
function dibujarArbol(x, y, escala) {

    // Tronco
    ctx.fillStyle = "#6d4c41";
    ctx.fillRect(x, y, 20 * escala, 60 * escala);

    // Copa
    ctx.beginPath();
    ctx.moveTo(x - 30 * escala, y);
    ctx.lineTo(x + 10 * escala, y - 70 * escala);
    ctx.lineTo(x + 50 * escala, y);
    ctx.closePath();
    ctx.fillStyle = "#2e7d32";
    ctx.fill();
}

function dibujarArboles() {
    dibujarArbol(50, 260, 1);
    dibujarArbol(150, 270, 1.2);
    dibujarArbol(250, 260, 0.9);
    dibujarArbol(450, 270, 1.1);
}

/* =============================
   ARBUSTOS
============================= */
function dibujarArbustos() {
    ctx.fillStyle = "#388e3c";

    for (let i = 0; i < 600; i += 80) {
        ctx.beginPath();
        ctx.arc(i, 380, 40, 0, Math.PI * 2);
        ctx.fill();
    }
}

/* =============================
   VENADO
============================= */
function dibujarVenado(x, y) {

    ctx.fillStyle = "#a1887f";

    // Cuerpo
    ctx.beginPath();
    ctx.ellipse(x, y, 80, 40, 0, 0, Math.PI * 2);
    ctx.fill();

    // Cuello
    ctx.fillRect(x + 50, y - 60, 20, 60);

    // Cabeza
    ctx.beginPath();
    ctx.ellipse(x + 60, y - 80, 30, 25, 0, 0, Math.PI * 2);
    ctx.fill();

    // Patas
    ctx.fillRect(x - 50, y + 40, 10, 80);
    ctx.fillRect(x - 10, y + 40, 10, 80);
    ctx.fillRect(x + 30, y + 40, 10, 80);
    ctx.fillRect(x + 60, y + 40, 10, 80);

    // Ojo
    ctx.beginPath();
    ctx.arc(x + 70, y - 85, 4, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill();
}

/* =============================
   DETALLES
============================= */
function dibujarDetalles() {

    // Pasto
    ctx.fillStyle = "#4caf50";
    ctx.fillRect(0, 300, 600, 200);

    // Pájaros
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(200, 100, 20, 0, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(250, 100, 20, 0, Math.PI);
    ctx.stroke();
}

iniciarDibujo();