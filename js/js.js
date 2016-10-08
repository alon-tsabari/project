// DEFINING THE BUTTONS;

var up = document.querySelector('.up');
var down = document.querySelector('.down');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var reset = document.querySelector('.reset');
var plus = document.querySelector('.plus');
var minus = document.querySelector('.minus');

// SHORTCUTS;

var shortcuts = document.querySelector('.shortcuts');

// GET READY THE ELEMENTS BEFORE WE REACH THEIR PROPERTIES VALUES;
  
  // CIRCLE;
var circle = document.querySelector('.circle');
var circleStyle = window.getComputedStyle(circle);

  // CIRCLE-AREA;
var circleArea = document.querySelector('.circle-area');
var circleAreaStyle = window.getComputedStyle(circleArea);

// GET THE VALUES OF THE ELEMENTS;
  
  // CIRCLE;
var topFromEdge = parseInt(circleStyle.getPropertyValue('top'));
var leftFromEdge = parseInt(circleStyle.getPropertyValue('left'));
var circleHeight = parseInt(circleStyle.getPropertyValue('height'));
var circleWidth = parseInt(circleStyle.getPropertyValue('width'));
var scale = 1;

  // CIRCLE-AREA;
var height = parseInt(circleAreaStyle.getPropertyValue('height'));
var width = parseInt(circleAreaStyle.getPropertyValue('width'));



// FUNCTIONS;

 // MOVING AS THE BUTTON DIRECTION;

function movingUp() {
	if(topFromEdge >= 5) {
		topFromEdge -= 5;
		circle.style.top = topFromEdge + 'px';
		console.log("going up, we're now at " + topFromEdge + "px from the top");
	}else {
		topFromEdge = 0;
		circle.style.top = topFromEdge + 'px';
		console.log("going up, we're now at " + topFromEdge + "px from the top");
	}
}

function movingDown() {
	if((topFromEdge + circleHeight) <= (height - 5)) {
		topFromEdge += 5;
		circle.style.top = topFromEdge + 'px';
		console.log("going down, we're now at " + topFromEdge + 'px');
	}else {
		topFromEdge = (height - circleHeight);
		circle.style.top = topFromEdge + 'px';
		console.log("going down, we're now at " + (height - circleHeight) + 'px');
	}	
}

function movingLeft() {
	if(leftFromEdge >= 5) {
		leftFromEdge -= 5;
		circle.style.left = leftFromEdge + 'px';
		console.log('going left, just ' + leftFromEdge + 'px more');
	}else {
		leftFromEdge = 0;
		circle.style.left = leftFromEdge + 'px';
		console.log("going left, we're now at " + leftFromEdge + "px from the left");
	}
}

function movingRight() {
	if((leftFromEdge + circleWidth) <= (width - 5)) {
		leftFromEdge += 5;
		circle.style.left = leftFromEdge + 'px';
		console.log("going right, we're now at " + leftFromEdge + 'px');
	}else {
		leftFromEdge = (width - circleWidth);
		circle.style.left = leftFromEdge + 'px';
		console.log("going right, we're now at " + (width - circleWidth) + 'px');
	}	
}

// BY CLICKING THE RESET BUTTON THE CIRCLE COME BACK TO IT'S STARTING POSITION;

function resetPosition() {
	if(window.width < 500) {
		topFromEdge = (height * 0.37);
		leftFromEdge = (width * 0.37);
		circle.style.top = topFromEdge + 'px';
		circle.style.left = leftFromEdge + 'px';
    }else if(window.width < 700) {
	        topFromEdge = (height * 0.42);
		leftFromEdge = (width * 0.42);
		circle.style.top = topFromEdge + 'px';
		circle.style.left = leftFromEdge + 'px';
    }else {
	        topFromEdge = (height * 0.44);
		leftFromEdge = (width * 0.44);
		circle.style.top = topFromEdge + 'px';
		circle.style.left = leftFromEdge + 'px';
    }
	        circle.style.backgroundColor = 'blue';
		circleArea.style.border = '3px solid';
		circleWidth = 100;
		circleHeight = 100;
		circle.style.width = circleWidth + 'px';
		circle.style.height = circleHeight + 'px';
                console.log('circle-position reset');
}


// DEFINING THE UNSEEN-BORDER THE CIRCLE TO BE BLUE OR RED;

function movingColor() {
	if(topFromEdge > 5 && leftFromEdge > 5 && (topFromEdge + circleHeight) < (height - 5) && (leftFromEdge + circleWidth) < (width - 5)) {
		circle.style.backgroundColor = 'blue';
		circleArea.style.border = '3px solid';
	}else {
		circle.style.backgroundColor = 'red';
		circleArea.style.border = '3px solid red';
	}
}


// SCALING;

