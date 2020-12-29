
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
	emptyGlass=loadImage("images/empty glass.jpg");
	filledGlass=loadImage("images/filled glass.jpg");
	gameEnded=loadImage("images/game ended button.png");
	gameStarted=loadImage("images/game started button.png");
	Ready=loadImage("images/ready button.png");

	splash=loadImage("images/splash.jpg");
	
	water=loadImage("images/water(smile).jpg");
	car=loadImage("images/car.jpg");
	garden=loadImage("images/garden.jpg");
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Objects Here.
tap1=new tap(100,100);
tap2=new tap(200,100);
tap3=new tap(300,100);
tap4=new tap(400,100);
tap5=new tap(500,100);
var rand=random(1,5);
switch(rand){
	case 1: drop1=new drop(tap1.x,tap1.y,20);
	break;
	case 2: drop2=new drop(tap2.x,tap2.y,20);
	break;
	case 3: drop3=new drop(tap3.x,tap3.y,20);
	break;
	case 4: drop4=new drop(tap4.x,tap4.y,20);
		break;
		case 5: drop5=new drop(tap5.x,tap5.y,20);
		break;
		default:
			break;
}

ground1=new ground(400,390,800,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  tap1.display();
  tap2.display();
  tap3.display();
  tap4.display();
  tap5.display();
  ground1.display();
  drop1.display();
  drop2.display();
  drop3.display();
  drop4.display();
  drop5.display();
  
  drawSprites();
 
}



