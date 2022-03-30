
import { Planet } from "./models/Planet.js";
import { SolarSystem } from "./models/SolarSystem.js";

const canvas = document.getElementById("screen") as HTMLCanvasElement;

export let fps: number = 60;
export let scale: number = 0.5;

const system = new SolarSystem(canvas.getContext("2d")!);
system.show(canvas)
window.addEventListener("resize",()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight
})



