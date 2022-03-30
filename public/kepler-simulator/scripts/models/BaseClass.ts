export class BaseClass {
  public radiusA: number;
  public radiusB: number;

  public radiusX: number;

  constructor(radiusA: number, radiusB: number, radiusX: number) {
    this.radiusA = radiusA;
    this.radiusB = radiusB;

    this.radiusX = radiusX;
  }

  public updateAnimation(...params: any): void {
    console.log("How the hell did you get this running?");

  }
}
