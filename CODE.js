  function setup() {
    createCanvas(500, 400);
  }

  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoCarro();
    verificaColisao();
    mostraPontos();
    ganhaPonto();
  }


