class Ball{
    constructor(x,y,r){

        var stat1 = {
            isStatic : false,
            density : 1,
            frictionAir : 0.1
        }

        this.body = Bodies.circle(x,y,r/2,stat1);
        this.r = r;

        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();



    }



}