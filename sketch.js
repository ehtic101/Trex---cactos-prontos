var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var nuvem, grupodenuvens, imagemdanuvem;
var obstaculo, grupodeobstaculos, obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6;



function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  //trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  imagemdanuvem = loadImage("cloud.png");

  obstaculo1 = loadImage("obstacle1.png");
  obstaculo2 = loadImage("obstacle2.png");
  obstaculo3 = loadImage("obstacle3.png");
  obstaculo4 = loadImage("obstacle4.png");
  obstaculo5 = loadImage("obstacle5.png");
  obstaculo6 = loadImage("obstacle6.png");
  
}

function setup() {

  createCanvas(600,200)
  
  //criar um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //criar um sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //criar solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //definir cor do fundo
  background("white");

  criarNuvens();
  criarCactos();
  
  // pular quando tecla espaço for pressionada
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);

  drawSprites();


  
}

function criarNuvens(){
  if(frameCount % 40 === 0){
    nuvem = createSprite(600,100,40,10);
    nuvem.y = Math.round(random(10,60));
    nuvem.addImage("nuvem", imagemdanuvem);
    nuvem.scale = 0.5;
    nuvem.velocityX = -3;
    
    nuvem.depth = trex.depth;
    trex.depth = trex.depth+1;

    nuvem.lifetime = 250;
  }
  
}
function criarCactos(){
  if(frameCount % 60 === 0){
    obstaculo = createSprite(600, 165, 10, 40);
    obstaculo.velocityX = -5;

    var rand = Math.round(random(1,6));
    switch (rand){
      case 1: obstaculo.addImage(obstaculo1);
              break;
      case 2: obstaculo.addImage(obstaculo2);
              break;
      case 3: obstaculo.addImage(obstaculo3);
              break;
      case 4: obstaculo.addImage(obstaculo4);
              break;
      case 5: obstaculo.addImage(obstaculo5);
              break;
      case 6: obstaculo.addImage(obstaculo6);
              break;
      default:break;
    }

    obstaculo.scale = 0.5;
    obstaculo.lifetime = 250; 
  }
}
