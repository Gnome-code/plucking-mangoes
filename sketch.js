
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var lrock, lmango, rock, mango1, mango2, mango3, mango4, mango5, boy1, boy, elastic, tree1, tree;
function preload()
{
	boy = loadImage("Plucking mangoes/boy.png")
	tree = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rock = new Rock(100, 440, 40);
	mango1 = new Mango(630, 320, 40);
	mango2 = new Mango(867, 270, 40);
	mango3 = new Mango(675, 255, 40);
	mango4 = new Mango(725, 260, 40);
	mango5 = new Mango(770, 290, 40);
	elastic = new Elastic(rock.body,{x: 100, y: 440})

	boy1 = createSprite(150,500);
	boy1.addImage(boy);
	boy1.scale=0.1;

	
	tree1 = createSprite(750,340);
	tree1.addImage(tree);
	tree1.scale=0.4;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  rock.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  elastic.display();

  detectcollision(rock,mango1);
  detectcollision(rock,mango2);
  detectcollision(rock,mango3);
  detectcollision(rock,mango4);
  detectcollision(rock,mango5);
}

function keyPressed(){
    if(keyCode === 32){
       elastic.attach(rock.body);
    }
}

function mouseDragged(){
        Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
    elastic.fly();
}
function detectcollision(lrock,lmango){
mangoBodyPosition = lmango.body.position;
rockBodyPosition = lrock.body.position;
var distance = dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
 if(distance <= lmango.radius+lrock.radius){
  Matter.Body.setStatic(lmango.body,false);
 
} 
}