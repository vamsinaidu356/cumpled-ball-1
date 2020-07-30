
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ball;
var ground;
var ground2,ground3,ground4;
function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball();
	ground = new Ground(400,600,1200,15);
	ground2 = new Ground(800,550,15,80);
	ground3 = new Ground(650,550,15,80);
	ground4 = new Ground(730,600,150,25);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ball.display();
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.body.applyForce(ball.body.position,{x=85,y=-85});
	}

}



