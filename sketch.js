var canvas,background
var together,
var tom,tomimg1,jerryimg2

 

function preload() {
    background=loadImage("image/garden.png")
    tomimg1=loadAnimation("image/tomone.png")
    tomimg2=loadAnimation("image/tomtwo.png")
    tomimg3=loadAnimation("image/tomfour.png")
    jerryimg1=loadAnimation("image/jerryone.png")
    jerryimg1=loadAnimation("image/jerrytwo.png")
    jerryimg1=loadAnimation("image/jerryfour.png")
    


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600)
    tom.addAnimation("jerryStanding",jerryimg1)
    tom.scale=0.3

    jerry=createSprite(200,600)
    jerry.addAnimation("jerryStanding",jerryimg1)
    jerry.scale=0.15

}

function draw() {

    background(255);
    if(tom.x-jerry.x <(tom.width-jerry.width)/2)
    tom.velocityX=
    tom.addAnimation("tomlastImage",tomimg3)
    tom.X=300
    tom.scale=0.2
    tom.changeAnimation("tomLastImage")
    jerry.addAnimation("jerryLastImage",jerryimg3)
    jerry.scale=0.15
    jerry.changeAnimation("jerryLastImage")


    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("tomrunning",tomimg2)
    tom.changeAnimation("tomRunning")

    jerry.addAnimation("jerryTeasing",jerryimg2)
    jerry.frameDelay=25;
    jerry.changeAnimation("jerryTeasing")




}



}
