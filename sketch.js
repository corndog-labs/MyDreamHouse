/***********************************************************************************
	My Dream House 
	by Courtney Crother

  Shows navigation structure using the keyboard between 6 rooms

	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

	Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions


***********************************************************************************/



// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

//instructions array
var strings = [];
var midX
var startY;
var lineHeight = 24;

//image variables
var entranceAssets = [];
var kitchenAssets = [];
var livingRoomAssets = [];
var dinningRoomAssets = [];
var bedRoomAssets = [];
var bathRoomAssets = [];

//variables for button
var buttonx = 230;
var buttony = 540;

function preload() {

//entrance images 

entranceAssets[0] = loadImage('assets/sofa.png');
entranceAssets[1] = loadImage('assets/lamp.png');
entranceAssets[2] = loadImage('assets/clock.png');
entranceAssets[3] = loadImage('assets/rainbowdrawer.png');

//kitchen images 
kitchenAssets[0] = loadImage('assets/barcart.png');
kitchenAssets[1] = loadImage('assets/greenkit.png');
kitchenAssets[2] = loadImage('assets/lights.png');

//livingrooom images 
livingRoomAssets[0] = loadImage('assets/chairs.png');
livingRoomAssets[1] = loadImage('assets/greenlamp.png');
livingRoomAssets[2] = loadImage('assets/woodcredenza.png');

//dinning room images 
dinningRoomAssets[0] = loadImage('assets/dinningtable.png');
dinningRoomAssets[1] = loadImage('assets/chair.png');
dinningRoomAssets[2] = loadImage('assets/pendant.png');

//bedroom images 

bedRoomAssets[0] = loadImage('assets/nightstands.png');
bedRoomAssets[1] = loadImage('assets/bed.png');
bedRoomAssets[2] = loadImage('assets/Dresser.png');

//bathroom images 
bathRoomAssets[0] = loadImage('assets/wallpaper.png');
bathRoomAssets[1] = loadImage('assets/mirror.png');
bathRoomAssets[2] = loadImage('assets/vanitywood.png');
}


// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(600,600);

  // Center our drawing objects
  // imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);
  // set to one for startup
  drawFunction = drawEntrance;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(192);
  fill(0);
  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawEntrance = function() {
   
   //images in the entrance array 
   image(entranceAssets[0], 240, 50); //sofa
   image(entranceAssets[2], 190, 215); //clock
   image(entranceAssets[3], 60, 300); //drawers
   image(entranceAssets[1], 10, 100); //lamp

    //rect for button
   fill(209, 0, 28);
   rect(buttonx, buttony, width/4, height/10, 30);

    //text for button
   fill(255, 255, 255);
   text("Entrance", width/2, height - gTextOffset);


   //small rect nav
   fill(209, 0, 28);
   rect(520, 100, width/10, height/10, 30);

    //text for small nav
   fill(255, 255, 255);
   text("K", 550, 140);

}

drawKitchen = function() {


// images in kitchen array 
  image(kitchenAssets[0], 100, 50); //bar cart
  image(kitchenAssets[1], 92, 320); //green island 
  image(kitchenAssets[2], 130, 10); //lights

    //rect for button
   fill(246, 190, 0);
   rect(buttonx, buttony, width/4, height/10, 30);

    //text for button
   fill(255, 255, 255);
   text("Kitchen", width/2, height - gTextOffset);


   //small rect nav
   fill(246, 190, 0);
   rect(520, 100, width/10, height/10, 30);

    //text for small nav
   fill(255, 255, 255);
   text("L", 550, 140);

}

//-- drawOne() will draw the image at index 2 from the array
drawLiving = function() {

    //images in dinning room array 
    image(livingRoomAssets[0], -15, 144); //chairs
    image(livingRoomAssets[1], 230, 190); //lamps
    image(livingRoomAssets[2], 75, 390); //wooden

    //rect for button
   fill(0, 128, 0);
   rect(buttonx, buttony, width/4, height/10, 30);

    //text for button
   fill(255, 255, 255);
   text("Living Room", width/2, height - gTextOffset);

   //small rect nav
   fill(0, 128, 0);
   rect(520, 100, width/10, height/10, 30);

    //text for small nav
   fill(255, 255, 255);
   text("B", 550, 140);

}

