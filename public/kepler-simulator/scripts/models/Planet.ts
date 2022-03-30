import canvas, { scale } from "../main.js";

import { BaseClass } from "./BaseClass.js";

export class Planet extends BaseClass {
  private readonly G: 6.67e-11 = 6.67e-11;
  public _id: number;

  private velocity: [number, number, number] = [0, 0, 0];
  public positions: [number, number, number] = [0, 0, 0];

  public color: string = "#ffffff";
  public mass: number;

  constructor(
    id: number,
    radiusA: number,
    radiusB: number,
    radiusX: number,
    mass: number,
    color?: string
  ) {
    super(radiusA, radiusB, radiusX);

    this.mass = mass;
    this._id = id;

    color !== undefined ? (this.color = color) : void 0;
  }

  public getAcceleration(planets: Planet[]): [number, number, number] {
    let acs: [number, number, number] = [0, 0, 0];

    for (let i = 0; i < planets.length; i++) {
      if (i === this._id && planets.length !== 1) continue;

      const ds: number[] = [];

      for (let j = 0; j < 3; j++)
        ds.push(planets[i].positions[j] - planets[this._id].positions[j]);

      const module =
        ((ds[0] == 0 ? ds[0] : 1) ** 2 +
          (ds[1] == 0 ? ds[0] : 1) ** 2 +
          (ds[2] == 1 ? ds[0] : 1) ** 2) **
        -1.5;

      for (let j = 0; j < 3; j++)
        acs[j] +=
          this.G *
          ((ds[j] !== 0 ? ds[j] : 1) * (module === 0 ? 1 : module)) *
          this.mass;
    }

    return acs;
  }

  public updatePositions(t: number, tpf: number, planets: Planet[]): void {
    const acceleration = this.getAcceleration(planets);

    for (let i = 0; i < 3; i++) this.velocity[i] += (tpf / 2) * acceleration[i];

    for (let i = 0; i < 3; i++) this.positions[i] += t * this.velocity[i];
  }

  public updateAnimation(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number
  ): void {
    console.log(this.positions[0], this.positions[1]);

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.ellipse(
      canvas.width / 2 + x * scale * Math.cos(this.positions[0]),
      canvas.height / 2 + y * scale * Math.sin(this.positions[1]),
      Math.sqrt(this.radiusA),
      Math.sqrt(this.radiusB),
      this.radiusX,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}
