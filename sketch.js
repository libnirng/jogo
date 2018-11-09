function setup() {
	createCanvas(600,400);	
}
var x = 60;
var y = 270;
function draw() {
	if(keyIsDown(RIGHT_ARROW)){
	x+=5;
	}
	if(keyIsDown(LEFT_ARROW)){
	x-=5;
	}
	if(keyIsDown(UP_ARROW)){
	y-=5;
	}
	if(keyIsDown(DOWN_ARROW)){
	y+=5;
	}
clear();
background(0);
rect(150, 150, 100,300);//fixo
ellipse(x,y,50,50);
}