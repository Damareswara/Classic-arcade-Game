var crashedTimes = 0;
var scoreNow = 0;
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x == 0) {
    this.speed = 100 + Math.floor(Math.random() * 400);
  }
  if (this.x > 500) {
    this.x = 0;
    this.speed = 100 + Math.floor(Math.random() * 400);
  }
  if (player.x < this.x + 80 && player.x + 80 > this.x &&
    player.y < this.y + 80 && player.y + 80 > this.y) {
    crashedTimes = crashedTimes + 1;
    console.log(crashedTimes);
    player.x = 200;
    player.y = 400;
    player.sprit = 'images/char-boy.png';

    document.getElementById("crashed").innerHTML = crashedTimes;
    if (crashedTimes == 5 && scoreNow <= 5) {
      Swal.fire({
        title: 'Game over',
        html: 'Your score  <strong style="color:#ff9ff33; text-shadow:3px 3px 3px"#000">' + scoreNow,
        text: 'Do you want to continue',
        confirmButtonText: 'Play again'
      }).then(() => {
        window.location.reload();
      })
    }
    if (crashedTimes == 5 && (scoreNow >= 6 && scoreNow <= 9)) {
      Swal.fire({
        title: 'Game over',
        html: 'high score <strong style="color:#ff9ff33; text-shadow:3px 3px 3px"#000">' + scoreNow,
        text: 'Do you want to continue',
        confirmButtonText: 'Play again'
      }).then(() => {
        window.location.reload();
      })
    }
    if (crashedTimes == 5 && scoreNow > 9) {
      Swal.fire({
        title: 'Game over',
        html: 'arcad master <strong style="color:#ff9ff33; text-shadow:3px 3px 3px"#000">' + scoreNow,
        text: 'Do you want to continue',
        type: 'error',
        confirmButtonText: 'Play again'
      }).then(() => {
        window.location.reload();
      })
    }
  }
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
  }

}

Player.prototype.update = function(dt) {

}
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var bugLocation = [60, 143, 226];
bugLocation.map((positionY) => {
  var enemyItem = new Enemy(0, positionY, 150);
  allEnemies.push(enemyItem)
})
var player = new Player(202, 400);
Player.prototype.handleInput = function(key) {
  switch (key) {
    case 'left':
      this.x = this.x - 101;
      if (this.x < 0) {
        this.x = 0;

      }

      break;
    case 'right':
      this.x = this.x + 101;
      if (this.x > 400) {
        this.x = 404;

      }
      break;
    case 'up':
      this.y = this.y - 83;
      if (this.y < 60) {
        // this.y=0;
        document.getElementById("score").innerHTML = ++scoreNow;
        setTimeout(() => {
          this.x = 200;
          this.y = 400;
        }, 100);
      }
      break;
    case 'down':
      this.y = this.y + 83;
      if (this.y > 400) {
        this.y = 400;

      }
      break;
    default:

  }
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
