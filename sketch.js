const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

const Constraint=Matter.Constraint;

var engine,world;

var ball;
var box1;
var backimg;
var ground1;
var log1,log2;
var clog;
var cup1;
var cup2,cup3,cup4,cup5,cup6,cup7,cup8,cup9,cup10,cup11,cup12,cup13,cup14,cup15,cup16,cup17,cup18,cup19,cup20,cup21;
var ball1;

function preload(){
backimg=loadImage("bg.png")
}
function setup(){
    var canvas=createCanvas(1200,600)
    engine=Engine.create()
    world=engine.world;
    ground1=new ground(600,590,1200,40)
ball=new bird(200,200,40,40)
box1=new box(200,200,40,40)
//log1=new b(850,560,600,20)
cup1=new cup(590,505,90,90);
cup2=new cup(690,505,90,90);
cup3=new cup(790,505,90,90);
cup4=new cup(890,505,90,90);
cup5=new cup(990,505,90,90);
cup6=new cup(1090,505,90,90);
cup7=new cup(640,405,90,90);
cup8=new cup(740,405,90,90);
cup9=new cup(840,405,90,90);
cup10=new cup(940,405,90,90);
cup11=new cup(1040,405,90,90);
cup12=new cup(690,305,90,90);
cup13=new cup(790,305,90,90);
cup14=new cup(890,305,90,90);
cup15=new cup(990,305,90,90);
cup16=new cup(730,205,90,90);
cup17=new cup(830,205,90,90);
cup18=new cup(930,205,90,90);
cup19=new cup(770,105,90,90);
cup20=new cup(892,105,90,90);
cup21=new cup(840,10,80,80);
clog=new slingshot(ball.body,{x:100,y:200});


var options = {
  'restitution':0.5,
  'friction':1.0,
  'density':10
}


ball1=Bodies.circle(200,200,10,options)
World.add(world,ball1)

}
function draw(){
  background(backimg)
    Engine.update(engine)
    
var pos=ball1.position;
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,10,10)

    ground1.display();
  ball.display();
  clog.display();
  box1.display();
//log1.display();
cup1.display();
cup2.display();
cup3.display()
cup4.display()
cup5.display();
cup6.display();
cup7.display();
cup8.display();
cup9.display();
cup10.display();
cup11.display();
cup12.display();
cup13.display();
cup14.display();
cup15.display();
cup16.display();
cup17.display();
cup18.display();
cup19.display();
cup20.display();
cup21.display();
ball.display();
///log1.display();

kep();
drawSprites();
}
function kep(){
  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(ball1,{x: ball1.position.x, y:ball1.position.y},{x:5,y:-5})
    }
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}


function  mouseReleased(){
  clog.fly()
}

