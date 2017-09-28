//github terminal color code: git config color.ui true

var x;
var y;
var speed = 5;
var edge = false;


function preload() {
  ship1 = loadImage("ship.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = createSprite(width/2, height-35);
  ship.addImage("normal", ship1);
  bunkers = new Group();
  bullets = new Group();
  aliens = new Group();
  
 

  //assign new sprites to the respective groups
  for (var i = 0; i<10; i++) {
    var alien = createSprite(320+i*80, 40);
    alien.addAnimation("normal", "alien1.png", "alien2.png");
    alien.scale = 0.8;
    aliens.add(alien);
  }
  for (var i = 0; i<10; i++) {
    var alien = createSprite(320+i*80, 100);
    alien.addAnimation("normal", "alien3.png", "alien4.png");
    alien.scale = 0.7;
    aliens.add(alien);
  }  
  for (var i = 0; i<10; i++) {
    var alien = createSprite(320+i*80, 160);
    alien.addAnimation("normal", "alien3.png", "alien4.png");
    alien.scale = 0.7;
    aliens.add(alien);
  }
  for (var i = 0; i<10; i++) {
    var alien = createSprite(320+i*80, 220);
    alien.addAnimation("normal", "alien5.png", "alien6.png");
    alien.scale = 0.6;
    aliens.add(alien);
  }
  for (var i = 0; i<10; i++) {
    var alien = createSprite(320+i*80, 280);
    alien.addAnimation("normal", "alien5.png", "alien6.png");
    alien.scale = 0.6;
    aliens.add(alien);
  }


  for (var i = 0; i < 4; i++) {
    for (var c = 0; c < 5; c++) {
      var bunker = createSprite(109+i*340, (200+c*10)+340, 8, 10);
      bunker.shapeColor = color(36, 102, 20);
      bunkers.add(bunker);
    }
    for (var c = 0; c < 6; c++) {
      var bunker = createSprite(117+i*340, (190+c*10)+340, 8, 10);
      bunker.shapeColor = color(36, 102, 20);
      bunkers.add(bunker);
    }
    for (var c = 0; c < 7; c++) {
      var bunker = createSprite(124+i*340, (180+c*10)+340, 8, 10);
      bunker.shapeColor = color(36, 102, 20);
      bunkers.add(bunker);
    }
    for (var r = 0; r < 4; r++) {
      for (var c = 0; c < 7; c++) {
        var bunker = createSprite((133+c*10)+i*340, (172+r*12)+340, 11, 13);
        bunker.shapeColor = color(36, 102, 20);
        bunkers.add(bunker);
      }
    }
    for (var c = 0; c < 7; c++) {
      var bunker = createSprite(202+i*340, (180+c*10)+340, 8, 10);
      bunker.shapeColor = color(36, 102, 20);
      bunkers.add(bunker);
    }
    for (var c = 0; c < 6; c++) {
      var bunker = createSprite(210+i*340, (190+c*10)+340, 8, 10);
      bunker.shapeColor = color(36, 102, 20);
      bunkers.add(bunker);
    }
    for (var c = 0; c < 5; c++) {
      var bunker = createSprite(218+i*340, (200+c*10)+340, 8, 10);
      bunker.shapeColor = color(36, 102, 20);
      bunkers.add(bunker);
    }
    for (var c = 0; c < 3; c++) {
      var bunker = createSprite((184+c*6)+i*340, 219+340, 8, 10);
      bunker.shapeColor = color(36, 102, 20);
      bunkers.add(bunker);
    }
    var bunker = createSprite(195+i*340, 229+340, 8, 10);
    bunker.shapeColor = color(36, 102, 20);
    bunkers.add(bunker);

    for (var c = 0; c < 3; c++) {
      var bunker = createSprite((132+c*6)+i*340, 219+340, 9, 10);
      bunker.shapeColor = color(36, 102, 20);
      bunkers.add(bunker);
    }
    var bunker = createSprite(132+i*340, 229+340, 8, 10);
    bunker.shapeColor = color(36, 102, 20);
    bunkers.add(bunker);
  }
}

function draw() {
  background(0);
  drawSprites();
  update();
  //alienMove();
  
  bullets.bounce(aliens, alienHit);
  
  bullets.bounce(bunkers, bunkerHit);
 
  if (keyDown(LEFT_ARROW)) {
    ship.position.x -= 15; 
    if (ship.position.x <= 10) {
      ship.position.x = 10;
    }
  } else if (keyDown(RIGHT_ARROW)) {
    ship.position.x += 15; 
    if (ship.position.x > width - 10) {
      ship.position.x = width - 10;
    }
  } 

  if (keyWentDown(" ")) {
    var bullet = createSprite(ship.position.x, ship.position.y-20, 2, 10);
    bullet.shapeColor = color(255);
    bullet.setSpeed(20, 270);
    bullet.life = 30;
    bullets.add(bullet);
    
    
  }
  console.log(bullets);
}

function bunkerHit(bullets, bunker) {
  bunker.remove();
  bullets.remove();
}

function alienHit(bullets, alien) {
  alien.remove();
  bullets.remove();
}