"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('mainCanvas');
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const COLORES = {
        sky_bg: '#E0F1F9',
        sky_cloud: 'rgba(255, 255, 255, 0.7)',
        veg_light: 'rgba(165, 214, 167, 0.6)',
        veg_li: 'rgba(146, 211, 24, 0.6)',
        veg_dark: 'rgba(76, 175, 80, 0.5)',
        branch: '#8D6E63',
        leaf: '#7CB342',
        bird_blue: '#1E88E5',
        bird_orange: '#FF9800',
        bird_beak: '#FF5722',
        bird_feet: '#FBC02D',
        black: '#000000'
    };

    // --- FUNCIÓN DE DIBUJO ---
    function drawShape(type, config) {
        ctx.save();
        ctx.fillStyle = config.col;
        ctx.strokeStyle = COLORES.black;
        ctx.lineWidth = config.border ? 2 : 0;
        ctx.beginPath();

        if (type === 'oval') {
            ctx.translate(config.x, config.y);
            ctx.rotate(config.rot || 0);
            ctx.ellipse(0, 0, config.rx, config.ry, 0, 0, Math.PI * 2);
        } else if (type === 'tri') {
            ctx.moveTo(config.x1, config.y1);
            ctx.lineTo(config.x2, config.y2);
            ctx.lineTo(config.x3, config.y3);
            ctx.closePath();
        } else if (type === 'semi') {
            ctx.translate(config.x, config.y);
            ctx.rotate(config.rot || 0);
            ctx.arc(0, 0, config.r, 0, Math.PI, false);
            ctx.closePath();
        }
        
        ctx.fill();
        if (config.border) ctx.stroke();
        ctx.restore();
    }

    // --- 1. FONDO Y NUBES ---
    ctx.fillStyle = COLORES.sky_bg;
    ctx.fillRect(0, 0, W, H);
    
    ctx.fillStyle = COLORES.sky_cloud;
    [[110,130,40], [150,140,30], [80,150,25], [700,100,45], [740,120,35]].forEach(n => {
        ctx.beginPath(); ctx.arc(n[0], n[1], n[2], 0, Math.PI*2); ctx.fill();
    });

    // --- 2. VEGETACIÓN DE ESQUINAS (DIFERENTES MODELOS Y COLORES) ---
    // Esquina Izquierda (Variedad de formas)
    drawShape('oval', {x: 40, y: 420, rx: 50, ry: 160, rot: 0.2, col: COLORES.veg_dark}); // Grande oscura
    drawShape('oval', {x: 90, y: 440, rx: 30, ry: 100, rot: -0.1, col: COLORES.veg_light}); // Mediana clara
    drawShape('oval', {x: 140, y: 460, rx: 20, ry: 80, rot: 0.3, col: COLORES.veg_li});    // Pequeña lima
    drawShape('oval', {x: 20, y: 380, rx: 35, ry: 130, rot: -0.05, col: COLORES.veg_li}); // Larga lima
    
    // Esquina Derecha (Variedad de formas)
    drawShape('oval', {x: 760, y: 410, rx: 55, ry: 170, rot: -0.2, col: COLORES.veg_dark}); // Muy grande
    drawShape('oval', {x: 700, y: 430, rx: 35, ry: 110, rot: 0.15, col: COLORES.veg_li});   // Color lima
    drawShape('oval', {x: 650, y: 450, rx: 25, ry: 90, rot: 0.4, col: COLORES.veg_light});  // Pequeña clara
    drawShape('oval', {x: 790, y: 350, rx: 30, ry: 120, rot: 0, col: COLORES.veg_dark});    // Alta oscura

    // --- 3. RAMA Y HOJAS (TUS POSICIONES ORIGINALES) ---
    ctx.fillStyle = COLORES.branch;
    ctx.fillRect(350, 360, 320, 15);
    ctx.strokeStyle = COLORES.black;
    ctx.lineWidth = 2;
    ctx.strokeRect(350, 360, 320, 15);

    ctx.strokeStyle = COLORES.branch;
    ctx.lineWidth = 15;
    ctx.beginPath(); ctx.moveTo(590, 365); ctx.lineTo(650, 290); ctx.stroke();

    ctx.strokeStyle = COLORES.branch;
    ctx.lineWidth = 15;
    ctx.beginPath(); ctx.moveTo(590, 365); ctx.lineTo(650, 390); ctx.stroke();

    const h = COLORES.leaf;
    drawShape('oval', {x: 655, y: 285, rx: 10, ry: 25, rot: 0.8, col: h, border: true});
    drawShape('oval', {x: 620, y: 290, rx: 10, ry: 20, rot: -0.5, col: h, border: true});
    drawShape('oval', {x: 605, y: 310, rx: 10, ry: 20, rot: -0.5, col: h, border: true});
    drawShape('oval', {x: 658, y: 315, rx: 10, ry: 20, rot: 1.6, col: h, border: true});
    drawShape('oval', {x: 640, y: 338, rx: 10, ry: 20, rot: 1.6, col: h, border: true});
    drawShape('oval', {x: 670, y: 395, rx: 8, ry: 25, rot: 1.8, col: h, border: true});
    // Círculo azul de fondo
    ctx.fillStyle = 'rgba(124, 203, 243, 0.4)';
    ctx.beginPath();
    ctx.arc(300, 150, 85, 0, Math.PI * 2); 
    ctx.fill();

    // --- 4. EL PÁJARO ACOMODADO ---
    const pX = 480, pY = 220;
