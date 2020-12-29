class drop {
    constructor(){
        this.image=loadImage("images/drop.jpg");
this.body=Bodies.circle(x,y,20);
World.add(world,this.body);
this.body.velocityY= 3;

    }
  display(){
  imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,20);

  }
  
}
