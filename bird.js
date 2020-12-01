class bird extends baseclass{
constructor(x,y,width,height){
    super(x,y,width,height)
    this.image=loadImage("bird.png")
}
display(){
    //this.body.position.x=mouseX
    //this.body.position.y=mouseY
    super.display()
}
}