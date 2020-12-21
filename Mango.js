class Mango{
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1,
        }
        this.body = Matter.Bodies.circle(x, y, (radius)/2, options);
        this.radius = radius;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
   }
}