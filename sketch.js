
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    
	
	//Create the Bodies Here.

	Dust1= new Dustbin(600,680,200,20);
	Dust2=new Dustbin(500,615,20,100);
    Dust3=new Dustbin(700,615,20,100);

	
	ball=new Paper(50,350,50,50);

	ground=new Ground(400,690,800,30);
	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
  ball.display();
  ground.display();
   Dust1.display();
   Dust2.display();
   Dust3.display();
  //ellipseMode(RADIUS);
  keyPressed();
  
  

  
  
  
  
}
function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-20});

	}



}
