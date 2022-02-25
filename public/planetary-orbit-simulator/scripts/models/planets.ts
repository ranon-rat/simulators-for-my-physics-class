import canvas, {scale } from "../main.js";

export class Planet {
  private ctx?: CanvasRenderingContext2D;

  public planetColor: string = "#aaa";
  public planetSize: number = 2;

  public rA: number
  public rB: number
  public a: number = 0

  private startAngle: number = Math.PI;
  private endAngle: number = 0;

  private dateNow = Date.now()
  private currentAngle: any = 0;

  constructor(rA: number, rB: number, a?: number, planetColor?: string, planetSize?: number) {
    this.rA = Math.sqrt(rA) * scale;
    this.rB = Math.sqrt(rB) * scale;

    a ? (this.a = a) : void 0;

    planetColor ? (this.planetColor = planetColor) : void 0;
    planetSize ? (this.planetSize = planetSize) : void 0;
  }

  private createOrbit(): void {
    this.ctx!.strokeStyle = this.planetColor;
    this.ctx!.beginPath();
    this.ctx!.ellipse(
      canvas.width / 2,
      canvas.height / 2,
      this.rA,
      this.rB,
      this.a,
      0,
      2 * Math.PI
    );
    this.ctx!.stroke();
  }

  private createPlanet(x: number, y: number): void {
    this.ctx!.beginPath();
    this.ctx!.arc(
      canvas.width / 2 + x,
      canvas.height / 2 + y,
      this.planetSize * scale / 2,
      0,
      2 * Math.PI
    );
    this.ctx!.fillStyle = this.planetColor;
    this.ctx!.fill();
  }

  public start(ctx: CanvasRenderingContext2D): void {
    this.ctx = ctx;

    this.createOrbit()

    const vector = (this.startAngle - this.endAngle) / 10000
    const elapsed: number = Date.now() - this.dateNow;

    this.dateNow = Date.now();
    this.currentAngle += elapsed * vector;

    this.createPlanet(
      (this.rA * Math.cos(this.currentAngle)),
      (this.rB * Math.sin(this.currentAngle))
    );
  }
}
