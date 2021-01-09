
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,paperBall,Bin;
var wall1,wall2,wall3;

function preload(){
  dbIMAGE = loadImage("images/dustBin.png");
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }

	//Create the Bodies Here.
   paperBall = new Paper(100,445,40);
   //Bin = new DustBin(800,370,150,120);
    ground1 = new Ground(600,450,1300,20);
    wall1=Bodies.rectangle(800,460,150,20,options);
    World.add(world,wall1);
    wall2=Bodies.rectangle(720,370,20,150,options);
    World.add(world,wall2);
    wall3=Bodies.rectangle(880,370,20,150,options);
    World.add(world,wall3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paperBall.display();
  ground1.display();
  image(dbIMAGE,720,300,155,150)
  rect(wall1.position.x,wall1.position.y,150,20);
  rect(wall2.position.x,wall2.position.y,20,150);
  rect(wall3.position.x,wall3.position.y,20,150);

  //Bin.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:70,y:-70});
	}
}

