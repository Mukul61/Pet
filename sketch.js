var dog,database,dog1,dog2
var Food
//Create variables here

function preload()
{
dog1= loadImage("dog.png")
dog2= loadImage("happydog.png")


  //load images here
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
console.log(database);
dog=createSprite(400,350,10,10);
dog.addImage(dog1);
foodstock=database.ref('Food')
foodstock.on("value"),readStock
readStock();
writestock();
}


function draw() {  
background(46,139,87)
if(keyDown(UP_ARROW)){
  writestock(foods);
  dog.addImage(dog2)
}

drawSprites();
//add styles here
text("foodstock",400,200);
textSize(5);
fill("pink")
text("Note : Press up arrow to feed Droco milk!!!",100,100)

}
function readStock(data){
  food=data.val();
}
function writestock(x){
  database.ref('/').update({Food:x})
}