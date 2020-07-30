class Ball{
    constructor(){
        this.body = Bodies.circle(100,100,25)
        World.add(world,this.body)

    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,25)

    }
}