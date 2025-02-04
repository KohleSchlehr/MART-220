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

function setup()
{
    createCanvas(800,600);
}

function mouseClicked()
{
    SesameSeedX = mouseX;
    SesameSeedY = mouseY;
}

function draw()
{
    background(120);

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
}