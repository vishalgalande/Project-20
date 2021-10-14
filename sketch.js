const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,lground,leftwall,rightwall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:1.2,
		friction:0
	}
	ball = Matter.Bodies.circle(10,10,5,ball_options);
	World.add(world, ball);

	ground = new Ground(400,600,800,20);
	lground = new Ground(3,600,800,20);
	leftwall = new Ground(650,550,20,120);
	rightwall = new Ground(500,550,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.show()
  rightwall.show()
  leftwall.show()
  ellipse(ball.position.x, ball.position.y,20)

  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:4.7,y:-3.29})
	}
}



