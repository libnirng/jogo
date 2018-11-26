function setup() {
	createCanvas(600,400);
	stroke(255);
  //objeto que se mexe A
	a = height/2;
	//
}
var lvl=1;
var life=2;
var xf=550;
var yf=170;
var movex1=100;
var movex2=200;
var movex3=300;
var movex4=400;
var x = 30;
var y = 200;
function draw() {
	
	if(keyIsDown(RIGHT_ARROW)&&x<570){
	x+=5;
	}
	if(keyIsDown(LEFT_ARROW)&&x>30){
	x-=5;
	}
clear();
background(50, 89, 100);
	rect(0,0,70,50);
	
	
	
	fill(255);
	
	textSize(15);
	text('Nivel - '+lvl, 5,20);
	text('Vidas - '+life, 5,40);
  ellipse(x,y,50,50);
	
fill('green')
	if(dist(x,y,movex1,a)<20||dist(x,y,movex2,a)<20||dist(x,y,movex3,a)<20||dist(x,y,movex4,a)<20){
		life--;
		x=30;
		if(life==0){
			lvl=7;
		}
	}
  if(dist(x,y,xf,y)<10){
		lvl++;
		x=30;
	}
	rect(xf,yf,50,50);//ponto final
	fill('red');
		
	if(lvl==1){
//objeto que se mexe	A
rect(movex1, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a =a-0.5;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex1=random(100,500)
	}
rect(movex2, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 0.5;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex2=random(100,500)
	}
rect(movex3, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 0.5;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex3=random(100,500)
	}
}//fim do lvl1
	
	
	else if (lvl==2){
		rect(movex1, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 0.5;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex1=random(100,500)
	}
rect(movex2, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 0.5;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex2=random(100,500)
	}
rect(movex3, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 0.5;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex3=random(100,500)
	}
rect(movex4, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 0.5;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex4=random(100,500)
	}
	}//fim do lvl2
	
	
else if(lvl==3){
	rect(movex1, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 1;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex1=random(100,500)
	}
rect(movex2, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 1;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex2=random(100,500)
	}
rect(movex3, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 1;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex3=random(100,500)
	}
rect(movex4, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 1;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex4=random(100,500)
	}
}//fim do lvl3
	
	
	else if(lvl==4){
	rect(movex1, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 1.5;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex1=random(100,500)
	}
rect(movex2, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 1.5;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex2=random(100,500)
	}
rect(movex3, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 1.5;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex3=random(100,500)
	}
rect(movex4, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 1.5;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex4=random(100,500)
	}	
	}//fim do lvl4
	
	
else if(lvl==5){//final lvl.
	rect(movex1, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 2;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex1=random(100,500)
	}
rect(movex2, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 2;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex2=random(100,500)
	}
rect(movex3, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 2;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex3=random(100,500)
	}
rect(movex4, a, 20, 20); //rect(posição,onde ele vai começar,x,y
a = a - 2;
		if (a < 0) {
		//variável para quanto atingir o valor zero, ele volta para o inicio da tela	
		a = height;
			movex4=random(100,500)
	}	
}
	
	
	else if(lvl==6){
		textSize(30)
		text("jogo completo", 15,70);
		//por loop
}
	else if(lvl==7){
	  clear();
		background(50, 89, 100);
    fill(0);
		textSize(50);
 text("Fim de jogo", 150, 200);
	}
}