//Create variables here
var database;
var img1,img2;
var dog ,happydog,foods,foodstock;
function preload()
{
  img1 = loadImage("images/dogImg.png");
  img2 = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,350,20,20);
  dog.addImage(img1);
  dog.scale = 0.3;
  foodstock = database.ref("food");
  foodstock.on("value",readstock)
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
 if (keyWentDown(UP_ARROW)){
    writestock(foods);
    dog.addImage(img2);
  }

  //add styles here
  textSize(25);
  fill("white");
  text("Food left : "+ foods,150,100);
  
  
}

function readstock(data){
    foods = data.val();
}
function writestock(x){
  if (x <= 0){
    x = 0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    food : x 
  })
}

