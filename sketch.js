var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle
var plinkos = [];
var divisions = [];

var count=0
var gameState= "play"

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",20,540)
  text("500",100,540)
  text("500",180,540)
  text("500",260,540)
  text("100",340,540)
  text("100",420,540)
  text("200",500,540)
  text("200",580,540)
  text("200",660,540)
  text("200",740,540)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if (count>4){
     gameState="end"
   }
   stroke("yellow")
   line(0,500,800,500)
   if(particle!=null)
   {
     particle.display();
     if (particle.body.position.y>760)
     {
       if (particle.body.position.x<320)
       {
         score=score+500;
         particle=null;

       }
       else if (particle.body.position.x<500)
       {
         score=score+100;
         particle=null;

       }
      else if (particle.body.position.x<780)
       {
         score=score+200;
         particle=null;

       }
     }
   }
}
function mousePressed(){ 
  if (gameState!=="end"){
  particle=new Particle(random(width/2-30, width/2+30), 10,10);
  }
  count = count+1
}