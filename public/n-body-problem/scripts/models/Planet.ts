import { scale } from "../main.js";



export class Planet {
  G:number= 6.67e-11;
  public d: number = 0;


velX: number = 0;
   velY: number = 0;
   velZ: number = 0;
  color: string = "#ffffff";
  mass: number;
  x: number = 0;
  y: number = 0;
  z: number = 0;
  id: number = 0;

  constructor(
    id: number,
    x: number, y: number,
    mass: number,
    color?: string
  ) {


    this.mass = mass;
    this.x = x;
    this.y = y
    this.id = id;

    color !== undefined ? (this.color = color) : void 0;
  }

  public getAcceleration(planets: Planet[]): { x: number, y: number, z: number } {
    var acs = { x: 0, y: 0, z: 0 }

    for (let i = 0; i < planets.length; i++) {
      if (i === this.id) continue;

      let dsx = planets[i].x - this.x;
      let dsy = planets[i].y - this.y;
      let dsz = planets[i].z - this.z;

      const module =
        ((dsx ** 2) +
          (dsy ** 2) +
          (dsz ** 2)) **
        -1.5;

      acs.x += this.G * (dsx * module) *planets[i].mass;
      acs.y += this.G * (dsy * module) * planets[i].mass;
      acs.z += this.G * (dsz * module) * planets[i].mass;
    }

    return acs;
  }

  public updatePositions(t: number, tpf: number, planets: Planet[]): void {
    const acceleration = this.getAcceleration(planets);
    console.log(acceleration)

    this.velX += (tpf / 2) * acceleration.x;
    this.velY += (tpf / 2) * acceleration.y;
    this.velZ += (tpf / 2) * acceleration.z;

    this.x += t * this.velX
    this.y += t * this.velY
    this.z += t * this.velZ
  }

  public updateAnimation(
    ctx: CanvasRenderingContext2D,
    canvas:HTMLCanvasElement

  ): void {
    ctx.beginPath()
  

    ctx.fillStyle = this.color;
    ctx.ellipse(
      (canvas.width / 2 + this.x) * scale,
      (canvas.height / 2 + this.y) * scale,
      10, 10,
      0,
      0,
      2 * Math.PI
    );
  
    ctx.fill();
  }
}
