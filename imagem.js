let asfalto;
let ator;
let carro1;
let carro2;
let carro3;
let carro4;
let arvore1;
let arvore2;
let vidas;

let somDaTrilha;
let somDeColisao;
let somDePontos;


function preload(){
  asfalto = loadImage("asfalto.png")
  somDaTrilha = loadSound("trilha.mp3")
  ator = loadImage("pato.png")
  vidas = loadImage("vida.png")
  arvore1 = loadImage("arvore1.png")
  arvore2 = loadImage("arvore.png")
  carro1 = loadImage("carro1.png")
  carro2 = loadImage("carro2.png")
  carro3 = loadImage("carro3.png")
  carro4 = loadImage("carro4.png")  
  imgCarros = [carro1, carro2, carro3, carro4, carro2, carro3]
  somDeColisao = loadSound("colidiu.mp3")
  somDePontos = loadSound("pontos.wav")
  
}