
import {Whell} from "./class/WheelOfFortune.js";
const canvas = document.getElementById('screen') as HTMLCanvasElement;
const ctx=canvas.getContext('2d')!;
canvas.width=512;
canvas.height=512;

ctx.fillStyle='#000';
ctx.fillRect(0,0,512,512);
let w=new Whell(canvas);
w.show(ctx);