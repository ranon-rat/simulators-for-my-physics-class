const canvas = document.getElementById("screen") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#fff";

// Draw the ellipse
ctx.beginPath();
ctx.ellipse(
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerWidth / 4,
  window.innerHeight / 5,
  0,
  0,
  2 * Math.PI
);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerWidth / 3 - 20,
  window.innerHeight / 4,
  0,
  0,
  2 * Math.PI
);
ctx.stroke();


// Draw the ellipse's line of reflection
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(window.innerWidth, window.innerHeight / 2);
ctx.lineTo(0, window.innerHeight / 2);
ctx.stroke();

// Draw the ellipse's line of reflection
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(window.innerWidth / 2, window.innerHeight);
ctx.lineTo(window.innerWidth / 2, 0);
ctx.stroke();


ctx.shadowBlur = 6;
ctx.shadowColor = "#FA2705"

// Sun
ctx.beginPath();
ctx.arc((window.innerWidth / 3) + 40, window.innerHeight / 2, 25, 0, 2 * Math.PI);
ctx.fillStyle = "#FA2705"
ctx.fill()