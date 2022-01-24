class Particle {
    constructor(x, y) {
        this.pos= createVector(x, y);
        this.velocity= p5.Vector.random2D();
        this.velocity.mult(random(-4, 4));
        this.acc= createVector(0,0);
        this.r= 3;
        this.halflife= 84;
    }

    completed(){
        return (this.halflife < 0)
    }

    applyForce(force){
        this.acc.add(force);
    }

    refresh() {
        this.velocity.add(this.acc);
        this.pos.add(this.velocity);
        this.acc.set(0,0);
        this.halflife -= 7;
    }

    render() {
        noStroke();
        fill(255, 0, 35, this.halflife);
        ellipse(this.pos.x, this.pos.y, this.r * 2)
    }
}