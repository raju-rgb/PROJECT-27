
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1 , bob2, bob3, bob4, bob5
var roof1
var world , engine


function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
  world = engine.world;

   //Create the Bodies Here.
   roof1 = new Roof(305,100,500,30)
   bob1 = new Bob(450,600,40)
   bob2 = new Bob(530,600,40)
   bob3 = new Bob(610,600,40)
   bob4 = new Bob(690,600,40)
   bob5 = new Bob(770,600,40)
   rope1 = new Rope(bob1.body, roof1.body, 140,110)
   rope2 = new Rope(bob2.body, roof1.body, 220,110)
   rope3 = new Rope(bob3.body, roof1.body, 300,110)
   rope4 = new Rope(bob4.body, roof1.body, 380,110)
   rope5 = new Rope(bob5.body, roof1.body, 460,110)
 // line (bob1.body.position.x, bob1.body.position.y, rope1.body.position.x, rope1.body.position.y)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("red");
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display()
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position, {x:-750,y:0})
}
}
