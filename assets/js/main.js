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
    ctx.fillRect(0,0,W);
    
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
    ctx.fillRect(350, 360, 320, 10);
    ctx.strokeStyle = COLORES.black;
    ctx.lineWidth = 2;
    ctx.strokeRect(350, 360, 320, 10);

    ctx.strokeStyle = COLORES.branch;
    ctx.lineWidth = 8;
    ctx.beginPath(); ctx.moveTo(590, 365); ctx.lineTo(650, 290); ctx.stroke();

    const h = COLORES.leaf;
    drawShape('oval', {x: 655, y: 285, rx: 10, ry: 25, rot: 0.8, col: h, border: true});
    drawShape('oval', {x: 620, y: 290, rx: 10, ry: 20, rot: -0.5, col: h, border: true});
    drawShape('oval', {x: 605, y: 310, rx: 10, ry: 20, rot: -0.5, col: h, border: true});
    drawShape('oval', {x: 658, y: 315, rx: 10, ry: 20, rot: 1.6, col: h, border: true});
    drawShape('oval', {x: 640, y: 338, rx: 10, ry: 20, rot: 1.6, col: h, border: true});

    // Círculo azul de fondo
    ctx.fillStyle = 'rgba(124, 203, 243, 0.4)';
    ctx.beginPath();
    ctx.arc(300, 150, 85, 0, Math.PI * 2); 
    ctx.fill();

    // --- 4. EL PÁJARO ACOMODADO ---
    const pX = 510, pY = 270;

    drawShape('semi', {x: pX - 45, y: pY + 20, r: 50, rot: 2.6, col: '#2E7D32', border: true});
    drawShape('semi', {x: pX - 35, y: pY + 35, r: 50, rot: 2.0, col: '#FBC02D', border: true});
    drawShape('semi', {x: pX - 25, y: pY + 50, r: 50, rot: 1.6, col: '#0288D1', border: true});

    ctx.strokeStyle = COLORES.black;
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(pX - 15, pY + 40); ctx.lineTo(pX - 20, 360); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(pX + 35, pY + 40); ctx.lineTo(pX + 40, 360); ctx.stroke();
    drawShape('tri', {x1: pX-40, y1: 360, x2: pX-10, y2: 360, x3: pX-22, y3: 375, col: COLORES.bird_feet, border: true});
    drawShape('tri', {x1: pX+25, y1: 360, x2: pX+50, y2: 360, x3: pX+37, y3: 375, col: COLORES.bird_feet, border: true});

    drawShape('semi', {x: pX, y: pY, r: 85, col: COLORES.bird_blue, border: true});
    drawShape('semi', {x: pX, y: pY, r: 75, rot: -0.8, col: '#4CAF50', border: true});
    drawShape('semi', {x: pX + 10, y: pY + 5, r: 65, rot: -0.4, col: '#FBC02D', border: true});

    const hX = pX + 70, hY = pY - 50;
    drawShape('oval', {x: hX, y: hY, rx: 48, ry: 48, col: COLORES.bird_orange, border: true});
    drawShape('oval', {x: hX + 15, y: hY - 15, rx: 16, ry: 16, col: 'white', border: true});
    drawShape('oval', {x: hX + 15, y: hY - 15, rx: 8, ry: 8, col: '#1A237E'});
    drawShape('tri', {x1: hX + 40, y1: hY - 15, x2: hX + 40, y2: hY + 15, x3: hX + 90, y3: hY, col: COLORES.bird_beak, border: true});
});