const elem = document.getElementById('canvas');
const params = { width: 500, height: 300 };
const two = new Two(params).appendTo(elem);

// Exercício 1: Linha animada
let line = two.makeLine(50, 50, 450, 50);
let direction = 1;

two.bind('update', () => {
    line.translation.x += 2 * direction;

    if (line.translation.x >= 200 || line.translation.x <= -200) {
        direction *= -1;
    }
});

// Exercício 2: Hexágono
const hexagon = two.makePolygon(250, 150, 50, 6);
hexagon.fill = 'red';
hexagon.stroke = 'black';
hexagon.linewidth = 3;

// Exercício 3: Círculo que muda de cor
const circle = two.makeCircle(400, 150, 40);
let colorFactor = 0;
circle.fill = 'rgb(255, 0, 0)';
circle.stroke = 'black';

two.bind('update', () => {
    colorFactor += 0.02;
    const r = Math.round(255 * (1 - Math.abs(Math.sin(colorFactor))));
    const b = Math.round(255 * Math.abs(Math.sin(colorFactor)));
    circle.fill = `rgb(${r}, 0, ${b})`;
});

two.play();