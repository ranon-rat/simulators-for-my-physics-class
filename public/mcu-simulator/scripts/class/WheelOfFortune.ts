class cabine {}

function clear(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, 512, 512);
}

export class Whell {
  angularVelocity: number = 12; //hmm esto es por segundos asi que solo deberia de dividir esto entre los frames al sumar
  x: number = 0;
  y: number = 0;

  radius: number = 100;
  framesPerSecond: number = 20;
  angle: number = 0;
  constructor(canvas: HTMLCanvasElement) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }
  show(ctx: CanvasRenderingContext2D) {
    clear(ctx);
    ctx.strokeStyle = "#fff";
    ctx.fillStyle = "#fff";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    for (let i = 360 / 10; i <= 360; i += 360 / 10) {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(
        this.x + Math.cos(((i + this.angle) * Math.PI) / 180) * this.radius,
        this.y + Math.sin(((i + this.angle) * Math.PI) / 180) * this.radius
      );
      ctx.stroke();
      console.log(i);
    }
    this.angle += this.angularVelocity / this.framesPerSecond;
    setTimeout(
      window.requestAnimationFrame.bind(null, this.show.bind(this, ctx)),
      1000 / this.framesPerSecond
    );
  }
}
