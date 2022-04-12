noseX=0;
noseY=0;
LeftwristX=0;
RightwristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(470,570);
    video.position(50,90);
    canvas=createCanvas(570,400);
    canvas.position(550,170);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
background('red');
stroke('blue');
square(noseX,noseY,difference);
document.getElementById("square").innerHTML="Length and Width of the square is " + difference + "px";
}

function modelLoaded(){
    console.log("result");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
console.log(noseX);
noseY=results[0].pose.nose.y;
console.log(noseY);
LeftwristX=results[0].pose.leftWrist.x;
console.log(LeftwristX);
RightwristX=results[0].pose.rightWrist.x;
console.log(RightwristX);
difference=LeftwristX-RightwristX;
difference=Math.round(difference);
console.log(difference);
}
}