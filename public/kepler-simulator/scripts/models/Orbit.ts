import canvas, { scale } from "../main.js";

import { BaseClass } from "./BaseClass.js";
import { Planet } from "./Planet.js";

export class Orbit extends BaseClass {
  public planet?: Planet;

  constructor(radiusA: number, radiusB: number, radiusX: number) {
    super(radiusA, radiusB, radiusX);

  }

  public setPlanet(planet: Planet): void {
    this.planet = planet;

  }

  public updateAnimation(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.ellipse(
      canvas.width / 2,
      canvas.height / 2,
      Math.sqrt(this.radiusA) * scale,
      Math.sqrt(this.radiusB) * scale,
      this.radiusX,
      0,
      2 * Math.PI
    );
    ctx.stroke();

  }
}
