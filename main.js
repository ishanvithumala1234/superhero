var canvas=new fabric.Canvas("myCanvas");
hero_image_width=30;
hero_image_height=30;
hero_x=10;
hero_y=10;
var hero_object="";
var hero_image_object="";
function hero_update() {
    fabric.Image.fromURL("player.webp",function(Img){
        hero_object=Img;
        hero_object.scaleToWidth(50);
        hero_object.scaleToHeight(140);
        hero_object.set({
            top:hero_y,
            left:hero_x,
        });

        canvas.add(hero_object);  
    })
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
        hero_image_object=Img;
        hero_image_object.scaleToWidth(hero_image_width);
        hero_image_object.scaleToHeight(hero_image_height);
        hero_image_object.set({
            top:hero_y,
            left:hero_x
        });

        canvas.add(hero_image_object);  
    })
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
  keypressed=e.keyCode;
  console.log(keypressed);
  if(e.shiftKey==true && keypressed==80){
      console.log("P and shift pressed together");
      hero_image_width=hero_image_width+10;
      hero_image_height=hero_image_height+10;
document.getElementById("currentWidth").innerHTML=block_image_width;
document.getElementById("currentHeight").innerHTML=block_image_height;
  }
  if(e.shiftKey==true && keypressed==77){
    console.log("M and shift pressed together");
    hero_image_width=hero_image_width-10;
    hero_image_height=hero_image_height-10;
document.getElementById("currentWidth").innerHTML=hero_image_width;
document.getElementById("currentHeight").innerHTML=hero_image_height;
}
 if(keypressed=='38') {
     up();
     console.log("up");
 }
 if(keypressed=='40') {
     down();
     console.log("down");
 }
 if(keypressed=='37') {
    left();
    console.log("left");
}
if(keypressed=='39') {
    right();
    console.log("right");
}
if(keypressed=='87') {
    new_image('wall.jpg');
    console.log("w");
}
if(keypressed=='71') {
    new_image('ground.png');
    console.log("g");
}
if(keypressed=='76') {
    new_image('light_green.png');
    console.log("l");
}
if(keypressed=='84') {
    new_image('trunk.jpg');
    console.log("t");
}
if(keypressed=='82') {
    new_image('roof.jpg');
    console.log("r");
}
if(keypressed=='89') {
    new_image('yellow_wall.png');
    console.log("y");
}
if(keypressed=='68') {
    new_image('dark_green.png');
    console.log("d");
}
if(keypressed=='85') {
    new_image('unique.png');
    console.log("u");
}
if(keypressed=='67') {
    new_image('cloud.jpg');
    console.log("c");
}
}
function up() {
   if(hero_y>=0) {
    hero_y=hero_y - 10;
       console.log("Hero image height =" + hero_image_height);
       console.log("Block image Width =" + hero_image_width);
       console.log("When up arrow key is pressed, x=" + hero_x +",y=" + hero_y);
       canvas.remove(hero_object);
       hero_update();
   }
}
function down() {
       if(hero_y<=450) {
        hero_y=hero_y + 10;
       console.log("Hero image height =" + hero_image_height)
       console.log("Hero image Width =" + hero_image_width);
       console.log("When down arrow key is pressed, x= "+ hero_x +",y=" + hero_y);
       canvas.remove(hero_object);
       hero_update();
       }
   }
   function left() {
    if(hero_x>=0) {
    hero_x=hero_x - 10;
    console.log("Hero image height =" + hero_image_height)
    console.log("Hero image Width =" + hero_image_width);
    console.log("When left arrow key is pressed, x= "+ hero_x +",y=" + hero_y);
    canvas.remove(hero_object);
    hero_update();
    }
}
function right() {
    if(hero_x<850) {
    hero_x=hero_x + 10;
    console.log("hero image height =" + hero_image_height)
    console.log("hero image Width =" + hero_image_width);
    console.log("When right arrow key is pressed, x= "+ hero_x +",y=" +hero_y);
    canvas.remove(hero_object);
    hero_update();
    }
}
