var allPlayers;
var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;

var database;

var form, player, game;

var car1, car2, car3, car4, cars;

var c1_img, c2_img, c3_img, c4_img, track ;

function preload(){
  c1_img=loadImage("images/car1.png");
  c2_img=loadImage("images/car2.png");
  c3_img=loadImage("images/car3.png");
  c4_img=loadImage("images/car4.png");
  track=loadImage("images/track.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();

  }
  if(gameState===2){
    game.end()
  }
}