function scaleUp() {
	var centerY = topFromEdge + (circleHeight / 2);
	var centerX = leftFromEdge + (circleWidth / 2);

	if(circleWidth + 40 <= 250) {
		circleWidth += 40;
		circleHeight += 40;
		circle.style.width = circleWidth + 'px';
		circle.style.height = circleHeight + 'px';

		topFromEdge = centerY - (circleHeight / 2);
		leftFromEdge = centerX - (circleWidth / 2);

		if(topFromEdge <= 5) {
			circle.style.backgroundColor = 'red';
		    circleArea.style.border = '3px solid red';
		}else if (topFromEdge <= 0) {
			topFromEdge = 0;
		}
		else if (topFromEdge + circleHeight >= height - 5) {
			topFromEdge = height - circleHeight;
		    circle.style.backgroundColor = 'red';
		    circleArea.style.border = '3px solid red';
		}

		if(leftFromEdge <= 5) {
			leftFromEdge = 0;
			circle.style.backgroundColor = 'red';
		    circleArea.style.border = '3px solid red';
		}else if (leftFromEdge + circleWidth >= width - 5) {
			leftFromEdge = width - circleWidth;
			circle.style.backgroundColor = 'red';
		    circleArea.style.border = '3px solid red';
		}

		circle.style.top = topFromEdge + 'px';
		circle.style.left = leftFromEdge + 'px';
		
	}else {
		setTimeout(function() {
			if(topFromEdge <= 5 || leftFromEdge <= 5 || (topFromEdge + circleHeight) >= (height - 5) || (leftFromEdge + circleWidth) >= (width - 5)){
				circle.style.backgroundColor = 'red';
		                circleArea.style.border = '3px solid red';
			}else {
				circle.style.backgroundColor = 'blue';
		                circleArea.style.border = '3px solid';
			}
		}, 400), circle.style.backgroundColor = 'purple';
		console.log('this is the maximum limit of scale');
	}
}

function scaleDown() {
	var centerY = topFromEdge + (circleHeight / 2);
	var centerX = leftFromEdge + (circleWidth / 2);

	if(circleWidth > 100) {
		circleWidth -= 40;
		circleHeight -= 40;
		circle.style.width = circleWidth + 'px';
		circle.style.height = circleHeight + 'px';

		topFromEdge = centerY - (circleHeight / 2);
		leftFromEdge = centerX - (circleWidth / 2);

		centerY -= 20;
		centerX -= 20;

		circle.style.top = topFromEdge + 'px';
		circle.style.left = leftFromEdge + 'px';

		if(topFromEdge <= 5 || leftFromEdge <= 5 || (topFromEdge + circleHeight) >= (height - 5) || (leftFromEdge + circleWidth) >= (width - 5)) {
			circle.style.backgroundColor = 'red';
			circleArea.style.border = '3px solid red';
		}else {
			circle.style.backgroundColor = 'blue';
			circleArea.style.border = '3px solid';
		}

	}else {
		setTimeout(function() {
			if(topFromEdge <= 5 || leftFromEdge <= 5 || (topFromEdge + circleHeight) >= (height - 5) || (leftFromEdge + circleWidth) >= (width - 5)) {
				circle.style.backgroundColor = 'red';
		        circleArea.style.border = '3px solid red';
			}else {
				circle.style.backgroundColor = 'blue';
		        circleArea.style.border = '3px solid';
			}
		}, 400), circle.style.backgroundColor = 'purple';
		console.log('this is the minimum limit of scale');
	}
}



// SHORTCUtS;

function popUp() {
	if(shortcuts.style.transform === 'translateX(0px)') {
		shortcuts.style.transform = 'translateX(-110%)'
	}else {
		shortcuts.style.transform = 'translateX(0px)';
	}
}


// RESIZING USING JQUERY;
  
  // EVERY TIME THE WINDOW IS RESIZING IT REFRESHES ITSELF SO THAT THE POSITION OF THE CIRCLE IS GETTING UPDATED;

var $window = $(window);

  $window.on('scroll resize', reload);

function reload() {
	if($window.width() < 700) {
		location.reload()
		console.log('refresed on less then 700');
	}else {
		location.reload();
		console.log('refresed on more then 700');
	}
}

// EXECUTE;

up.addEventListener('click', movingUp);
down.addEventListener('click', movingDown);
left.addEventListener('click', movingLeft);
right.addEventListener('click', movingRight);
plus.addEventListener('click', scaleUp);
minus.addEventListener('click', scaleDown);

up.addEventListener('click', movingColor);
down.addEventListener('click', movingColor);
left.addEventListener('click', movingColor);
right.addEventListener('click', movingColor);

reset.addEventListener('click', resetPosition);

shortcuts.addEventListener('click', popUp);


// KEYBOARDS EVENTS;

document.onkeydown = function(e) {
    switch (e.keyCode) {
        // ARROW UP;
        case 38:
            event.preventDefault();
            movingUp();
            movingColor();
            break;
        // ARROW DOWN;
        case 40:
            event.preventDefault();
            movingDown();
            movingColor();
            break;
        // ARROW RIGHT;    
        case 39:
            event.preventDefault();
            movingRight();
            movingColor();
            break;
        // ARROW LEFT;
        case 37:
            event.preventDefault();
            movingLeft();
            movingColor();
            break;
        // SPACE-BAR;
        case 32:
            event.preventDefault();
            resetPosition();
            movingColor();
            break;
        // P BUTTON;
        case 80:
            event.preventDefault();
            scaleUp();
            break;
        case 77:
            event.preventDefault();
            scaleDown();
            break;
    }
};