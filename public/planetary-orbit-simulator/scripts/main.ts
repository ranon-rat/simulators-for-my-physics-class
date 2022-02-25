import { SolarSystem } from "./models/solar_system.js";

const canvas = document.getElementById("screen") as HTMLCanvasElement;
export let scale: number = 10;

((new SolarSystem(canvas.getContext("2d")!, 100, 50, 0)).startAnimation());

export default canvas;