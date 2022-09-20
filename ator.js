let xAtor = 150;
let yAtor = 340;
let colisao = false;
let meusPontos = 0;
let minhasVidas = 5;

function mostraAtor(){
  image(ator, xAtor, yAtor, 70, 70)
}

function mostraArvore(){
  image(arvore2, 550, -6, 70, 70)
  
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    if (yAtor >= 0){
    yAtor -= 3;
    }
  } if(keyIsDown(DOWN_ARROW)){
    if (yAtor <= 340){
    yAtor += 3;
    }
  }
}

function verificaColisao (){
  for (let i = 0; i < imgCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 100, 29, xAtor, yAtor, 5)
    if (colisao){
      colidiu();
      }
     }
    }

function colidiu(){
  yAtor = 340;
  if (minhasVidas > 0){
    minhasVidas -= 1;
    somDeColisao.play();
    if (minhasVidas == 0){
    minhasVidas = 5;
    meusPontos = 0;
    }
  } 
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 15, 70);
}

function marcaPontos(){
  if (yAtor < 17) {
    meusPontos += 1;
   somDePontos.play();
  } if (yAtor < 17){
    yAtor = 340
  }
}
function mostraVida(){
  image(vidas, 10, 360, 30, 30)

 
  
  
}

function incluirVidas(){
  text(minhasVidas, width / 5, 361, -220)
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
}

