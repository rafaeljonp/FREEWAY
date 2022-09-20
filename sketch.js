 

function setup() {
  createCanvas(800, 400);
  somDaTrilha.loop();
  
  
}

function draw() {
  background(asfalto);
  mostraAtor();
  mostraCarros();
  movimentaCarros();
  movimentaAtor();
  voltaCarro();
  mostraArvore();
  verificaColisao();
  incluiPontos();
  mostraVida();
  marcaPontos();
  incluirVidas();
  
  
}






