//código do carro

let xCarros = [600,600,600, 600, 600, 600]; //eixos x
let yCarros =[45,100,155, 215, 267, 322]; //eixos y
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
    xCarros[i] = 600
    }
  }
}
