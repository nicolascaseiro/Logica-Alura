let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

let xCarro = 420;

let yAtor = 366;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDaEstrada = loadImage("Imagens/ator-1.png");
  imagemDaEstrada = loadImage("Imagens/carro-1.png");
  
}

function setup() {
  createCanvas(500, 400);
}
function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor()
}


function mostraAtor(){
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

function mostraCarro(){
  image(imagemCarro, xCarro, 40, 50, 40);
}

function movimentaCarro(){
  xCarro -= 2;
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3; 
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
    
  }
}
