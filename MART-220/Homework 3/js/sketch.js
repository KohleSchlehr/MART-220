// x and y for Top Bun
var TBunx = 400;
var TBuny = 220;
var TBunxSpeed;
var TBunYSpeed;

// x and y for Bottom Bun
var BBunx = 400;
var BBuny = 350;
var BBunxSpeed;
var BBunYSpeed;

// create a shape when the mouse is clicked
var SesameSeedX;
var SesameSeedY;

// variables for images
var img1;
var img2;
var img3;
var img3x = 100;
var img3y = 500;
var img3xSpeed = 10;
var img3ySpeed = 10;

// font variable
let myFont;

// timer variable
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

function draw()
{
    background(120);
    image(img1, 100, 200, 50, 50);
    image(img2, 100, 350, 50, 50);
    image(img3, img3x, img3y, 75, 75);

    // The Meat
    fill(150, 75, 0);
    ellipse(400, 320, 120, 60);

    // Lettuce
    fill(50, 205, 50);
    ellipse(400, 300, 110, 50);

    // Tomato
    fill(255, 50, 50);
    ellipse(400, 280, 90, 30);

     // Top Bun 
     fill(230, 180, 80);
     // draw the shape
     ellipse(TBunx, TBuny, 180, 80);
 
      // get a random speed when the it first starts
      TBunxSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      TBunYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 
     // move the shape
     TBunx += TBunxSpeed;
     TBuny += TBunYSpeed;
     // check to see if the shape has gone out of bounds
     if(TBunx > width)
     {
         TBunx = 0;
     }
     if(TBunx < 0)
     {
         TBunx = width;
     }
     if(TBuny > height)
     {
         TBuny = 0;
     }
     if(TBuny < 0)
     {
         TBuny = height;
     }

     // Bottom Bun 
     fill(230, 180, 80);
     // draw the shape
     ellipse(BBunx, BBuny, 180, 80);
 
      // get a random speed when the it first starts
      BBunxSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      BBunYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 
     // move the shape
     BBunx += BBunxSpeed;
     BBuny += BBunYSpeed;
     // check to see if the shape has gone out of bounds
     if(BBunx > width)
     {
         BBunx = 0;
     }
     if(BBunx < 0)
     {
         BBunx = width;
     }
     if(BBuny > height)
     {
         BBuny = 0;
     }
     if(BBuny < 0)
     {
         BBuny = height;
     }

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

    //timer
    if (timerValue >= 600) {
        text("0:" + timerValue, width / 2, height / 2);
      }
      if (timerValue < 600) {
        text('0:0' + timerValue, width / 2, height / 2);
      }
      if (timerValue == 0) {
        text('simulation over', width / 2, height / 2);
      }

    //image 3 movement
    if (timerValue--) {
     // img3x -- img3xSpeed;
     // img3y -- img3ySpeed;
    }
}

function timeIt() {
    if (timerValue > 0) {
      timerValue--;
    }
}