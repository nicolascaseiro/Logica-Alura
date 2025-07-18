//variáveis ator
let meusPontos = 0;
let xAtor = 90;
let yAtor = 366;
let velocidadeYAtor = 2.5;
let colidiu = false;
let pontosOponente = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30); //imagem, x, y, comprimento, altura
}
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= velocidadeYAtor;
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += velocidadeYAtor;
  }
}
function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colidiu = collideRectCircle(xCarros[i],yCarros[i], comprimentoCarro,alturaCarro, xAtor, yAtor, 15);
    if(colidiu){
      pontosOponente++;
      yAtor=366
      if(meusPontos>0){
        meusPontos -= 1;
      }
  }
    
}
}
function incluiPontos(){
  fill(255,0,255)
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width /5, 27);
  text(pontosOponente, 390, 27);
}
function marcaPontos(){
  if (yAtor < 15){
    meusPontos++;
    yAtor = 366;
}
}

