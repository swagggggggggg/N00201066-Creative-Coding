class Launcher {
    constructor(x,y){
        this.pos= createVector(x,y);
        this.direction= 1;

        this.pointerAngle= -PI/2;
    }

    render(){
        push()
        translate(this.pos.x, this.pos.y);
        noStroke();
        fill(100, 0, 200);
        rectMode(CENTER);
        rect(0, 0, launcherWidth, launcherHeight);

        rotate(this.pointerAngle);
        fill(190, 60, 255);
        rectMode(CORNER);
        rect(-5, -5, 40, 10);

        pop()
    }

    animate(){
        if(this.pos.x < 0 + launcherWidth/2 || this.pos.x > 500 - launcherWidth/2){
            this.direction *= -1;
        }

        this.pos.x += this.direction;
    }

    RL(direction){
        this.direction= direction;
    }
}