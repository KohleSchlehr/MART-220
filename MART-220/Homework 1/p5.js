function setup()
{
    createCanvas(800,600);
}

function draw()
{
    background(120);

    // Top Bun
    fill(230, 180, 80);
    ellipse(400, 220, 180, 80);

    // Bottom Bun
    fill(230, 180, 80);
    ellipse(400, 350, 180, 80);

    // The Meat
    fill(150, 75, 0);
    ellipse(400, 320, 120, 60);

    // Lettuce
    fill(50, 205, 50);
    ellipse(400, 300, 110, 50);

    // Tomato
    fill(255, 50, 50);
    ellipse(400, 280, 90, 30);
}