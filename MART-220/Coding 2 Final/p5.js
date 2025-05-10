let player;
let obstacles = [];
let powerUps = [];
let score = 0;
let gameOver = false;
let slowDownActive = false;
let powerUpTimer = 0;

function setup() {
  createCanvas(600, 400);
  player = new Player(width / 2, height - 30);
}

function draw() {
  background(220);

  // Draw score
  fill(0);
  textSize(20);
  text("Score: " + score, 10, 30);

  if (gameOver) {
    textSize(50);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
    return;
  }

  // Update and display player
  player.update();
  player.display();

  // Generate and update obstacles and power-ups
  if (frameCount % 60 === 0) { // Every second
    obstacles.push(new Obstacle());
    if (random(1) < 0.1) {
      powerUps.push(new PowerUp());
    }
  }

  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].update();
    obstacles[i].display();

    if (obstacles[i].hits(player)) {
      gameOver = true;
    }

    if (obstacles[i].offScreen()) {
      obstacles.splice(i, 1);
      score++; // Increase score when obstacle goes off-screen
    }
  }

  // Update power-ups
  for (let i = powerUps.length - 1; i >= 0; i--) {
    powerUps[i].update();
    powerUps[i].display();

    if (powerUps[i].hits(player)) {
      slowDownActive = true;
      powerUpTimer = 200; // Power-up lasts for 200 frames (about 3 seconds)
      powerUps.splice(i, 1);
    }
  }

  // Manage slow down power-up
  if (slowDownActive) {
    powerUpTimer--;
    if (powerUpTimer <= 0) {
      slowDownActive = false;
    }
  }

  // Speed up obstacles as score increases
  if (score % 5 === 0) {
    for (let obstacle of obstacles) {
      obstacle.speed += 0.1;
    }
  }
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.xSpeed = 0;
  }

  update() {
    // Keyboard input for player movement
    if (keyIsDown(LEFT_ARROW)) {
      this.xSpeed = -5;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.xSpeed = 5;
    } else {
      this.xSpeed = 0;
    }

    // Mouse input for player movement
    this.x = mouseX;

    // Prevent player from going off-screen
    this.x = constrain(this.x, 0, width - this.size);
  }

  display() {
    fill(0);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}

class Obstacle {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.width = random(40, 80);
    this.height = random(20, 40);
    this.speed = random(3, 6);
  }

  update() {
    this.y += this.speed;
    if (slowDownActive) {
      this.speed = 1.5; // Slow down the obstacle speed if power-up is active
    }
  }

  display() {
    fill(255, 0, 0);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }

  hits(player) {
    if (
      player.x + player.size / 2 > this.x &&
      player.x - player.size / 2 < this.x + this.width &&
      player.y + player.size / 2 > this.y &&
      player.y - player.size / 2 < this.y + this.height
    ) {
      return true;
    }
    return false;
  }

  offScreen() {
    return this.y > height;
  }
}

class PowerUp {
  constructor() {
    this.x = random(width);
    this.y = random(-200, -50); // Start off-screen
    this.size = 20;
    this.speed = 2;
  }

  update() {
    this.y += this.speed;
  }

  display() {
    fill(0, 255, 0);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }

  hits(player) {
    if (
      player.x + player.size / 2 > this.x &&
      player.x - player.size / 2 < this.x + this.size &&
      player.y + player.size / 2 > this.y &&
      player.y - player.size / 2 < this.y + this.size
    ) {
      return true;
    }
    return false;
  }
}