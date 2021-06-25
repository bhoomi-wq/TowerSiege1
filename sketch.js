const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground1, ground2, ground3;
var polygon1,slingshot;
var BlockBlue1, BlockBlue2, BlockBlue3, BlockGreen1, BlockBlue5, BlockBlue6, BlockBlue7, BlockBlue8;
BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;
BlockYellow1, BlockYellow2, BlockYellow3, BlockYellow4, BlockYellow5, BlockYellow6, BlockYellow7;
BlockGreen1, BlockGreen2;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  // make to stable blocks
  ground1 = new Ground(600,height,1200,20);
  ground2 = new Ground (390,300,250,20);
  ground3 = new Ground (650,200,150,20);

  //First stage (top)
  BlockGreen1 = new GreenBox(388, 150, 30, 40);

  //First stage (first level)
  BlockBlue1 = new Box(360, 190, 30, 40);
  BlockBlue2 = new Box(388, 190, 30, 40);
  BlockBlue3 = new Box(410, 190, 30, 40);

  //First stage (second level)
  BlockPink1 = new PinkBox(330, 230, 30, 40);
  BlockPink2 = new PinkBox(360, 230, 30, 40);
  BlockPink3 = new PinkBox(390, 230, 30, 40);
  BlockPink4 = new PinkBox(410, 230, 30, 40);
  BlockPink5 = new PinkBox(440, 230, 30, 40);

  //First stage (third level)
  BlockYellow1 = new YellowBox(310, 270, 30, 40);
  BlockYellow2 = new YellowBox(330, 270, 30, 40);
  BlockYellow3 = new YellowBox(360, 270, 30, 40);
  BlockYellow4 = new YellowBox(390, 270, 30, 40);
  BlockYellow5 = new YellowBox(410, 270, 30, 40);
  BlockYellow6 = new YellowBox(440, 270, 30, 40);
  BlockYellow7 = new YellowBox(480, 270, 30, 40);

  //Second stage (third level)
  BlockBlue5 = new Box(610, 180, 30, 40);
  BlockBlue6 = new Box(640, 180, 30, 40);
  BlockBlue7 = new Box(660, 180, 30, 40);
  BlockBlue8 = new Box(690, 180, 30, 40);

  //Second stage (second level)
  BlockPink6 = new PinkBox(640, 150, 30, 40);
  BlockPink7 = new PinkBox(660, 150, 30, 40);

  //Second stage (top)
  BlockGreen2 = new GreenBox(650, 130, 30, 40);

  polygon1 = new Poly(110,100,30,30);
  slingshot = new SlingShot(polygon1.body,{x:70,y:90});

  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  
  ground1.display();
  ground2.display();
  ground3.display();

  BlockBlue1.display();
  BlockBlue2.display();
  BlockBlue3.display();
  BlockGreen1.display();
  BlockGreen2.display();
  BlockBlue5.display();
  BlockBlue6.display();
  BlockBlue7.display();
  BlockBlue8.display();
  BlockPink1.display();
  BlockPink2.display();
  BlockPink3.display();
  BlockPink4.display();
  BlockPink5.display();
  BlockPink6.display();
  BlockPink7.display();
  BlockYellow1.display(); 
  BlockYellow2.display();
  BlockYellow3.display(); 
  BlockYellow4.display(); 
  BlockYellow5.display();
  BlockYellow6.display(); 
  BlockYellow7.display();
  polygon1.display();
  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon1.body);
  }
}