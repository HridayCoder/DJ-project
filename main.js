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
}
}

function draw()
{
image(video,0,0,650,450)
}
song1="";
song2="";

function preload()
{
song1=loadSound('');
song2=loadSound('');
}