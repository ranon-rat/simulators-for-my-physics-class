import { fps } from "../main.js";


import { Planet } from "./Planet.js";

export class SolarSystem {
  private readonly ctx: CanvasRenderingContext2D;
  public planets: Planet[] = [];

  private t: number = 1
  private tpf: number = 1000;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    for (let i = 0; i < 3; i++) {
      let p = new Planet(i, Math.random() * 1000, Math.random() * 1000, (1000) *Math.random())
      this.planets.push(p)
    }

  }

  public show(canvas: HTMLCanvasElement): void {



    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.strokeStyle = "#fff";





    for (let i = 0; i < this.planets.length; i++) {


      this.planets[i].updatePositions(this.t, this.tpf, this.planets);
      this.planets[i].updateAnimation(this.ctx, canvas);
    }
    this.t += this.tpf
    setTimeout(() => {
      requestAnimationFrame(this.show.bind(this, canvas))
    }, 1000 / fps);

  }


}