/**
 * RECREACIÓN DE IMAGEN GEOMÉTRICA - VERSIÓN FINAL Y COMPLETA
 * Programadora: ANAHI DIAZ ROSALES
 * * Correcciones realizadas:
 * 1. Nubes: Ahora compuestas por múltiples círculos superpuestos y posicionadas igual que la referencia.
 * 2. Hojas laterales: Ajustadas en forma y color.
 * 3. Hojas y detalles de la rama: Añadidos todos los óvalos y triángulos pequeños.
 * 4. Pájaro: Ajuste de proporciones en el ojo y posicionamiento de patas.
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Configuración Inicial del Canvas
    const canvas = document.getElementById('mainCanvas');
    if (!canvas) {
        console.error("No se pudo encontrar el elemento canvas.");
        return;
    }
    const ctx = canvas.getContext('2d');

    // Dimensiones lógicas del canvas
    const W = canvas.width;  // 800
    const H = canvas.height; // 450

    // Paleta de Colores Exacta con Transparencias (RGBA)
    const COLORES = {
        sky_bg: '#E0F1F9',
        sky_sun_circle: 'rgba(180, 220, 240, 0.4)', // Círculo grande de fondo
        sky_cloud: 'rgba(255, 255, 255, 0.7)', // Nubes translúcidas
        veg_light: 'rgba(165, 214, 167, 0.5)', // Verde claro translúcido
        veg_dark: 'rgba(76, 175, 80, 0.4)',    // Verde oscuro translúcido
        leaf_solid: '#7CB342', // Verde sólido para hojas pequeñas
        branch: '#8D6E63',
        branch_dark: '#6D4C41', // Marrón oscuro para patas
        bird_body: '#1E88E5',
        bird_head: '#FF9800',
        bird_beak: '#FF5722',
        bird_eye_iris: '#1A237E',
        bird_feet: '#FBC02D',
        white: '#ffffff',
        black: '#000000'
    };

    // ==========================================================================
    // FUNCIONES AUXILIARES DE DIBUJO
    // ==========================================================================

    function drawTriangle(x1, y1, x2, y2, x3, y3, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.fill();
    }

    function drawOval(x, y, radiusX, radiusY, rotation, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.ellipse(x, y, radiusX, radiusY, rotation, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawCircle(x, y, radio, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radio, 0, Math.PI * 2);
        ctx.fill();
    }

    // ==========================================================================
    // FUNCIONES DE RENDERIZADO (POR CAPAS)
    // ==========================================================================

    // --- CAPA 1: FONDO, SOL Y NUBES COMPLETAS ---
    function drawCompleteBackground() {
        // Cielo base
        ctx.fillStyle = COLORES.sky_bg;
        ctx.fillRect(0, 0, W, H);
        
        // Círculo grande translúcido de fondo (Sol difuminado)
        drawCircle(220, 220, 120, COLORES.sky_sun_circle);

        // NUBES COMPUESTAS (Varios círculos superpuestos)
        ctx.fillStyle = COLORES.sky_cloud;

        // Nube Izquierda (Formada por 2 círculos)
        drawCircle(80, 150, 40, COLORES.sky_cloud);
        drawCircle(120, 160, 30, COLORES.sky_cloud);

        // Nube Derecha (Formada por 3 círculos)
        drawCircle(700, 100, 45, COLORES.sky_cloud);
        drawCircle(750, 120, 35, COLORES.sky_cloud);
        drawCircle(660, 130, 25, COLORES.sky_cloud);
    }

    // --- CAPA 2: VEGETACIÓN LATERAL AJUSTADA ---
    function drawSideVegetation() {
        // Lado Izquierdo (Hojas translúcidas altas)
        drawOval(50, 400, 40, 120, 0.1, COLORES.veg_dark);
        drawOval(100, 420, 35, 100, -0.1, COLORES.veg_light);
        drawOval(20, 450, 50, 150, 0, COLORES.veg_light);

        // Lado Derecho (Grupo de hojas translúcidas)
        drawOval(750, 380, 40, 130, -0.2, COLORES.veg_dark);
        drawOval(700, 420, 30, 90, 0.2, COLORES.veg_light);
        drawOval(780, 400, 45, 140, 0, COLORES.veg_dark);
        
        // Pequeño triángulo de brillo en la esquina superior derecha de la vegetación
        drawTriangle(750, 350, 755, 360, 745, 360, COLORES.white);
        drawTriangle(750, 370, 755, 360, 745, 360, COLORES.white);
    }

    // --- CAPA 3: RAMA CON TODOS SUS DETALLES (HOJAS Pequeñas Y TRIÁNGULOS) ---
    function drawDetailedBranch() {
        const xRama = 550; // Punto de referencia alineado con el pájaro
        const yRama = 260;

        // Rama principal horizontal
        ctx.fillStyle = COLORES.branch;
        ctx.fillRect(xRama - 80, yRama + 105, 300, 10);
        
        // Ramita inclinada secundaria hacia arriba-derecha
        ctx.lineWidth = 8;
        ctx.strokeStyle = COLORES.branch;
        ctx.beginPath();
        ctx.moveTo(xRama + 150, yRama + 110);
        ctx.lineTo(xRama + 200, yRama + 70);
        ctx.stroke();

        // DETALLES FINOS DE LA RAMA (Hojas pequeñas y triángulos)
        ctx.fillStyle = COLORES.leaf_solid;
        
        // Hojas ovaladas en la ramita inclinada
        drawOval(xRama + 210, yRama + 60, 15, 25, Math.PI/4, COLORES.leaf_solid);
        drawOval(xRama + 180, yRama + 85, 12, 20, Math.PI/3, COLORES.leaf_solid);

        // Triángulos verdes pequeños "creciendo" de la rama
        drawTriangle(xRama + 130, yRama + 90, xRama + 140, yRama + 95, xRama + 130, yRama + 100, COLORES.leaf_solid);
        drawTriangle(xRama + 170, yRama + 120, xRama + 180, yRama + 125, xRama + 170, yRama + 130, COLORES.leaf_solid);
        drawTriangle(xRama + 220, yRama + 110, xRama + 230, yRama + 115, xRama + 220, yRama + 120, COLORES.leaf_solid);
    }

    // --- CAPA 4: EL PÁJARO GEOMÉTRICO COMPLETO ---
    function drawCompleteBird() {
        const x = 550; // Punto central del cuerpo
        const y = 260;

        // 1. Cola (Detrás del cuerpo) - 4 plumas
        drawOval(x - 95, y + 15, 15, 50, Math.PI / 1.2, COLORES.bird_tail_1 || '#2E7D32'); // Usando fallback si no definidos
        drawOval(x - 85, y + 35, 15, 50, Math.PI / 1.4, COLORES.bird_tail_2 || '#FBC02D');
        drawOval(x - 65, y + 50, 15, 50, Math.PI / 1.6, COLORES.bird_tail_3 || '#0288D1');
        drawOval(x - 45, y + 60, 15, 50, Math.PI / 1.8, COLORES.bird_tail_4 || '#8BC34A');

        // 2. Patas (Delante de la cola, detrás del cuerpo)
        ctx.strokeStyle = COLORES.branch_dark;
        ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(x - 10, y + 50); ctx.lineTo(x - 15, y + 105); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x + 30, y + 50); ctx.lineTo(x + 35, y + 105); ctx.stroke();

        // Pies (Triángulos amarillos)
        drawTriangle(x-25, 105+y, x-5, 105+y, x-15, 120+y, COLORES.bird_feet);
        drawTriangle(x+25, 105+y, x+45, 105+y, x+35, 120+y, COLORES.bird_feet);

        // 3. Cuerpo (Círculo completo azul)
        drawCircle(x, y, 75, COLORES.bird_body);

        // 4. Alas (Óvalos rotados sobre el cuerpo) - 3 plumas
        drawOval(x - 25, y - 30, 30, 65, -Math.PI / 4, COLORES.bird_wing_1 || '#4CAF50');
        drawOval(x - 10, y - 10, 30, 65, -Math.PI / 6, COLORES.bird_wing_2 || '#FBC02D');
        drawOval(x + 5, y + 15, 30, 65, -Math.PI / 12, COLORES.bird_wing_3 || '#03A9F4');
        
        // Triángulo pequeño amarillo de detalle en el ala superior
        drawTriangle(x+10, y-10, x+35, y-25, x+30, y+5, COLORES.bird_wing_2 || '#FBC02D');

        // 5. Cabeza (Círculo naranja)
        drawCircle(x + 65, y - 55, 42, COLORES.bird_head);

        // 6. Pico (Triángulo naranja-rojizo largo)
        drawTriangle(x + 95, y - 65, x + 95, y - 40, x + 140, y - 52, COLORES.bird_beak);

        // 7. Ojo detallado (Ajuste de proporciones)
        drawCircle(x + 80, y - 65, 16, COLORES.white); // Fondo blanco
        drawCircle(x + 80, y - 65, 10, COLORES.bird_eye_iris); // Iris azul oscuro
        drawCircle(x + 80, y - 65, 5, COLORES.black); // Pupila negra
        drawCircle(x + 83, y - 68, 3, COLORES.white); // Brillo blanco superior
    }

    // ==========================================================================
    // EJECUCIÓN PRINCIPAL (Renderizado Secuencial)
    // ==========================================================================
    
    // El orden de las llamadas define qué elemento tapa a cuál.
    drawCompleteBackground();    // Capa más lejana (Cielo, Sol, Nubes)
    drawSideVegetation();        // Capa media (Hojas translúcidas laterales)
    drawDetailedBranch();        // Capa media (Rama con todos sus detalles finos)
    drawCompleteBird();          // Capa más cercana (Pájaro completo con su ojo detallado)

});