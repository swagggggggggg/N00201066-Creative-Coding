class Ball{
    constructor(x, y, r, c, vx, vy){
    // constructor(x, y, r, coloR, coloG, coloB, vx, vy){
    // constructor(x, y, r, vx, vy) {
        this.x= x;
        this.y= y;
        this.r= r;

        this.c= c;

        // this.coloR= coloR;
        // this.coloG= coloG;
        // this.coloB= coloB;

        this.vx= vx;
        this.vy= vy;
    }

    render(){
        // fill(255); 
        fill(this.c);
        // fill(this.coloR, this.coloG, this.coloB);

        noStroke();
        ellipse(this.x, this.y, this.r*2);
    }

    move(){
        this.x= this.x+ this.vx;
        this.y= this.y+ this.vy;
    }

    bounce() {
        if (this.y >= height - this.r) {
            this.y = height - this.r;
            this.vy *= -1;
        } else if (this.y <= 0 + this.r) {
            this.y = 0 + this.r;
            this.vy *= -1;
        }

        if (this.x >= width - this.r) {
            this.x = width - this.r;
            this.vx *= -1;
        } else if (this.x <= 0 + this.r) {
            this.x = 0 + this.r;
            this.vx *= -1;
        }
    }

    distance(x1, y1, x2, y2) {
        this.dx= x1-x2;
        this.dy= y1-y2;

        let distance= Math.sqrt(this.dx*this.dx + this.dy+this.dy);
        return distance;
    }

    collide() {
        let d= this.distance(balls[0].x, balls[0].y, balls[1].x, balls[1].y)
        if(d < balls[0].r+balls[1].r){
            console.log("BOOM");
            text("balls have collided :0", width/6*4, height/10);
        }
    }
}