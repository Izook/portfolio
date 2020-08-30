// background.js
// paperscript code used to animate background of landing page

// Reporting successful document load
console.log("background.js loaded")

// The amount of circles we want to make:
var count = 25;

// Array of random desinations for circles to follow
var destinations = [];

// Array of random colors for circles to use
var colors = [];

// Boolean checking if resize has occured
var resize = false;

// Clears canvas and places all new circles on canvas
function setCanvas() {
	// Clear canvas
	if(circleLayer) {
		cirlcLayer.removeChildren()
	}

	// Make circleLayer activeLayer
	var circleLayer = new Layer();

	// Base circle path for all other circles to become clones of
	var circle = new Path.Circle(Point.random() * view.size , Math.min(view.size.width, view.size.height) / 3);
	circle.fillColor = '#B2B2B2'

	// Hide original
	circle.visible = false;

	// Place cirlces onto the canvas
	for (var i = 0; i < count; i++) {
		// Create clone
		clone = circle.clone()

		// Set visible
		clone.visible = true

		// Reposition clones
		clone.position = Point.random() * view.size

		// Recolor clone
		var randomGray = Math.random()*20 + 150
		clone.fillColor.red = (randomGray / 255)
		clone.fillColor.green = (randomGray / 255)
		clone.fillColor.blue = (randomGray / 255)

		// Resize clone
		clone.scale((i + (5*count)) / (6*count))

	  // Assign clone a random positions to approach (possibly outside of canvas)
	  destinations[i] = (Point.random() - 0.25) * (view.size * 2);

		// Assing clone a random color to be if overlapped with title
		var randomColor = new Color(Math.random(), Math.random(), Math.random());
		colors[i] = randomColor;

	}
}

// Set canvas on start
setCanvas()

// Called every frame. Up to 60 time a second.
function onFrame(event) {

	// Run approximately every half a second
	if(event.count % 30 == 0) {
		// Check if resize occured and if so reset canvas
		if(resize) {
			setCanvas()
			resize = false
		}
	}

  // Run through the active layer's children list and change the position of the placed symbols:
	for (var i = 0; i < count; i++) {
    // Getting ith item on canvas
		var item = project.activeLayer.children[i + 1]; // + 1 because we don't want to get the original

    // Creating random vector from random destination for item to travel
    var ranVector = destinations[i] - item.position

		// Moving item 1/100th the way to down its random vector
		item.position += ranVector / (Math.max(view.size.width, view.size.height) / 2);

    // If close to destination or outside of bounds
    if (ranVector.length < 150) {
			destinations[i] = (Point.random() - 0.25) * (view.size * 2);
	  }

		// Reroute item to new random destination if item went out of bounds
		if (item.position.x > view.size.width * 1.125 || item.position.x < -view.size.width * 0.125 || item.position.y > view.size.height * 1.125 || item.position.y < -view.size.height * 0.125) {
			destinations[i] = (Point.random() - 0.25) * (view.size * 2);
		}
	}
}

// Reset canvas on resisze
function onResize(event) {
	// Set resize routine to run at appropriate interval
	resize = true;
}
