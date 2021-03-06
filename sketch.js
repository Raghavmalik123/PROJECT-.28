
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var boy;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var sling;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	boy = new Boy();
	tree =new Tree();
	stone = new Stone();
	sling = new SlingShot(stone.body,{x:95,y:595}); 
	mango1 = new Mango();
	mango2 = new Mango();
	mango3 = new Mango();
	mango4 = new Mango();
	mango5 = new Mango();
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);

  
	background("white")
	fill('red');
	textSize(24);
	text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 200,200);
	ground.display();
	tree.display();
	boy.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	
	sling.display();
  
	

	drawSprites();
   
  }
  
  function mouseDragged(){

    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
  function mouseReleased(){
	  sling.fly();
  }
  function keyPressed(){
	if(keyCode === 32){
	 
	  sling.attach(stone.body);
	}
  }
  