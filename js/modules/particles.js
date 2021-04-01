import { DOMstrings } from "../modules/base.js";

let canvas,
  canvasBackground,
  context,
  particles,
  particleSize,
  maxParticles,
  threshold,
  particle;
canvas = DOMstrings.canvas;
canvasBackground = DOMstrings.canvasBackground;
canvas.width = 0.9 * canvasBackground.offsetWidth;
canvas.height = 0.9 * canvasBackground.offsetHeight;
context = canvas.getContext("2d");
particles = [];
particleSize = 4;
maxParticles = 70;
threshold = 100;
for (let i = 0; i < maxParticles; i++) {
  particle = {
    x: Math.random() * canvas.offsetWidth,
    y: Math.random() * canvas.offsetHeight,
    vx: Math.random(),
    vy: Math.random(),
  };
  particles.push(particle);
}
context.fillStyle = "white";

const line = (particle, particle2) => {
  context.beginPath();
  context.moveTo(particle.x, particle.y);
  context.lineTo(particle2.x, particle2.y);
  context.stroke();
};

export const animate = () => {
  context.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
  for (let i = 0; i < maxParticles; i++) {
    let particle = particles[i];
    context.fillRect(
      particle.x - particleSize / 2,
      particle.y - particleSize / 2,
      particleSize,
      particleSize
    );
    for (let j = i; j < maxParticles; j++) {
      if (i != j) {
        let particle2 = particles[j];
        let distanceX = Math.abs(particle.x - particle2.x);
        let distanceY = Math.abs(particle.y - particle2.y);
        if (distanceX < threshold && distanceY < threshold) {
          context.lineWidth = (threshold * 2 - (distanceX + distanceY)) / 50;
          let color = 200 - Math.floor(distanceX + distanceY);
          context.strokeStyle =
            "rgb(" + color + "," + color + "," + color + ")";
          line(particle, particle2);
        }
      }
    }
    particle.x = particle.x + particle.vx;
    particle.y = particle.y + particle.vy;
    if (
      particle.x > canvas.offsetWidth - particleSize ||
      particle.x < particleSize
    )
      particle.vx = -particle.vx;
    if (
      particle.y > canvas.offsetHeight - particleSize ||
      particle.y < particleSize
    )
      particle.vy = -particle.vy;
  }
  window.requestAnimationFrame(animate);
};
