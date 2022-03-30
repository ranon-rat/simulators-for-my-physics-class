import { Orbit } from "./models/Orbit.js";
import { Planet } from "./models/Planet.js";
import { SolarSystem } from "./models/SolarSystem.js";

const canvas = document.getElementById("screen") as HTMLCanvasElement;

export let fps: number = 60;
export let scale: number = 10;

const system = new SolarSystem(canvas.getContext("2d")!);
system.updateAnimation();

const planet = new Planet(0, 5, 5, 0, 20);
const orbit = new Orbit(40, 30, 0);
orbit.setPlanet(planet);

system.createOrbit(orbit);


export default canvas;