// Función para medio óvalo
function drawHalfOval(x, y, rx, ry, rot, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI); // medio ovalo
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = COLORES.black;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
}
// 🪶 PLUMAS GRANDES (más abajo)

drawHalfOval(
    pX - 165,
    pY + 45,   // antes 30 → ahora 45
    80,
    30,
    2.9,
    '#2E7D32'
);

drawHalfOval(
    pX - 140,
    pY + 65,   // antes 50 → ahora 65
    80,
    30,
    2.5,
    '#FBC02D'
);

drawHalfOval(
    pX - 115,
    pY + 75,   // antes 60 → ahora 75
    80,
    30,
    2.2,
    '#0288D1'
);
// 🪶 COLA MÁS ABAJO

let tailFeathers = [
    {x:-100, y:25, rx:85, ry:28, rot:3.6, col:'#43A047'},  // antes 10
    {x:-90,  y:35, rx:80, ry:26, rot:3.3, col:'#FDD835'},  // antes 20
    {x:-80,  y:45, rx:75, ry:24, rot:3.0, col:'#4FC3F7'},  // antes 30
    {x:-70,  y:50, rx:65, ry:20, rot:2.8, col:'#2E7D32'}   // antes 35
];

tailFeathers.forEach(f => {
    drawHalfOval(
        pX + f.x,
        pY + f.y,
        f.rx,
        f.ry,
        f.rot,
        f.col
    );
});

// Ala principal grande
drawShape('semi', {
    x: pX + 15,
    y: pY + 5,
    r: 75,
    rot: -0.6,
    col: '#1E88E5',
    border: true
});
    ctx.strokeStyle = COLORES.branch;
    ctx.lineWidth = 10;
    ctx.beginPath(); ctx.moveTo(pX - 25, pY + 30); ctx.lineTo(pX - 2, 360); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pX + 30, pY + 30); ctx.lineTo(pX + 60, 360); ctx.stroke();
// Patita izquierda
drawShape('tri', {
    x1: pX - 20, y1: 360,
    x2: pX + 10, y2: 360,
    x3: pX - 5, y3: 340,
    col: COLORES.bird_feet,
    border: true
});

// Patita derecha
drawShape('tri', {
    x1: pX + 45, y1: 360,
    x2: pX + 75, y2: 360,
    x3: pX + 60, y3: 340,
    col: COLORES.bird_feet,
    border: true
});
  // 🟦 CUERPO (más inclinado hacia arriba)
drawShape('semi', {
    x: pX,
    y: pY + 5,
    r: 90,
    rot: -0.2,
    col: COLORES.bird_blue,
    border: true
});

// 🟢 Ala verde (más separada y al revés)
drawHalfOval(
    pX - 5,      // más hacia atrás
    pY - 35,     // más arriba
    95,
    35,
    -2.4,
    '#4CAF50'
);

// 🟡 Ala amarilla (encima y separada)
drawHalfOval(
    pX + 20,
    pY - 25,
    85,
    30,
    -2.1,
    '#FBC02D'
);
// ==========================
// 🟠 CABEZA COMPLETA AJUSTADA
// ==========================

const hX = pX + 80;  
const hY = pY - 65;   // posición final ajustada

// Cabeza base
drawShape('oval', {
    x: hX,
    y: hY,
    rx: 55,
    ry: 55,
    col: COLORES.bird_orange,
    border: true
});

// Mejilla decorativa
drawShape('oval', {
    x: hX - 15,
    y: hY + 10,
    rx: 18,
    ry: 14,
    col: '#FFB74D'
});

// ==========================
// 👁 OJO DETALLADO
// ==========================

// Parte blanca
drawShape('oval', {
    x: hX + 18,
    y: hY - 15,
    rx: 20,
    ry: 20,
    col: 'white',
    border: true
});

// Iris
drawShape('oval', {
    x: hX + 20,
    y: hY - 12,
    rx: 10,
    ry: 10,
    col: '#1A237E'
});

// Brillo grande
drawShape('oval', {
    x: hX + 24,
    y: hY - 18,
    rx: 5,
    ry: 5,
    col: 'white'
});

// Brillo pequeño
drawShape('oval', {
    x: hX + 18,
    y: hY - 10,
    rx: 3,
    ry: 3,
    col: 'white'
});

// ==========================
// 🐤 PICO DETALLADO
// ==========================

// Pico superior
drawShape('tri', {
    x1: hX + 50,
    y1: hY - 15,
    x2: hX + 50,
    y2: hY + 5,
    x3: hX + 110,
    y3: hY - 2,
    col: COLORES.bird_beak,
    border: true
});

// Pico inferior
drawShape('tri', {
    x1: hX + 50,
    y1: hY + 5,
    x2: hX + 50,
    y2: hY + 20,
    x3: hX + 100,
    y3: hY + 10,
    col: '#F57C00',
    border: true
});

// Línea divisoria del pico
ctx.beginPath();
ctx.moveTo(hX + 50, hY + 5);
ctx.lineTo(hX + 100, hY + 10);
ctx.strokeStyle = '#E65100';
ctx.lineWidth = 2;
ctx.stroke();

// Brillo del pico
drawShape('oval', {
    x: hX + 85,
    y: hY - 5,
    rx: 6,
    ry: 3,
    col: 'rgba(255,255,255,0.5)'
});
});