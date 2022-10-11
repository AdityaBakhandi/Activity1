var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 30, 30)
  box.shapeColor = "gray"
}

function draw() 
{
  background("black");

  if (keyIsDown(UP_ARROW)) {
    box.y -= 1
  } else if (keyIsDown(LEFT_ARROW)) {
    box.x -= 1
  }  else if (keyIsDown(RIGHT_ARROW)) {
    box.x += 1
  }  else if (keyIsDown(DOWN_ARROW)) {
    box.y += 1
  } 

  drawSprites()
}




