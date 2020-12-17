const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var sling1,sling2,sling3,sling4,sling5;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var mConstraint;
//var Mouse, mouse;

function setup() {
    canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
       mouse: canvasmouse
    }

    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);

    pendulum1 = new Pendulum (120,100,"black");
	pendulum2 = new Pendulum (190,100,"black");
	pendulum3 = new Pendulum (260,100,"black");
	pendulum4 = new Pendulum (330,100,"black");
    pendulum5 = new Pendulum (400,100,"black");
    
   sling1 = new Sling (pendulum1.body, { x: 120, y: 40 });
    sling2 = new Sling (pendulum2.body, { x: 190, y: 40 });
    sling3 = new Sling (pendulum3.body, { x: 260, y: 40 });
    sling4 = new Sling (pendulum4.body, { x: 330, y: 40 });
    sling5 = new Sling (pendulum5.body, { x: 400, y: 40 }); 


    
    Engine.run(engine);
}


function draw() {
    background ("pink");
    Engine.update (engine);

    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();

    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

}

function mouseDragged() {
    Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
  }