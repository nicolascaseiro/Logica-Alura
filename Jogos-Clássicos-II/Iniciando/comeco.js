let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

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
  image(imagemDoAtor, 100, 366, 30, 30);
  image(imagemCarro, 400, 40, 50, 40)

}

