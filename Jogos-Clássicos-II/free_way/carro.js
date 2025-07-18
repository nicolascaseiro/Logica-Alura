let xCarros = [600, 600, 600, 600, 600, 600]; //eixos x
let yCarros =[45, 100, 155, 215, 267, 322]; //eixos y
let velocidadeCarros = [2, 2.5, 3.2, 2.1, 3.5, 2.5]; //velocidades

let comprimentoCarro = 50;
let alturaCarro = 30;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++ ){ 
      image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}
function movimentaCarro(){
  for (i = 0; i <  imagemCarros.length; i++){ 
    xCarros[i] -= velocidadeCarros[i];
  }
}
function voltaPosicaoCarro(){
  for(i = 0; i<imagemCarros.length; i++){
      if (passouTodaTela()){
    xCarros[i] = 600;
    }
  }
}
function passouTodaTela(){
  return xCarros[i] < -50;
}
function aumentaVelocidade(){
    if (meusPontos > 1){
    velocidadeCarros = [3, 3.5, 4.2, 3.1, 4.5, 3.5];
    }
    if (meusPontos > 2){
    velocidadeCarros = [4, 4.5, 5.2, 4.1, 5.5, 4.5];
    }
    if (meusPontos > 3){
    velocidadeCarros = [5, 5.5, 6.2, 5.1, 6.5, 5.5];
    }
    if (meusPontos > 4){
    velocidadeCarros = [6, 6.5, 7.2, 6.1, 7.5, 6.5];
    }
    if (meusPontos > 5){
    velocidadeCarros = [6, 6.5, 7.2, 6.1, 7.5, 6.5];
    }
    if (meusPontos > 6){
    velocidadeCarros = [9, 9.5, 10.2, 9.1, 10.5, 9.5];
    }
}
function resultado(){
  if (meusPontos - pontosOponente >= 3){
    textAlign(CENTER);
    textSize(66);
    text("VOCÊ VENCEU!",250,200)
    velocidadeCarros = [0, 0, 0, 0, 0, 0];
  }
}
console.log(velocidadeCarros)
