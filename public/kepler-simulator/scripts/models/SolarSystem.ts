import canvas, { fps, scale } from "../main.js";

import { Orbit } from "./Orbit.js";
import { Planet } from "./Planet.js";

export class SolarSystem {
  private readonly ctx: CanvasRenderingContext2D;
  private Orbits: Orbit[] = [];

  private t: number = 1
  private tpf: number = 100000;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;

  }

  private updateIDs(): void {
    this.Orbits.sort((a, b) => a.radiusA - b.radiusA);

    for (let i = 0; i < this.Orbits.length; i++)
      this.Orbits[i].planet !== undefined
        ? this.Orbits[i].planet!._id = i
        : void 0;

  }

  public createOrbit(orbit: Orbit) {
    this.Orbits.push(orbit);

    this.updateIDs();
  }

  public deleteOrbit(id: number) {
    this.Orbits = this.Orbits.filter((_, i) => i !== id);

    this.updateIDs();
  }

  private createSun(radiusA: number, radiusB: number): void {
    this.ctx.shadowBlur = 6;
    this.ctx.shadowColor = "#FA2705";

    this.ctx.beginPath()
    this.ctx.arc(
      canvas.width / 2 - Math.sqrt(Math.sqrt(radiusA * scale) + Math.sqrt(radiusB * scale)),
      canvas.height / 2,
      5 * scale / 2,
      0,
      2 * Math.PI
    );
    this.ctx.fillStyle = "#FA2705";
    this.ctx.fill()

    this.ctx.shadowBlur = 0;
  }

  private requestAnimation(): void {  
    if (!this.Orbits.length) return;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.strokeStyle = "#fff";

    this.createSun(this.Orbits[0].radiusA, this.Orbits[0].radiusB);

    for (const orbit of this.Orbits) {
      if (orbit.planet === undefined) continue;

      const planets: Planet[] = [];

      for (let i = 0; i < this.Orbits.length; i++)
        planets.push(this.Orbits[i].planet!)

      orbit.updateAnimation(this.ctx);
      orbit.planet.updatePositions(this.t, this.tpf, planets);
      orbit.planet.updateAnimation(this.ctx, Math.sqrt(orbit.radiusA), Math.sqrt(orbit.radiusB));

      this.t += this.tpf
    }

  }

  public updateAnimation(): void {
    setInterval(
      (): number => requestAnimationFrame(this.requestAnimation.bind(this, canvas)),
      1000 / fps * 30
    );
  }
}