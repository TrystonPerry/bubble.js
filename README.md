# bubble.js

Javascript library that moves elements progressively right to left across the screen. While also slowly moving each element vertically at their own speed and paramaters.

![](https://user-images.githubusercontent.com/20135447/52904392-93959580-31e0-11e9-9d47-5a7964922a4e.gif)

 To get a demo, check out https://trystonperry.com/bubble.js

## How to download

Files needed:
* bubble.js
* (Optional) bubble.css
* (Optional) bubble.html

There is a CDN available if you dont want to download or change any settings.
* Regualar (Recommended) 
  
  `<script src="https://www.trystonperry.com/bubble.js/bubble.js"></script>`
* Minified (Compressed) 
  
  `<script src="https://www.trystonperry.com/bubble.js/bubble.min.js"></script>`


The js file is customizable, so it is recommended to download your own copy so you can config it for your needs.

Visit https://trystonperry.com/bubble.js and click the download button to get your own version.

## HTML Setup

By default, the bubble.js finds all bubbles with the class name `.bubble`.

![](https://i.imgur.com/keq4TvV.png)

`.bubbles` is the parent div that holds all bubbles

`.bubble` is a div for a specific bubble

`.bubble-0` is an identifier to use in CSS for customization (Optional)

`.bubble-toolip` is for a peice of text that is shown below the bubble (Optional)

## CSS Setup

The css is not needed for setup, but we suggest using it.

However, one css setting that is suggested is to disable overflow on the x-axis `body { overflow-x: hidden; }`

## Javascript Setup

Variables

`varName` = Variable Name

* `bubblePos` = Bubble position data, bubblePos[0] = first .bubble found on the html page
* `bubblePos.x`= Starting X
* `bubblePos.y` = Starting Y 
* `bubblePos.minY` = Starting minimum Y position possible
* `bubblePos.maxY` = Starting maximum Y position possible
* `bubblePos.isRising` = Boolean stating whether the bubble is rising or lowering 

The next 4 variables are paramaters for the random min and max Y's
* `bubblePos.minMinY` = Minimum minimum Y Pos
* `bubblePos.maxMinY` = Maximum minimum Y Pos
* `bubblePos.minMaxY` = Minimum maximum Y Pos
* `bubblePos.maxMaxY` = Maximum maximum Y Pos


* `interval` = How often the bubble position is updated (ms)
* `Y_OFFSET` = The offset for the final Y position change
* `X_OFFSET` = The offset for the final X position change


* `minAvgYSpeed` = Minimum average speed (The speed when the bubble is far from the max or min position) 
* `maxAvgYSpeed` = Maximum average speed (The speed when the buble is far...)
* `minMinYSpeed` = Minimum minimum speed (The speed when the bubble is aproaching or leaving min or max position)
* `maxMinYSpeed` = Maximum minimum speed (The speed when the bubble is apr...)


* `X_SPEED` = The speed at which bubbles move on the X axis (ex: if X_SPEED = 1: bubbles will move to the left 1 pixel per 30ms)
