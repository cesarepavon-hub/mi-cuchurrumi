let noButtonX, noButtonY;
let buttonWidth = 100;
let buttonHeight = 50;
let gameOver = false;
let backgroundImage;
let backgroundImage2;

function preload() {
  backgroundImage = loadImage('data/background.png', 
    () => console.log('Imagen 1 cargada'),
    () => console.log('Error cargando imagen 1')
  );
  backgroundImage2 = loadImage('data/background2.png',
    () => console.log('Imagen 2 cargada'),
    () => console.log('Error cargando imagen 2')
  );
}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  noButtonX = width/2 + 20;
  noButtonY = height/2;
}

function draw() {
  if (!gameOver) {
    image(backgroundImage, 0, 0, width, height);
    drawButton(width/2 - 120, height/2, "SI", color(237, 158, 159));
    drawButton(noButtonX, noButtonY, "NO", color(237, 158, 159));
    
    if (isMouseNearNoButton()) {
      moveNoButton();
    }
  } else {
    image(backgroundImage2, 0, 0, width, height);
  }
}

function drawButton(x, y, label, btnColor) {
  fill(btnColor);
  rect(x, y, buttonWidth, buttonHeight, 10);
  fill(0);
  textSize(24);
  text(label, x + buttonWidth/2, y + buttonHeight/2);
}

function mousePressed() {
  if (mouseX > width/2 - 120 && mouseX < width/2 - 120 + buttonWidth &&
      mouseY > height/2 && mouseY < height/2 + buttonHeight) {
    gameOver = true;
  }
}

function isMouseNearNoButton() {
  let distance = dist(mouseX, mouseY, noButtonX + buttonWidth/2, noButtonY + buttonHeight/2);
  return distance < 100;
}

function moveNoButton() {
  resetNoButton();
}

function resetNoButton() {
  noButtonX = random(width - buttonWidth);
  noButtonY = random(height - buttonHeight);
  
  while (abs(noButtonX - (width/2 - 120)) < buttonWidth &&
         abs(noButtonY - height/2) < buttonHeight) {
    noButtonX = random(width - buttonWidth);
    noButtonY = random(height - buttonHeight);
  }
}
