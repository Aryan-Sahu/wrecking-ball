const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {

  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
roof = new Roof(150,100,300,20)
ground1= new Roof(400,390,800,20)
ball= new Ball(250,200,65)
chain = new Rope(ball.body,{x:250,y:100})
building1= new Building(500,380,150,10)
building2= new Building(450,380,10,70)
building3= new Building(550,380,10,70)
building4= new Building(500,310,170,10)
building5= new Building(420,270,10,70)
building6= new Building(580,270,10,70)

building7= new Building(500,240,170,10)
  
}

function draw() {
  background(0); 
  Engine.update(engine); 
roof.display()
ground1.display()
ball.display()
chain.display()
building1.display()
building2.display()
building3.display()
building4.display()
building5.display()
building6.display()
building7.display()
}
function keyPressed(){
  console.log("inside")
  if(keyCode===UP_ARROW){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:-500,y:-500})
      console.log("done")
  }
}
//function mouseDragged(){
 // Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
//}