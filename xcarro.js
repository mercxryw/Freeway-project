//variaveis carro 1

let xCarros = [510, 510, 510, 510, 510, 510];
let yCarros = [45, 100, 155, 210, 260, 310];
let velocidadeCarros = [3.5, 4.7, 6, 4, 5, 3.9];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i]; 
  }
}

function voltaPosicaoCarro() {
  for (let i = 0; i < imagemCarros.length; i++){
   if (passouTodaATela(xCarros[i])) {
    xCarros[i] = 600;
   }
  }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}
