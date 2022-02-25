import canvas, { scale } from "../main.js";

import { Planet } from "./planets.js";

export class SolarSystem {
  private ctx: CanvasRenderingContext2D;

  public fps: 120 | 60 | 30 | 15 = 60;
  public planets: Planet[] = [];

  public sunColor: string = "#FA2705";
  public sunSize: number = 5;

  private rA: number;
  private rB: number;
  private a: number;

  constructor(ctx: CanvasRenderingContext2D, rA: number, rB: number, a: number, color?: string, size?: number) {
    this.ctx = ctx;

    this.rA = rA
    this.rB = rB
    this.a = a
  
    this.planets.push(new Planet(rA, rB, a))

    color ? (this.sunColor = color) : void 0;
    size ? (this.sunSize = size) : void 0;
  }

  private createSun() {
    this.ctx.shadowBlur = 6;
    this.ctx.shadowColor = this.sunColor;

    this.ctx.beginPath()
    this.ctx.arc(
      canvas.width / 2 - Math.sqrt(Math.sqrt(this.rA) + Math.sqrt(this.rB)) * scale,
      canvas.height / 2,
      this.sunSize * scale / 2,
      0,
      2 * Math.PI
    );
    this.ctx.fillStyle = this.sunColor;
    this.ctx.fill()

    this.ctx.shadowBlur = 0;
  }

  private updateAnimation(): void {
    this.ctx.strokeStyle = "#fff";
  
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.createSun();

    for (const planet of this.planets) 
      planet.start(this.ctx);
  }

  public startAnimation(): void {
    setInterval(
      (): number =>
        requestAnimationFrame(this.updateAnimation.bind(this, canvas)),
      1000 / this.fps
    );
  }
}
