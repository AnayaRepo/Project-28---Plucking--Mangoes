
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, stone, boy;
var mango1, mango2, mango3, mango3, mango4, mango5,mango6, mango7;
var elastic;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(625, 445, 350, 500);
	ground = new Ground(400, 685, 800, 30);
	boy = new Boy(200, 625, 120, 180);
	stone = new Stone(200, 580, 20);
	elastic = new Elastic(stone.body,{x:165, y:580});
	mango1 = new Mango(600, 345, 25);
	mango2 = new Mango(680, 255, 25);
	mango3 = new Mango(625, 435, 25);
	mango4 = new Mango(550, 400, 25);
	mango5 = new Mango(730, 380, 25);
	mango6 = new Mango(700, 330, 25);
	mango7 = new Mango(570, 285, 25);

	Engine.run(engine);
  
}


function draw() {
	background("lightyellow");
  	Engine.update(engine);
  
  	tree.display();
	ground.display();
	boy.display(); 
	stone.display();

	elastic.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	drawSprites();
	  
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
 
 
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    elastic.fly();
}

function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}

}



