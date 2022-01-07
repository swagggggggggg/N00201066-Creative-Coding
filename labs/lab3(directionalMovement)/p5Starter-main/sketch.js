let arrow, x, y, vx, vy, rotation

let screenWidth= 500
let screenHeight= 500

let speed= 4 
let angle= 60


function setup(){
    createCanvas(screenWidth, screenHeight);
    background(0);
    angleMode(DEGREES);

    arrow= new ArrowUpdated();

    arrow.x= screenWidth/screenWidth;
    arrow.y= screenHeight/screenHeight;
    arrow.c= 180;
    arrow.vx= speed*(sin(angle));
    arrow.vy= speed*(cos(angle));
    arrow.rotation= angle;

    console.log(arrow);
}

function draw(){
    background(225, 30, 150);

    arrow.drawArrow();
    arrow.moveArrow();
    arrow.rainArrow();
}