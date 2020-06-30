class plinko{
constructor(x,y){


this.body=Bodies.circle(x,y,8,{isStatic:true})



this.color=color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body)


















}


display(){





   // var pos =this.body.position;
    push();
    translate(this.body.position.x, this.body.position.y);
   // rotate(angle);
    ellipseMode(RADIUS);
    fill(this.color)
    ellipse( 0, 0, 8);
    pop();

















}

















}