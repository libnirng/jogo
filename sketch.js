var bug;  // Declare object
this.x = 200;
this.y = 200;
var lvl=1;
var life=5;
function setup() {
  createCanvas(600,400);
	stroke(255);
	//Objeto A B C D
	a = 350;
	sa = 350; //reset "save"
	b = 0;
	sb=0;
	c=0;
	sc=0;

  // Create object
  bug = new Pulador();
	
	
}
 
function draw() {
	background(50, 89, 100);
	fill(0);
	textSize(15);
	text('Nivel - '+lvl, 5,20);//editar nivel
	text('Vidas - '+life, 5,40);//editar perda ou ganho
  bug.moveLikeBitch();
	//objeto que se mexe	A
	rect(450, a, 50, 60);
a = a - 3;
		if (a < 0) {
		a = sa;
}
	rect(300,b,50,60);
	b= b+3;
	if(b>350){
		b=sb;
	}
	rect(c,150,50,60);
	c = c+3;
	if(c>550){
		c=sc;
	}
	//aperta a tecla espaço para entrar na gravidade do objeto
  
    if (keyIsPressed === true) {
        if(keyCode == 32) {
            bug.Jump();
        }
    }
   
  bug.display();
    bug.gravityBehaviour();

	if (keyIsPressed && keyCode == RIGHT_ARROW) {
        x = lerp(x, x+3, 0.8);
        if (keyIsPressed && keyCode == UP_ARROW) {
            y = lerp(y,y-(20),0.5);
        }
    } else if(keyIsPressed && keyCode == LEFT_ARROW) {
        x = lerp(x, x-3, 0.8);
            if (keyIsPressed && keyCode == UP_ARROW) {
                y = lerp(y,y-(20),0.5);
            }
    }
}

// Jitter class
function Pulador() {
	
    // Eixo Horizontal
	 //this.x = width/2;
	
   
    // Eixo vertical
  this.y = height - 150;
   
    // Diametro
  this.diameter = 30;
 
    // Velocidade do Salto
    this.jumpSpeed = 1;
   
    // Velocidade da tremedeira
    this.speed = 1;
   
    //Força da Gravidade
    this.gravity = 5;
 
  this.moveLikeBitch = function() {
        // Aqui é só pra ele ficar tremendo feito um inseto.
    this.x += random(-this.speed, this.speed);
 
  }
   
    this.Jump = function() {
        this.y -= 10 ;
    }
   
    // Atuador da gravidade
    this.gravityBehaviour = function() {
        // Sempre que ele estiver fora do chão
        if(this.y < height-15) {
            // Ele será levado ao chão com a força da gravidade.
            this.y += this.gravity;
        }
    }
 
  this.display = function() {
    ellipse(x, this.y, this.diameter, this.diameter);
	}
}