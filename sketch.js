
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  	
 	 var ball_options = {
    restitution: 0.95
  }

  	ball = Bodies.circle(200,100,20,ball_options);
  	World.add(world,ball);
	ground=new Ground(width/2,670,width,20)
  	leftSide=new Ground(1100,600,20,120)
	rightSide=new Ground(1200,600,20,120)
	Engine.run(engine);
	rectMode(CENTER);
	key_pressed()
}


function draw() {
  background(51);
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
  ground.display()
  leftSide.display()
  rightSide.display()
} 
function key_pressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},10)
	}
}



