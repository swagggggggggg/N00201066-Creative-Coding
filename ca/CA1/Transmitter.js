class Transmitter{
    constructor(x, y){
        this.position= createVector(x, y);
        this.particles= []
        this.howMany= 0;
    }

    createParticles() {
        if (this.howMany < 30) {
            for (let p= 0; p <1; p++) {
                this. particles.push(new Particle(this. position.x, this.position.y))
                this.howMany++;
            }
        }
    }

    refresh(){
        this.particles.forEach(particle => {
            let environmentalPressure = createVector(random(-2, 2), random(-2, 2));
            particle.applyForce(environmentalPressure);
            particle.refresh();
        });

        for (let p= this.particles.length - 1; p >= 0; p--){
            if (this.particles[p].completed()){
                this.particles.splice(p, 1);
            }
        }
    }

    render(){
        this.particles.forEach(particle => {
            particle.render();
        })
    }


}