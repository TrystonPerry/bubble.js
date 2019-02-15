const bubbles = document.getElementsByClassName('bubble');

// Position data for each bubble
// HTML item with class bubble-0 = bubblePos[0]
const bubblePos = [
  {
    x: 800,
    y: 150,
    minY: 125,
    maxY: 175,
    minMinY: 125,
    maxMinY: 140,
    minMaxY: 160,
    maxMaxY: 175,
    isRising: false
  },
  {
    x: 670,
    y: 380,
    minY: 360,
    maxY: 400,
    minMinY: 360,
    maxMinY: 370,
    minMaxY: 390,
    maxMaxY: 400,
    isRising: true
  },
  {
    x: 1040,
    y: 350,
    minY: 310,
    maxY: 390,
    minMinY: 300,
    maxMinY: 320,
    minMaxY: 380,
    maxMaxY: 400,
    isRising: false
  },
  {
    x: 1175,
    y: 160,
    minY: 140,
    maxY: 190,
    minMinY: 130,
    maxMinY: 150,
    minMaxY: 180,
    maxMaxY: 200,
    isRising: true
  },
  {
    x: 1325,
    y: 300,
    minY: 270,
    maxY: 330,
    minMinY: 270,
    maxMinY: 280,
    minMaxY: 320,
    maxMaxY: 330,
    isRising: true
  },
  {
    x: 1500,
    y: 150,
    minY: 140,
    maxY: 160,
    minMinY: 135,
    maxMinY: 145,
    minMaxY: 165,
    maxMaxY: 175,
    isRising: false
  },
  {
    x: 1625,
    y: 300,
    minY: 270,
    maxY: 330,
    minMinY: 260,
    maxMinY: 280,
    minMaxY: 320,
    maxMaxY: 340,
    isRising: true
  },
  {
    x: 1850,
    y: 175,
    minY: 150,
    maxY: 200,
    minMinY: 150,
    maxMinY: 160,
    minMaxY: 190,
    maxMaxY: 200,
    isRising: true
  },
  {
    x: 1975,
    y: 325,
    minY: 300,
    maxY: 350,
    minMinY: 290,
    maxMinY: 310,
    minMaxY: 340,
    maxMaxY: 360,
    isRising: false
  },
  {
    x: -200,
    y: 200,
    minY: 150,
    maxY: 250,
    minMinY: 150,
    maxMinY: 170,
    minMaxY: 230,
    maxMaxY: 250,
    isRising: true
  },
  {
    x: 50,
    y: 125,
    minY: 100,
    maxY: 150,
    minMinY: 100,
    maxMinY: 110,
    minMaxY: 140,
    maxMaxY: 150,
    isRising: false
  },
  {
    x: 150,
    y: 350,
    minY: 325,
    maxY: 375,
    minMinY: 325,
    maxMinY: 340,
    minMaxY: 360,
    maxMaxY: 375,
    isRising: false
  },
  {
    x: 275,
    y: 125,
    minY: 110,
    maxY: 140,
    minMinY: 110,
    maxMinY: 120,
    minMaxY: 130,
    maxMaxY: 140,
    isRising: true
  },
  {
    x: 380,
    y: 250,
    minY: 210,
    maxY: 290,
    minMinY: 200,
    maxMinY: 220,
    minMaxY: 280,
    maxMaxY: 300,
    isRising: false
  },
  {
    x: 600,
    y: 125,
    minY: 115,
    maxY: 135,
    minMinY: 110,
    maxMinY: 120,
    minMaxY: 130,
    maxMaxY: 140,
    isRising: true
  }
]

// How often the bubble position is updated
const interval = 30;

// The offset for final Y position change. 
// Use this if you want the bubbles to be lower on the page
const Y_OFFSET = 0;

// Configure min and max speeds for Y movement
let minAvgYSpeed = 0.01;    // Minimum average speed
let maxAvgYSpeed = 0.2;     // Maximum average speed
let minMinYSpeed = 0.025;   // Minimum minimum speed
let maxMinYSpeed = 0.05;    // Maximum minimum speed


// Loop through all HTML bubbles
for(let i = 0; i < bubbles.length; i++) {

  // Set interval for bubble update code
  setInterval(() => {

    // Move the indexed bubble to new X and Y position
    moveBubble(bubbles[i], bubblePos[i].x, bubblePos[i].y);

    // If bubble is off left side of the screen, place it off screen on the right
    if(bubblePos[i].x <= -375) { bubblePos[i].x = 2000 } 

    // Lower bubble X (to left)
    bubblePos[i].x -= 0.5;

    // If bubble Y is lowering (+Y)
    if(!bubblePos[i].isRising) {

      // If bubble position is still far from the maximum Y
      if(bubblePos[i].y <= bubblePos[i].maxY) {
        bubblePos[i].y += Math.random() * (maxAvgYSpeed - minAvgYSpeed) + minAvgYSpeed;
      }

      // If bubble Y position is approaching the maximum Y
      else if(bubblePos[i].y >= bubblePos[i].maxY - 10) { 
        bubblePos[i].y += Math.random() * (maxMinYSpeed - minMinYSpeed) + minMinYSpeed;
      }

      // If bubble Y position has just flipped to lowering
      if(bubblePos[i].y <= bubblePos[i].minY + 10) {
        bubblePos[i].y += Math.random() * (maxMinYSpeed - minMinYSpeed) + minMinYSpeed;
      }

      // If bubble Y position is at the maximum Y position
      if(bubblePos[i].y >= bubblePos[i].maxY) { 

        // Start rising bubble Y (-Y)
        bubblePos[i].isRising = true;

        // Set the next minimum Y to a slightly random point
        bubblePos[i].minY = Math.random() * (bubblePos[i].maxMinY - bubblePos[i].minMinY) + bubblePos[i].minMinY; 

      }

    // If bubble Y is rising (-Y)
    } else {  

      // If bubble Y postion is still far from reaching the minimum Y
      if(bubblePos[i].y >= bubblePos[i].minY) {
        bubblePos[i].y -= Math.random() * (maxAvgYSpeed - minAvgYSpeed) + minAvgYSpeed;
      }

      // If bubble position is approaching the minimum Y
      else if(bubblePos[i].y <= bubblePos[i].minY + 10) { 
        bubblePos[i].y -= Math.random() * (maxMinYSpeed - minMinYSpeed) + minMinYSpeed;
      }

      // If bubble Y postion has just flipped to raising
      if(bubblePos[i].y >= bubblePos[i].maxY - 10) {
        bubblePos[i].y -= Math.random() * (maxMinYSpeed - minMinYSpeed) + minMinYSpeed;
      }

      // If bubble Y position has reached the minimum Y position
      if(bubblePos[i].y <= bubblePos[i].minY) { 

        // Start lowering bubble Y (+Y)
        bubblePos[i].isRising = false;

        // Set the next maximum Y to a slightly random point
        bubblePos[i].maxY = Math.random() * (bubblePos[i].maxMaxY - bubblePos[i].minMaxY) + bubblePos[i].minMaxY; 
      }

    }
    
    
  }, interval);

}

// Set the css property of HTML bubble transform to new X Y position
function moveBubble(bubble, x, y) {
  bubble.style.transform = `translate(${x}px, ${Y_OFFSET + y}px)`;
}