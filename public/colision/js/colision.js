var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

window.onload = function() {
    document.addEventListener('keydown', function(e) {
        if(e.key == 'ArrowLeft') {
            j.keyLeft = true;
        }
        if(e.key == 'ArrowRight') {
            j.keyRight = true;
        }
        if(e.key == 'ArrowUp') {
            j.keyUp = true;
        }
        if(e.key == 'ArrowDown') {
            j.keyDown = true;
        }
    })
    
    document.addEventListener('keyup', function(e) {
        if(e.key == 'ArrowLeft') {
            j.keyLeft = false;
        }
        if(e.key == 'ArrowRight') {
            j.keyRight = false;
        }
        if(e.key == 'ArrowUp') {
            j.keyUp = false;
        }
        if(e.key == 'ArrowDown') {
            j.keyDown = false;
        }
    })

    j = new Player();
    w = new Wall();
    loop();
}

function Player() {
    this.x = 50;
    this.y = 50;
    this.w = 80;
    this.h = 50;
    this.vel = 5;
    this.color = "black";

    this.keyLeft = false;
    this.keyRight = false;
    this.keyUp = false;
    this.keyDown = false;


    this.draw = function() {
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,this.w,this.h);
    }

    this.move = function() {
        if(this.keyLeft == true) {
            this.x -= this.vel;
        }
        if(this.keyRight == true) {
            this.x += this.vel;
        }
        if(this.keyUp == true) {
            this.y -= this.vel;
        }
        if(this.keyDown == true) {
            this.y += this.vel;
        }
    }
}

function Wall() {
    this.x = 200;
    this.y = 200;
    this.w = 80;
    this.h = 50;
    this.color = "green";

    this.draw = function() {
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,this.w,this.h);
    }
}

function colision() {
    if(j.x < w.x + w.w && j.x + j.w > w.x 
        && j.y < w.y + w.h && j.y+j.h > w.y) {
            window.alert("Chocamos!");
    }
}

function loop() {
    //canvas.width = canvas.witdh;
    j.draw();
    w.draw();
    j.move();
    colision();
    requestAnimationFrame(loop);
}