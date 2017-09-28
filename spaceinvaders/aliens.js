function update() {
  for (var i = 0; i<aliens.length; i++) {
    var a = aliens[i];
    a.position.x += speed;
    if (a.position.x > width - 100 || 
      a.position.x < 100) {
      speed = speed * -1;
      //aliens[i].position.y += 80;
      edge = true;
    }
  }
  if (edge) {
    for (var i = 0; i < aliens.length; i++) {
      aliens[i].position.y += 80;
      edge = false;
    }
  }
}



