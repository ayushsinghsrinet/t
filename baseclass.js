class baseclass{
    constructor(x,y,width,height,angle){
        var opt={
            restitution:0.6,
            friction:0.5,
           density:1,
        // isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,opt)
        this.width=width;
        this.height=height;
        this.image=loadImage("base.png")
       
        World.add(world,this.body)
    }
    display(){
        fill(255)
        var angle=this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y)
     rotate(angle)
     imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
pop()

    }
}