let balls= []

let speed= 15
let angle0= 25
let angle1= 47

for(let i=0; i<2; i++){
        balls.push(new Ball())
}

function setup() {
    createCanvas(300, 300);
    background(0);
    angleMode(DEGREES);

    balls[0].x= 200;
    balls[0].y= 240;
    balls[0].r= 20;
    balls[0].c= 125;

    balls[0].vx= speed*sin(angle0);
    balls[0].vy= speed*cos(angle0);

    balls[1].x= 100;
    balls[1].y= 240;
    balls[1].r= 20;
    //the collision text inherits it's colour from this value
    balls[1].c= 255;
    balls[1].vx= speed*sin(angle1);
    balls[1].vy= speed*cos(angle1);
}

function draw() {
    background(130, 30, 80);

    for(let i=0; i<balls.length; i++) {
        balls[i].render()
        balls[i].move()
        balls[i].bounce()
        balls[i].collide()
    }
}

console.log(balls)
