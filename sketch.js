 var ball;
function setup() {
  createCanvas(400,400);
 
  ball=createSprite(200,200,10,10)
 
}




function draw() 

{
  background("babyPink")

  if(keyIsDown(DOWN_ARROW))
  { 
    background("red")

  }
  if(keyIsDown(UP_ARROW))
  { 
    background("blue")

  }
  if(keyIsDown(RIGHT_ARROW))
  { 
    background("purple")

  }
  if(keyIsDown(LEFT_ARROW))
  { 
    background("vilolet")

  }

  if(keyIsDown(SHIFT))
  { 
    background("green")

  }
  drawSprite();
}





