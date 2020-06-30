const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,plinko1=[],particle1=[],divisionheight=300;


var engine,world;
function setup() {
  createCanvas(500,600);
  engine = Engine.create();
  world = engine.world;

ground1=new ground(250,height,width,20)
 
 
}

function draw() {
  background("white");
  Engine.update(engine);
 var  division1=[];
  for(var k=0;k<=width;k=k+80){

division1.push(new division(k,height-divisionheight/2))


  }
if(frameCount%30===0){




particle1.push(new particle(random(width/2+150,width/2-150),10,8))





}

for(var j=40;j<width;j=j+50){


plinko1.push(new plinko(j,75))




}
for(var j=15;j<width-10;j=j+40){


  plinko1.push(new plinko(j,175))
  
  
  
  
  }

for(var j=0;j<particle1.length;j++){



particle1[j].display();

}

for(var k=0;k<division1.length;k++){



  division1[k].display();
  
  }
  for(var k=0;k<plinko1.length;k++){



    plinko1[k].display();
    
    }




  ground1.display();
  
}