//-- drawOne() will draw the image at index 3 from the array
drawDiningRoom = function() {
   
    //images for dinning room areay
    image(dinningRoomAssets[0], 0, 271); //table
    image(dinningRoomAssets[1], 198, 200); //chair
    image(dinningRoomAssets[2], 200, 0); //pendent 

    //rect for button
   fill(0, 123, 125);
   rect(buttonx, buttony, width/4, height/10, 30);

    //text for button
   fill(255, 255, 255);
   text("Living Room", width/2, height - gTextOffset);

   //small rect nav
   fill(0, 123, 125);
   rect(520, 100, width/10, height/10, 30);

    //text for small nav
   fill(255, 255, 255);
   text("B", 550, 140);

   //small rect nav
   fill(0, 123, 125);
   rect(520, 200, width/10, height/10, 30);

    //text for small nav
   fill(255, 255, 255);
   text("E", 550, 140);
}

drawBedroom = function() {
    //images for bedroom
    image(bedRoomAssets[0], 260, 125); //nightstand
    image(bedRoomAssets[1], 55, 375); //bed 
    image(bedRoomAssets[2], 70, 70); //dresser 

    //rect for button
   fill(255, 165, 0);
   rect(buttonx, buttony, width/4, height/10, 30);

    //text for button
   fill(255, 255, 255);
   text("Bed Room", width/2, height - gTextOffset);

   //small rect nav
   fill(255, 165, 0);
   rect(520, 100, width/10, height/10, 30);

    //text for small nav
   fill(255, 255, 255);
   text("B", 550, 140); 
}

drawBathroom = function() {

    //images for bathroom
    image(bathRoomAssets[0], 0, 0); //wallpaper 
    image(bathRoomAssets[1], 150, 50); //mirror
    image(bathRoomAssets[2], 100, 200); //vanity 

    //rect for button
   fill(207, 255, 229);
   rect(buttonx, buttony, width/4, height/10, 30);

    //text for button
   fill(255, 255, 255);
   text("Living Room", width/2, height - gTextOffset);

   //small rect nav
   fill(207, 255, 229);
   rect(520, 100, width/10, height/10, 30);

    //text for small nav
   fill(255, 255, 255);
   text("R", 550, 140);
}

//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyPressed() {
  // shows which was types
  //print(key);
  print(keyCode);

  // Entrance [e] 
  if( drawFunction === drawEntrance ) {
    if( key === 'k' ) {
        drawFunction = drawKitchen;
    }
    if( key === 'l' ) {
      drawFunction = drawLiving;
    }
  }

  // Kitchen [k]
  else if( drawFunction === drawKitchen ) {
    if( key === 'l' ) {
      drawFunction = drawLiving;
    }

    else if( key === 'd' ) {
      drawFunction = drawDiningRoom;
    }
  }

  // Living room [l]
  else if( drawFunction === drawLiving ) {
    if( key === 'b' ) {
      drawFunction = drawBathroom;
    }
    if( key === 'k' ) {
      drawFunction = drawKitchen;
    }
  }

    //Dinning room [d]

   if( drawFunction === drawDiningRoom ) {
    if( key === 'd' ) {
        drawFunction = drawKitchen;
    }
    if( key === 'b' ) {
      drawFunction = drawBathRoom;
    }
    else if( key === 'e' ) {
      drawFunction = drawEntrance;
    }
  }

  // BedRoom [r]
  else if( drawFunction === drawBedroom ) {
    if( key === 'b' ) {
      drawFunction = drawBathroom;
    }
      else if( key === 'd' ) {
      drawFunction = drawDiningRoom;
    }
  }
    // Bathroom [b]
  else if( drawFunction === drawBathroom ) {
    if( key === 'r') {
      drawFunction = drawBedroom;
    }
  }
}


