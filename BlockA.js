class BlockA{
    constructor(x, y, width, height){
        var options = {
            'isStatic': false
        }
  
        this.body   = Bodies.rectangle(x, y, width, height, options);
        this.width  = width;
        this.height = height;
        this.visibility = 255;
  
        World.add(userWorld, this.body);
    }
  
    display(){
        if(this.body.speed<7){
            var pos = this.body.position;
            rectMode(CENTER);
            strokeWeight(1);
            stroke("brown");
            fill("red");
            rect(pos.x, pos.y, this.width, this.height);
        }
        else{
            World.remove(userWorld,this.body);
            push();
            this.visibility =  this.visibility - 5;
            tint(255,this.visibility);
            pop();
        }

    }
  }