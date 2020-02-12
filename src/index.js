let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext("2d");

const game_width = 800;
const game_height = 600;

ctx.clearRect(0, 0, 800, 600);

ctx.fillstyle = `#f00`;
ctx.fillRect(0, 580, 800, 20);

ctx.fillRect(100, 560, 20, 20);
