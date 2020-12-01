class ground{
    constructor(x,y,width,height){
        var o={
           isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,width,height,o)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        
       
     rectMode(CENTER)
     fill("brown")
        rect(this.body.position.x,this.body.position.y,this.width,this.height)


    }
}