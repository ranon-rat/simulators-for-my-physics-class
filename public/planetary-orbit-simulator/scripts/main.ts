const canvas = document.getElementById("screen") as HTMLCanvasElement,
  ctx = canvas.getContext("2d")!;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#fff";

class Orbit {
  // Esto equivale a la posicion 0 de "x" y "y" de una recta.
  private posX: number = window.innerWidth / 2;
  private posY: number = window.innerHeight / 2;

  // Esto es para escalar los tamaños
  public scale: number = 30;

  // Esto son las variables para trazar el elipse.
  public radiusA = 25;
  public radiusB = 16;
  public rotation = 0;

  public readonly ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;

    this.ellipse();
    this.lines_of_reflection();
    this.red_sun();
  }

  private lines_of_reflection() {
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
  }

  public ellipse() {
    ctx.beginPath();
    ctx.ellipse(
      this.posX,
      this.posY,
      Math.sqrt(this.radiusA) * this.scale,
      Math.sqrt(this.radiusB) * this.scale,
      this.rotation,
      0,
      2 * Math.PI
    );
    ctx.stroke();
  }

  private red_sun() {
    ctx.shadowBlur = 6;
    ctx.shadowColor = "#FA2705";

    const x = Math.sqrt(this.radiusA - this.radiusB) * this.scale;

    ctx.beginPath();
    ctx.arc(this.posX - x, this.posY, this.scale / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#FA2705";
    ctx.fill();
  }
}

const orbit = new Orbit(ctx);
