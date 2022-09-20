let xCarros = [840, 840, 840, 840, 840, 840]
let yCarros = [44, 87, 137, 177, 232, 290]
let velocidade = [8.5, 7.2, 7, 5.9, 5.7, 10]
let cCarro = 134;
let lCarro = 75;

function mostraCarros(){
    for (let i = 0; i < imgCarros.length; i++){
    image(imgCarros[i], xCarros[i], yCarros[i], cCarro, lCarro);
  }
}



/*
function mostraCarros(){
    image(carros[3], xCarros[0], yCarros[0], cCarro, lCarro)
    image(carros[1], xCarros[1], yCarros[1], cCarro, lCarro)
    image(carros[2], xCarros[2], yCarros[2], cCarro, lCarro)
    image(carros[0], xCarros[3], yCarros[3], cCarro, lCarro)
    image(carros[1], xCarros[4], yCarros[4], cCarro, lCarro)
    image(carros[2], xCarros[5], yCarros[5], cCarro, lCarro)
}
*/

function movimentaCarros(){
  for (let i = 0; i < imgCarros.length; i++){
    xCarros[i] -= velocidade[i];
  }
}

/*
function movimentaCarros(){
  xCarros[0] -= velocidade[0]
  xCarros[1] -= velocidade[1]
  xCarros[2] -= velocidade[2]
  xCarros[3] -= velocidade[3]
  xCarros[4] -= velocidade[4]
  xCarros[5] -= velocidade[5]

}
*/
function voltaCarro(){
  for (let i = 0; i < imgCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 800;
    }
  }
}

function passouTodaATela(xCarros){
  return xCarros < - 150;
}


/*
function voltaCarro(){
  if (xCarros[0] < -160){
    xCarros[0] = 800;
  }   if (xCarros[1] < -160){
    xCarros[1] = 800;
  }   if (xCarros[2] < -160){
    xCarros[2] = 800;
  }   if (xCarros[3] < -160){
    xCarros[3] = 800;
  }   if (xCarros[4] < -160){
    xCarros[4] = 800;
  }   if (xCarros[5] < -160){
    xCarros[5] = 800;
  }
}
*/






