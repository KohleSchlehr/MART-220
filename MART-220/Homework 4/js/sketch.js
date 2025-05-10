// Variables for images
var img1;
var img2;
var img3;
var img3x = 100;
var img3y = 500;
var img3xSpeed = 10;
var img3ySpeed = 10;

// Font variable
let myFont;

// Timer variable
var timerValue = 600;

function preload() {
  img1 = loadImage('../images/Burger.jpg');
  img2 = loadImage('../images/Fries.jpg');
  img3 = loadImage('../images/AI Shake.webp');
  myFont = loadFont('../fonts/RubikBurned-Regular.ttf');
}

function setup()
{
    createCanvas(800,600);
    textFont(myFont);
    setInterval(timeIt, 1000);
}

function mouseClicked()
{
    SesameSeedX = mouseX;
    SesameSeedY = mouseY;
}

// Timer function
function timeIt() {
    if (timerValue > 0) {
      timerValue--;
    }
}

// Burger class
class Burger {
  // Constructor for the Burger class
  constructor(x, y) {
    // Initialize positions of burger components
    this.x = x;
    this.y = y;

    // Set random speeds for movement like the buns
    this.xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    this.ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  }

  // Method to move the burger parts (same as top and bottom bun movement)
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Check to make sure the burger wraps around the canvas
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
  }

  // Method to display the burger
  display() {
    // Draw Top Bun
    fill(230, 180, 80);
    ellipse(this.x, this.y - 50, 180, 80);

    // Draw Lettuce
    fill(50, 205, 50);
    ellipse(this.x, this.y - 30, 110, 50);

    // Draw Tomato
    fill(255, 50, 50);
    ellipse(this.x, this.y - 10, 90, 30);

    // Draw Cheese
    fill(255, 204, 0);  // Cheese color (yellow)
    ellipse(this.x, this.y + 10, 120, 40);  // Cheese sits between the patty and the tomato

    // Draw Patty (Meat)
    fill(150, 75, 0);
    ellipse(this.x, this.y + 30, 120, 60);

    // Draw Bottom Bun
    fill(230, 180, 80);
    ellipse(this.x, this.y + 60, 180, 80);
  }
}

let burger;

function setup()
{
    createCanvas(800,600);
    textFont(myFont);
    setInterval(timeIt, 1000);
    burger = new Burger(400, 320);  // Create a burger object at the center of the canvas
}

function draw()
{
    background(120);
    image(img1, 100, 200, 50, 50);
    image(img2, 100, 350, 50, 50);
    image(img3, img3x, img3y, 75, 75);

    // Move the burger (same as top and bottom bun movement)
    burger.move();

    // Display the burger
    burger.display();

    // Name
    fill(0, 0, 0)
    textSize(16);
    text("Kohle Schlehr", width-120,height-50)

    // Title
    fill(0, 0, 0)
    textSize(16);
    text("It's Me Burger Backoff", width-750,height-550)

    // create the shape based on the mouse click
    fill(255,255,255);
    circle(SesameSeedX, SesameSeedY, 10);

    // Timer
    if (timerValue >= 600) {
        text("0:" + timerValue, width / 2, height / 2);
    }
    if (timerValue < 600) {
        text('0:0' + timerValue, width / 2, height / 2);
    }
    if (timerValue == 0) {
        text('simulation over', width / 2, height / 2);
    }

    // image 3 movement
    if (timerValue--) {
     // img3x -- img3xSpeed;
     // img3y -- img3ySpeed;
    }
}