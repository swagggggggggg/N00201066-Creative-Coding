class Projectile {
    constructor(x, y, a){
        this.pos= createVector(x,y);
        this.projectileAngle= a;
    }

    render(){
        push()
        translate(this.pos.x, this.pos.y);
        noStroke();
        fill(255);
        ellipse(0, 0, params.projectileWidth, params.projectileHeight);
        pop()
    }

    animate(){
        this.pos.x += Math.cos(this.projectileAngle)*projectileVelocity;
        this.pos.y += Math.sin(this.projectileAngle)*projectileVelocity;
    }

    collides(creature){
        let space= (p5.Vector.sub(this.pos, creature.pos)).mag();
        if (space < params.projectileHeight/2 + creatureHeight/2){
            return true;
        } else {
            return false;
        }
    }
}