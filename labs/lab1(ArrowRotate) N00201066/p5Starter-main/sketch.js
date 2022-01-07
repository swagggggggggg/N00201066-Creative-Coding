let dx, dy, arrow;

function setup(){
    createCanvas(300, 300);
    background(255, 5, 100);

    arrow= new Arrow(width/2, height/2, 0);
    // console.log(arrow);
}

function draw(){
    background(255, 5, 100);
    angleMode(DEGREES);

    arrow.follow();
    arrow.drawArrow();
}

function keyPressed(){
    console.log(arrow);
}