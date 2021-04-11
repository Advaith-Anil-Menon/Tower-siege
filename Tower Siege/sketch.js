const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var polygon1;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(170, 200, 320, 20);

  //first level
  BlockBlue1 = new Box(200, 182, 20, 20);

  BlockBlue2 = new Box(220, 182, 20, 20);

  BlockBlue3 = new Box(240, 182, 20, 20);

  BlockBlue4 = new Box(260, 182, 20, 20);

  BlockBlue5 = new Box(280, 182, 20, 20);

  BlockBlue6 = new Box(300, 182, 20, 20);

  BlockBlue7 = new Box(320, 182, 20, 20);

  //second level
  RedBlock1 = new OrangeBoxy(201, 2, 20, 20);

  RedBlock2 = new OrangeBoxy(220, 2, 20, 20);

  RedBlock3 = new OrangeBoxy(240, 2, 20, 20);

  RedBlock4 = new OrangeBoxy(260, 2, 20, 20);

  RedBlock5 = new OrangeBoxy(280, 2, 20, 20);

  RedBlock6 = new OrangeBoxy(300, 2, 20, 20);

  RedBlock7 = new OrangeBoxy(320, 2, 20, 20);


  RedBlock8  = new RedBoxy(202, 182, 20, 20);

  RedBlock9  = new RedBoxy(220, 182, 20, 20);

  RedBlock10 = new RedBoxy(240, 182, 20, 20);

  RedBlock11 = new RedBoxy(260, 182, 20, 20);

  RedBlock12 = new RedBoxy(280, 182, 20, 20);

  RedBlock13 = new RedBoxy(300, 182, 20, 20);

  RedBlock14 = new RedBoxy(320, 182, 20, 20);

  polygon_1 = new poly(110, 100, 20, 20);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();

  RedBlock1.display();

  RedBlock2.display();

  RedBlock3.display();

  RedBlock4.display();

  RedBlock5.display();

  RedBlock6.display();

  RedBlock7.display();

  OrangeBlock1.display ();

  OrangeBlock2.display ();

  OrangeBlock3.display ();

  OrangeBlock4.display ();

  OrangeBlock5.display ();

  RedBlock6.display ();

  RedBlock7.display ();

  RedBlock8.display ();

  RedBlock9.display ();

  RedBlock10.display();

  RedBlock11.display();

  RedBlock12.display();

  RedBlock13.display();

  RedBlock14.display();

  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

