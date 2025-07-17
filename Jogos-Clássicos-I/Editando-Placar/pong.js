// Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

// Velocidade da bolinha
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

// Raquete do jogador
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let velocidadeYRaquete = 10;

// Raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

// Pontuação
let meusPontos = 0;
let pontosDoOponente = 0;

// Desvio do oponente (para simular erro)
let dOponenteBolinha = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();

  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);

  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);

  incluiPlacar();

  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= velocidadeYRaquete;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += velocidadeYRaquete;
  }
  yRaquete = constrain(yRaquete, 0, height - raqueteAltura);
}

function verificaColisaoRaquete(xRaquete, yRaquete) {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    xBolinha + raio > xRaquete &&
    yBolinha + raio > yRaquete &&
    yBolinha - raio < yRaquete + raqueteAltura
  ) {
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente() {
  let velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteAltura / 2 - dOponenteBolinha;
  yRaqueteOponente += velocidadeYOponente * 0.9;
  yRaqueteOponente = constrain(yRaqueteOponente, 0, height - raqueteAltura);

  if (pontosDoOponente > meusPontos) {
    dOponenteBolinha = 50;
  } else if (pontosDoOponente < meusPontos && dOponenteBolinha > 0) {
    dOponenteBolinha -= 3;
  }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);

  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);

  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
  if (xBolinha + raio > width) {
    meusPontos++;
    resetaBolinha();
  }
  if (xBolinha - raio < 0) {
    pontosDoOponente++;
    resetaBolinha();
  }
}

function resetaBolinha() {
  xBolinha = width / 2;
  yBolinha = height / 2;
  velocidadeXBolinha *= -1;
  velocidadeYBolinha = random([-10, 10]);
}
