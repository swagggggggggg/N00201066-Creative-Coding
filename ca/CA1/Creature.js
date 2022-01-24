class Creature {
    constructor(x,y){
        this.pos= createVector(x,y);
        this.velocity= creatureVelocity;
    }

    render(){
        push()
        translate(this.pos.x, this.pos.y);
        image(creatureImg, 0, 0, creatureWidth, creatureHeight);
        // fill(200, 200, 100);
        // ellipse(this.pos.x, this.pos.y, creatureWidth, creatureHeight);
        pop()
    }

    animate(){
        this.pos.x += this.velocity;
    }

    drop(){
        this.pos.y += params.descend;
        this.velocity *= -1;
    }
}