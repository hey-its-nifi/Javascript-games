
const canvas = document.getElementById('canvas1'); //holds reference to actual html canvas created in index.html
const ctx = canvas.getContext('2d'); //gives access to a completely dif set of drawing methods


const CANVAS_WIDTH = canvas.width = 600; 
const CANVAS_HEIGHT = canvas.height = 600; 

const playerImage = new Image(); //built in img class constructor
playerImage.src = '/Images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

let frameX = 0;
let frameY = 0;


function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT); //clear old paint from canvas between every animation frame
   // ctx.fillRect(50, 50, 100, 100); //position and height
   // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh); //para: image, next 4 : rectangular area you want to cut out from the image, last 4 : where on our destination canvas we want to draw just that cropped out part onto
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteWidth, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);//to draw our image to the canvas we use drawImage() first para is our image, next our position    
    
    if(frameX < 6) frameX++;
    else frameX = 0;

    requestAnimationFrame(animate); //creates an animation loop
};

animate();