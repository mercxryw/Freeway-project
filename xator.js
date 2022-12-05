//variaveis ator

let yAtor = 366;
let xAtor = 90;
let colisao = false;
let meusPontos = 0;

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
       yAtor += 3;
    }
  }
}

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i =0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, xAtor, 15)
    if(colisao){
      voltaPosicaoInicial();
      perdePonto();
    }
  }
}

function voltaPosicaoInicial(){
  yAtor = 366;
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,140,0));
  text(meusPontos, width/5, 27);
}

function ganhaPonto(){
  if (yAtor < 27){
    meusPontos += 1;
    voltaPosicaoInicial();
  }
}

function perdePonto(){
  if(meusPontos > 0){
    meusPontos -= 1;
  }
}

function podeSeMover(){
  return yAtor < 366;
}
