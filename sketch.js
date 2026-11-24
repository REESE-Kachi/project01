/* VARIABLES */
let player, walls;
let gameWon = false;

/* SETUP RUNS ONCE */
function setup() {
    createCanvas(600, 600);

    // Create player
    player = {
        x: 350,
        y: 50,
        w: 20,
        h: 20,
        speed: 10
    };

    // Create maze walls
    walls = [];

    walls.push({ x: 10, y: 200, w: 5, h: 385 }); // Left Wall
    walls.push({ x: 20, y: 197, w: 25, h: 5 }); // Middle Line 2
    walls.push({ x: 250, y: 50, w: 5, h: 75 }); // Top Middle Line

    walls.push({ x: 280, y: 10, w: 545, h: 5 }); // Top Line
    walls.push({ x: 150, y: 60, w: 5, h: 100 }); // Top Middle Line
    walls.push({ x: 190, y: 197, w: 185, h: 5 }); // Middle Line
    walls.push({ x: 430, y: 100, w: 5, h: 90 }); // Top Middle Line

    walls.push({ x: 285, y: 198, w: 5, h: 109 }); // Right Wall 02 
    walls.push({ x: 550, y: 200, w: 5, h: 380 }); // Right Wall
    walls.push({ x: 430, y: 290, w: 5, h: 80 }); // Right Wall
    
    walls.push({ x: 185, y: 332, w: 5, h: 109 }); // Bottom Middle Line
    walls.push({ x: 385, y: 146, w: 200, h: 5 }); // Bottom Line 04
    walls.push({ x: 450, y: 250, w: 200, h: 5 }); // Bottom Line 03
    walls.push({ x: 50, y: 300, w: 75, h: 5 }); // Bottom Line 02
    walls.push({ x: 290, y: 390, w: 370, h: 5 }); // Bottom Line Main
    walls.push({ x: 300, y: 360, w: 5, h: 55 }); // Bottom Line 
}

/* DRAW LOOP REPEATS */
function draw() {
    background(255);
    
    if (!gameWon) {
        let moveX = 0;
        let moveY = 0;

        // =================================
        // PART 1: PLAYER MOVEMENT
        // =================================

        // TODO: Check if the LEFT_ARROW is pressed.
        if (keyIsDown(LEFT_ARROW)) {
            moveX = -player.speed;
        }

        // TODO: Check if the RIGHT_ARROW is pressed.
         if (keyIsDown(RIGHT_ARROW)) {
            moveX = +player.speed;
        }
        // TODO: Check if the UP_ARROW is pressed.
        if (keyIsDown(UP_ARROW)) {
            moveY = -player.speed;
        }
        // TODO: Check if the DOWN_ARROW is pressed.
        if (keyIsDown(DOWN_ARROW)) {
            moveY = +player.speed;
        }
        // TODO: Create horizontal movement.
        player.x += moveX;
        //player.x = 350;
       player.x += 0;
        // TODO: Create vertical movement.
        player.y += moveY;
       // player.y = 40;
        player.y += 0;
        
        // =================================
        // PART 2: WALL COLLISION
        // =================================

        // TODO: If touching the wall move the player horizontally.
        if (touchingWall()) {
          player.x -= moveX;
        }
        // TODO: If touching the wall move the player vertically.
        if (touchingWall()) {
          player.y -= moveY;
        }
        
        // =================================
        // PART 3: CANVAS BOUNDARIES
        // =================================
        // TODO: Prevent the player from leaving the canvas.
        player.x = constrain(
          player.x,
          player.w / 2,
          width - player.w / 2
        );

        player.y = constrain(
        player.y,
        player.h / 2,
        height - player.h / 2
      );
        // =================================
        // PART 4: WIN CONDITION
        // =================================
        // TODO: Check if the player reaches the End.
        if (player.x < 100 && player.y > 380) {
        gameWon = true;
        }
        
        if (player.x < 5400 && player.y > 380) {
        gameWon = true;
        }
        if (!gameWon) {
        // Player movement
        // Collision detection
        // Canvas boundaries
        // Win condition
}
    }

    // =================================
    // DRAW MAZE
    // =================================

    fill(77, 214, 205);
    noStroke();
    rectMode(CENTER);

    for (let wall of walls) {
        rect(wall.x, wall.y, wall.w, wall.h);
        fill(77, 214, 205)
    }

    // Draw player
    fill(255, 100, 150);
    rect(player.x, player.y, player.w, player.h);

    // Draw Start and End
    fill(0);
    textSize(20);
    textAlign(LEFT);
    text("Start", 330, 40);
    text("End", 35, 380);
    text("End2", 490, 380)


    // =================================
    // PART 5: WIN MESSAGE
    // =================================
    // TODO: Display "You Win!" when the game is won.
    if (gameWon) {
        fill(255, 0, 0);
        textSize(45);
        textAlign(CENTER);
        text("YOU DID IT YESY YES  YES YHES!", width / 1, height / 5);
      }
} // END DRAW


/* WALL COLLISION DETECTION */

// TODO: Create a function called touchingWall().
function touchingWall() {
    // Hint: Use a for loop to check each wall.
    // Hint: Use player.x, player.y, player.w, player.h.
    // Hint: Compare the player's boundaries against the wall's boundaries.
    for (let wall of walls) {
if (
  player.x + player.w / 2 > wall.x - wall.w / 2 &&
  player.x - player.w / 2 < wall.x + wall.w / 2 &&
  player.y + player.h / 2 > wall.y - wall.h / 2 &&
  player.y - player.h / 2 < wall.y + wall.h / 2 
) {
  return true;
}

}
return false;
}
