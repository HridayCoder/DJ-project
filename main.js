rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
song1Status="";
song2Status="";

function setup()
{
canvas=createCanvas(650,450);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log("model is loaded !");
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX= "+rightWristX+" rightWristY= "+rightWristY);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristX= "+leftWristX+" leftWristY= "+leftWristY);
}
}

function draw()
{
image(video,0,0,650,450);
circle(leftWristX,leftWristY,20);
stroke('#ff0000');
fill('#ff0000');
}
song1="Intentions - Justin Bieber.mp3";
song2="Stitches - Shawn Mendes.mp3";

function preload()
{
song1=loadSound('Intentions - Justin Bieber.mp3');
song2=loadSound('Stitches - Shawn Mendes.mp3');
}

function play()
{
song1.play();
song1.setVolume(1);
song1.rate(1);
}