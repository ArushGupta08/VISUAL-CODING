const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ob1,ground,ball;
function setup(){
  createCanvas(600,600)
engine=Engine.create();
world=engine.world;
var option={
  isStatic:true
}
ob1=Bodies.rectangle(400,400,10,50,option);
World.add(world,ob1);
console.log(ob1);
var groundoptions={
  isStatic:true
}
ground=Bodies.rectangle(300,580,600,10,groundoptions)
World.add(world,ground);
console.log(ground);
var balloptions={
  isStatic:true
}
ball=Bodies.circle(50,500,40,40,balloptions);
World.add(world,ball)
console.log(ball)
}
function draw(){
  background(0,0,0)
  Engine.update(engine)
  rectMode(CENTER)
  rect(300,300,50,50)
rect(ob1.position.x,ob1.position.y,10,50);
rect(ground.position.x,ground.position.y,600,10);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40,40);
}