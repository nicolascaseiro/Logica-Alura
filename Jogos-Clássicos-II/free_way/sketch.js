
function setup() {
  createCanvas(500, 400);
}
function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  aumentaVelocidade();
  resultado();
}

