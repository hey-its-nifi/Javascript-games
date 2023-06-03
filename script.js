let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1'); //holds reference to actual html canvas created in index.html
const ctx = canvas.getContext('2d'); //gives access to a completely dif set of drawing methods


const CANVAS_WIDTH = canvas.width = 600; 
const CANVAS_HEIGHT = canvas.height = 600; 

const playerImage = new Image(); //built in img class constructor
playerImage.src = '/Images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

let gameFrame =0; //control the speed
let staggerFrames = 5;//slow down the animation

const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'gethit',
        frames: 4,
    }
];

animationStates.forEach((state, index) => { //state variable represents each element in the array as we cycle throught it
    let frames = {
        loc: [],
    }

    for(let j=0; j<state.frames; j++){ //cal position x and position y for each frame as it cycles through the sprite sheet
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);


function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT); //clear old paint from canvas between every animation frame
    let position = Math.floor(gameFrame/ staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);//to draw our image to the canvas we use drawImage() first para is our image, next our position    

    //cycle between animation frames vertically    

    gameFrame++;

    requestAnimationFrame(animate); //creates an animation loop
};

animate();