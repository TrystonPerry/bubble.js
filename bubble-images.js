const bubbles = document.getElementsByClassName('bubble');

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
    isRising: true
  },
  {
    x: 700,
    y: 400,
    minY: 370,
    maxY: 430,
    minMinY: 360,
    maxMinY: 380,
    minMaxY: 420,
    maxMaxY: 440,
    isRising: true
  },
  {
    x: 1030,
    y: 350,
    minY: 390,
    maxY: 310,
    minMinY: 300,
    maxMinY: 320,
    minMaxY: 380,
    maxMaxY: 400,
    isRising: true
  },
  {

  }
]

const interval = 30;

for(let i = 0; i < bubbles.length; i++) {

  setInterval(() => {
    moveBubble(bubbles[i], bubblePos[i].x, bubblePos[i].y);

    if(bubblePos[i].x <= -200) { bubblePos[i].x = 1920 } 
    bubblePos[i].x -= 0.5;

    // If bubble Y is lowering (+)
    if(!bubblePos[i].isRising) {

      // If bubble position is still far from the maximum Y
      if(bubblePos[i].y <= bubblePos[i].maxY - 10) {
        bubblePos[i].y += Math.random() * (0.25 - 0.025) + 0.025;
      }
      // If bubble Y position is approaching the maximum Y
      else if(bubblePos[i].y >= bubblePos[i].maxY - 10) { 
        bubblePos[i].y += Math.random() * (0.05 - 0.005) + 0.005;
      }
      // If bubble Y position has just flipped to lowering
      if(bubblePos[i].y <= bubblePos[i].minY + 10) {
        bubblePos[i].y += Math.random() * (0.05 - 0.005) + 0.005;
      }
      if(bubblePos[i].y >= bubblePos[i].maxY) { 
        bubblePos[i].isRising = true;
        // Set the next minimum Y to a slightly random point
        bubblePos[i].minY = Math.random() * (bubblePos[i].maxMaxY - bubblePos[i].minMaxY) + bubblePos[i].minMaxY; 
      }

    // If bubble Y is rising (-)
    } else {

      // If bubble Y postion is still far from reaching the minimum Y
      if(bubblePos[i].y >= bubblePos[i].minY + 10) {
        bubblePos[i].y -= Math.random() * (0.25 - 0.025) + 0.025;
      }
      // If bubble position is approaching the minimum Y
      else if(bubblePos[i].y <= bubblePos[i].minY + 10) { 
        bubblePos[i].y -= Math.random() * (0.05 - 0.005) + 0.005;
      }
      // If bubble Y postion has just flipped to raising
      if(bubblePos[i].y >= bubblePos[i].maxY - 10) {
        bubblePos[i].y -= Math.random() * (0.05 - 0.005) + 0.005;
      }
      // If bubble Y position has reached the minimum Y
      if(bubblePos[i].y <= bubblePos[i].minY) { 
        bubblePos[i].isRising = false;
        // Set the next maximum Y to a slightly random point
        bubblePos[i].maxY = Math.random() * (bubblePos[i].maxMinY - bubblePos[i].minMinY) + bubblePos[i].minMinY; 
      }

    }
    
    
  }, interval);

}

function moveBubble(bubble, x, y) {
  bubble.style.transform = `translate(${x}px, ${y}px)`;
}