class slingshot{
    constructor(bodyA,pointB){
var opt={
bodyA:bodyA,
pointB:pointB,
stiffness:0.5,
lenght:20,

}
this.sling=Constraint.create(opt)
World.add(world,this.sling)

    }
fly(){
    this.sling.bodyA=null;
}


display(){
    if (this.sling.bodyA) {
var bodya=this.sling.bodyA.position
var pointb=this.sling.pointB
strokeWeight(3)
line(bodya.x,bodya.y,pointb.x,pointb.y)

}

}

}