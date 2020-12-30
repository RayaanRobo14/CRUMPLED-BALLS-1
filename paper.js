class Paper {
constructor(x, y, radius) {
   
var options = {
//isStatic:false,
'restitution':0.8,
'friction':0.3,
'density':1.2
}

this.body = Bodies.circle(x,y, radius,options);
this.radius = radius;
/*this.width=20;
this.height=20;*/
World.add(world, this.body);

}
display()
{
    var pos = this.body.position;
    /*pos.x = 100;
    pos.y = 650;*/
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('blue')
    fill('red')
    ellipseMode(CENTER);
    ellipse(0, 0, this.radius);
    pop();
  };
};


